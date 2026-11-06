import React from 'react';

interface BrandLogoProps {
  variant?: 'horizontal' | 'vertical' | 'symbol';
  theme?: 'light' | 'dark' | 'monochrome';
  className?: string;
  showTagline?: boolean;
  lang?: 'pt' | 'en';
}

export const BrandSymbol: React.FC<{
  size?: number;
  dotColor?: string;
  lineColor?: string;
  className?: string;
}> = ({
  size = 40,
  dotColor = '#D9531E',
  lineColor = '#0E1726',
  className = '',
}) => {
  // Ultra-minimalist geometric convergence node:
  // Central solid dot with three fine precision lines converging into it
  // (Top at 90°, Bottom-Left at 210°, Bottom-Right at 330°)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Consiglieri Convergence Node Symbol"
    >
      {/* Top vertical convergence line */}
      <line
        x1="50"
        y1="14"
        x2="50"
        y2="42"
        stroke={lineColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Bottom-left convergence line (210°) */}
      <line
        x1="22"
        y1="66"
        x2="44"
        y2="54"
        stroke={lineColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Bottom-right convergence line (330°) */}
      <line
        x1="78"
        y1="66"
        x2="56"
        y2="54"
        stroke={lineColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Central focal node dot */}
      <circle cx="50" cy="50" r="7" fill={dotColor} />
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  showTagline = true,
  lang = 'pt',
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#0E1726';
  const tagColor = isDark ? '#94A3B8' : '#475569';
  const lineColor = isDark ? '#F8F9FA' : '#0E1726';
  const dotColor = '#D9531E'; // Official warm orange focal accent

  const taglineText =
    lang === 'en'
      ? 'Resolution without complication.'
      : 'Resolução sem complicação.';

  if (variant === 'symbol') {
    return (
      <BrandSymbol
        size={36}
        dotColor={dotColor}
        lineColor={lineColor}
        className={className}
      />
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <BrandSymbol size={56} dotColor={dotColor} lineColor={lineColor} />
        <span
          className="mt-3 font-sans font-bold tracking-[0.22em] text-xl sm:text-2xl uppercase select-none"
          style={{ color: textColor }}
        >
          CONSIGLIERI
        </span>
        {showTagline && (
          <span
            className="mt-1 text-xs tracking-wide font-normal select-none"
            style={{ color: tagColor }}
          >
            {taglineText}
          </span>
        )}
      </div>
    );
  }

  // Default: Horizontal lockup (ideal for headers)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <BrandSymbol
        size={38}
        dotColor={dotColor}
        lineColor={lineColor}
        className="flex-shrink-0"
      />
      <div className="flex flex-col justify-center select-none">
        <span
          className="font-sans font-extrabold tracking-[0.2em] text-base sm:text-lg leading-tight uppercase"
          style={{ color: textColor }}
        >
          CONSIGLIERI
        </span>
        {showTagline && (
          <span
            className="text-[10px] sm:text-[11px] tracking-tight font-medium"
            style={{ color: tagColor }}
          >
            {taglineText}
          </span>
        )}
      </div>
    </div>
  );
};
