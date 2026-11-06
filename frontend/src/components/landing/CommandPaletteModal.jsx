import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchCities, FALLBACK_CITIES } from '../../lib/supabase';

export default function CommandPaletteModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(FALLBACK_CITIES.slice(0, 6));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setResults(FALLBACK_CITIES.slice(0, 6));
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 50);
    }
  }, [isOpen]);

  // Query cities from Supabase cities table with fallback
  useEffect(() => {
    if (!isOpen) return;
    let isCancelled = false;
    setIsLoading(true);

    const timer = setTimeout(async () => {
      const data = await searchCities(query);
      if (!isCancelled) {
        setResults(data);
        setSelectedIndex(0);
        setIsLoading(false);
      }
    }, 150);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [query, isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results.length > 0 && results[selectedIndex]) {
          handleSelectCity(results[selectedIndex].name);
        } else if (query.trim().length > 0) {
          handleSelectCity(query.trim());
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, query, onClose]);

  const handleSelectCity = (cityName) => {
    onClose();
    navigate(`/explore/${encodeURIComponent(cityName)}`);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-primary/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="City search command palette"
    >
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-surface-container-high gap-3 bg-surface-container-lowest">
          <span className="material-symbols-outlined text-secondary text-xl">search</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destination cities (e.g. Mathura, Vrindavan, Jaipur)..."
            className="w-full bg-transparent border-none outline-none font-medium text-sm sm:text-base text-primary placeholder:text-text-gray/60"
            autoComplete="off"
            spellCheck="false"
          />
          {isLoading && (
            <div className="w-4 h-4 border-2 border-secondary/20 border-t-secondary rounded-full animate-spin shrink-0" />
          )}
          <kbd
            onClick={onClose}
            className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-surface-container text-text-gray border border-surface-container-high cursor-pointer hover:bg-surface-container-high shrink-0"
            title="Press Esc to close"
          >
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          <div className="px-3 py-1.5 text-[11px] font-semibold text-text-gray uppercase tracking-wider flex items-center justify-between">
            <span>{query.trim().length > 0 ? 'Matching Corridors' : 'Popular Corridors'}</span>
            <span className="text-secondary text-[10px]">Navigate with ↑ ↓ · Enter to view</span>
          </div>

          {results.length === 0 ? (
            <div className="py-8 text-center text-text-gray text-sm">
              <span className="material-symbols-outlined text-3xl mb-1 text-text-gray/40">location_off</span>
              <p>No verified corridors matching "{query}"</p>
              <button
                type="button"
                onClick={() => handleSelectCity(query.trim())}
                className="mt-3 text-xs font-semibold text-secondary hover:underline"
              >
                Explore "{query.trim()}" anyway →
              </button>
            </div>
          ) : (
            <ul className="space-y-1">
              {results.map((city, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleSelectCity(city.name)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-left flex items-center justify-between transition-colors ${
                        isSelected
                          ? 'bg-secondary/10 text-primary'
                          : 'hover:bg-surface-container-low text-primary'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'bg-secondary text-white'
                              : 'bg-surface-container text-secondary'
                          }`}
                        >
                          <span className="material-symbols-outlined text-base">
                            {city.icon || 'location_on'}
                          </span>
                        </span>
                        <div className="min-w-0">
                          <div className="font-serif font-bold text-sm text-primary truncate">
                            {city.name}
                          </div>
                          <div className="text-xs text-text-gray truncate">
                            {city.state} {city.region ? `· ${city.region}` : ''}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0 ml-3">
                        {isSelected && (
                          <span className="text-[11px] font-medium text-secondary hidden sm:inline">
                            Go to /explore
                          </span>
                        )}
                        <span
                          className={`material-symbols-outlined text-sm ${
                            isSelected ? 'text-secondary translate-x-0.5' : 'text-text-gray/40'
                          } transition-transform`}
                        >
                          arrow_forward
                        </span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 bg-surface-container-low/60 border-t border-surface-container-high/60 flex items-center justify-between text-[11px] text-text-gray">
          <span>Search verified corridors across India</span>
          <div className="flex items-center gap-2">
            <span>Press <kbd className="px-1 py-0.5 rounded bg-white border border-surface-container text-primary font-mono text-[10px]">↵</kbd> to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
}

