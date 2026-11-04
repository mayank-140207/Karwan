import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl.trim() !== '' && 
  supabaseAnonKey.trim() !== ''
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Curated list of verified travel destinations across India for autocomplete fallback
export const FALLBACK_CITIES = [
  { name: 'Mathura & Vrindavan', state: 'Uttar Pradesh', region: 'Braj Heritage Corridor', icon: 'temple_hindu' },
  { name: 'Jaipur', state: 'Rajasthan', region: 'Pink City Royal Circuit', icon: 'fort' },
  { name: 'Varanasi', state: 'Uttar Pradesh', region: 'Ghats & Spiritual Heartland', icon: 'water' },
  { name: 'Udaipur', state: 'Rajasthan', region: 'Mewar Lakes & Palaces', icon: 'castle' },
  { name: 'Agra', state: 'Uttar Pradesh', region: 'Mughal Architectural Route', icon: 'account_balance' },
  { name: 'Kochi & Fort Kochi', state: 'Kerala', region: 'Spice Coast & Backwaters', icon: 'sailing' },
  { name: 'Rishikesh', state: 'Uttarakhand', region: 'Garhwal Foothills & Ashrams', icon: 'landscape' },
  { name: 'Amritsar', state: 'Punjab', region: 'Golden Temple Heritage Walk', icon: 'stars' },
  { name: 'Hampi', state: 'Karnataka', region: 'Vijayanagara Boulder Ruins', icon: 'hiking' }
];

/**
 * Searches cities from Supabase 'cities' table with fallback to curated destinations
 */
export async function searchCities(query) {
  if (!query || query.trim().length === 0) {
    return FALLBACK_CITIES.slice(0, 5);
  }

  const cleanQuery = query.trim().toLowerCase();

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('cities')
        .select('name, state, region')
        .ilike('name', `%${cleanQuery}%`)
        .limit(6);

      if (!error && data && data.length > 0) {
        return data;
      }
    } catch {
      // Gracefully fall back to local list on network or schema error
    }
  }

  return FALLBACK_CITIES.filter(
    (c) =>
      c.name.toLowerCase().includes(cleanQuery) ||
      c.state.toLowerCase().includes(cleanQuery) ||
      c.region.toLowerCase().includes(cleanQuery)
  );
}

/**
 * Fetches real platform counters from Supabase without inventing numbers
 */
export async function fetchLiveStats() {
  const stats = {
    citiesLive: 0,
    placesVerified: 0,
    fareReports: 0,
    modules: 4 // The 4 core architectural modules of Karwan
  };

  if (!isSupabaseConfigured || !supabase) {
    return stats;
  }

  try {
    const [citiesRes, placesRes, faresRes] = await Promise.allSettled([
      supabase.from('cities').select('*', { count: 'exact', head: true }),
      supabase.from('places').select('*', { count: 'exact', head: true }),
      supabase.from('fare_reports').select('*', { count: 'exact', head: true })
    ]);

    if (citiesRes.status === 'fulfilled' && typeof citiesRes.value.count === 'number') {
      stats.citiesLive = citiesRes.value.count;
    }
    if (placesRes.status === 'fulfilled' && typeof placesRes.value.count === 'number') {
      stats.placesVerified = placesRes.value.count;
    }
    if (faresRes.status === 'fulfilled' && typeof faresRes.value.count === 'number') {
      stats.fareReports = faresRes.value.count;
    }
  } catch {
    // Leave at 0 if unresolvable
  }

  return stats;
}

