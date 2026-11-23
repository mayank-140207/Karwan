import React from 'react';

/**
 * AccentHeading component
 * Headings Inter 700 with letter-spacing -0.03em, tight line-height,
 * with ONE italic serif phrase per heading (Noto Serif italic 400, same font size).
 * 
 * Supports:
 * 1) Markdown syntax: <AccentHeading as="h2">Every route, *verified* by ground truth</AccentHeading>
 * 2) Props: <AccentHeading as="h2" text="Every route, verified by ground truth" italicPhrase="verified" />
 * 3) Discrete props: <AccentHeading as="h1" prefix="From departure" italic="to verified" suffix="arrival" />
 */
export default function AccentHeading({
  as: Component = 'h2',
  text,
  italicPhrase,
  prefix,
  italic,
  suffix,
  size = 'h2',
  dark = false,
  className = '',
  children
}) {
  const sizeClasses = {
    display: 'text-4xl sm:text-5xl lg:text-6xl leading-[1.1]',
    h1: 'text-3xl sm:text-4xl lg:text-5xl leading-[1.15]',
    h2: 'text-2xl sm:text-3xl lg:text-4xl leading-[1.2]',
    h3: 'text-xl sm:text-2xl lg:text-3xl leading-[1.25]',
    h4: 'text-lg sm:text-xl lg:text-2xl leading-[1.3]',
  };

  const selectedSize = sizeClasses[size] || sizeClasses.h2;
  const textColor = dark ? 'text-white' : 'text-ink';

  const renderItalicSpan = (phrase, key = 'italic') => (
    <span
      key={key}
      className="font-serif italic font-normal tracking-normal inline-block pr-1.5"
    >
      {phrase}
    </span>
  );

  let content = null;

  if (prefix !== undefined || italic !== undefined || suffix !== undefined) {
    content = (
      <>
        {prefix && <span>{prefix} </span>}
        {italic && renderItalicSpan(italic)}
        {suffix && <span> {suffix}</span>}
      </>
    );
  } else {
    let rawText = text || (typeof children === 'string' ? children : '');

    // Check if markdown asterisk wrapping is used: e.g. "Every route, *verified* by ground truth"
    if (rawText && rawText.includes('*')) {
      const parts = rawText.split('*');
      content = parts.map((part, index) => {
        if (index % 2 === 1) {
          return renderItalicSpan(part, index);
        }
        return <span key={index}>{part}</span>;
      });
    } else if (italicPhrase && rawText && rawText.includes(italicPhrase)) {
      const cleanText = rawText.replace(/\*/g, '');
      const parts = cleanText.split(italicPhrase);
      content = (
        <>
          {parts[0]}
          {renderItalicSpan(italicPhrase)}
          {parts.slice(1).join(italicPhrase)}
        </>
      );
    } else {
      content = children || rawText;
    }
  }

  return (
    <Component
      className={`font-sans font-bold tracking-[-0.03em] ${selectedSize} ${textColor} ${className}`}
    >
      {content}
    </Component>
  );
}
