import React from 'react';

/**
 * DeviceFrame component
 * Mockup container for Browser and Phone frames with CSS perspective tilt.
 * 
 * @param {'browser' | 'phone'} type
 * @param {'none' | 'left' | 'right' | 'subtle'} tilt - 3D CSS perspective angle
 * @param {string} url - Browser address bar URL
 * @param {string} src - Optional image src
 * @param {boolean} dark - Dark frame styling
 */
export default function DeviceFrame({
  type = 'browser',
  tilt = 'none',
  url = 'karwan.app/explore',
  src,
  alt = 'Karwan application screen',
  children,
  dark = false,
  className = ''
}) {
  const tiltClasses = {
    none: '',
    left: 'lg:[transform:rotateY(-8deg)_rotateX(4deg)]',
    right: 'lg:[transform:rotateY(8deg)_rotateX(4deg)]',
    subtle: 'lg:[transform:rotateY(-4deg)_rotateX(2deg)]',
  };

  if (type === 'phone') {
    return (
      <div className={`perspective-1200 transition-transform duration-500 ${className}`}>
        <div
          className={`
            relative mx-auto w-full max-w-[300px] sm:max-w-[320px] rounded-[40px] p-3 shadow-floating border
            ${dark ? 'bg-[#0B1220] border-[#162238]' : 'bg-white border-[#D0D5DD]'}
            ${tiltClasses[tilt]}
          `.trim()}
        >
          {/* Dynamic Island / Notch */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-end pr-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-white/10" />
          </div>

          {/* Phone Screen Canvas */}
          <div className="relative rounded-[32px] overflow-hidden bg-background aspect-[9/19.5] border border-black/5 flex flex-col">
            {src ? (
              <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
            ) : (
              children
            )}
          </div>

          {/* Home indicator bar */}
          <div className="w-32 h-1 bg-black/20 dark:bg-white/20 rounded-full mx-auto mt-2" />
        </div>
      </div>
    );
  }

  // Browser Frame
  return (
    <div className={`perspective-1600 transition-transform duration-500 ${className}`}>
      <div
        className={`
          relative w-full rounded-card overflow-hidden shadow-floating border
          ${dark ? 'bg-[#0B1220] border-[#162238]' : 'bg-white border-border'}
          ${tiltClasses[tilt]}
        `.trim()}
      >
        {/* Browser Top Window Bar */}
        <div
          className={`
            flex items-center justify-between px-4 py-3 border-b text-xs
            ${dark ? 'bg-[#070B14] border-[#162238] text-white/70' : 'bg-[#F2F4F6] border-border text-muted'}
          `}
        >
          {/* 3 Window Control Dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>

          {/* Browser Address Bar */}
          <div
            className={`
              flex items-center gap-2 px-3 py-1 rounded-md max-w-sm w-full mx-4 truncate text-[11px] font-mono border
              ${dark ? 'bg-[#0B1220] border-[#162238] text-white/80' : 'bg-white border-border text-ink/80'}
            `}
          >
            <svg className="w-3 h-3 text-green shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="truncate">{url}</span>
          </div>

          {/* Action icons dummy */}
          <div className="w-10 shrink-0 flex justify-end gap-1.5 opacity-60">
            <span className="w-2.5 h-2.5 rounded-sm border border-current" />
          </div>
        </div>

        {/* Viewport content */}
        <div className="relative bg-background overflow-hidden">
          {src ? (
            <img src={src} alt={alt} className="w-full h-auto object-cover object-top" />
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}
