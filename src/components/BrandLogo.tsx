import React from 'react';

interface BrandLogoProps {
  variant?: 'horizontal' | 'vertical' | 'symbol';
  theme?: 'light' | 'dark' | 'monochrome';
  className?: string;
  showTagline?: boolean;
  lang?: 'pt' | 'en';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandSymbol: React.FC<{
  size?: number;
  dotColor?: string;
  lineColor?: string;
  className?: string;
}> = ({
  size = 44,
  dotColor = '#D9531E',
  lineColor = '#FFFFFF',
  className = '',
}) => {
  // Geometric convergence node:
  // Central solid dot with three fine precision lines converging directly into it
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
        y1="12"
        x2="50"
        y2="41"
        stroke={lineColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Bottom-left convergence line (210°) */}
      <line
        x1="20"
        y1="68"
        x2="43"
        y2="55"
        stroke={lineColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Bottom-right convergence line (330°) */}
      <line
        x1="80"
        y1="68"
        x2="57"
        y2="55"
        stroke={lineColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Central focal node dot */}
      <circle cx="50" cy="50" r="7.5" fill={dotColor} />
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  className = '',
  showTagline = true,
  lang = 'pt',
  size = 'md',
}) => {
  const isLight = theme === 'light';
  const textColor = isLight ? '#0E1726' : '#FFFFFF';
  const tagColor = isLight ? '#475569' : '#94A3B8';
  const lineColor = isLight ? '#0E1726' : '#FFFFFF';
  const dotColor = '#D9531E'; // Official warm orange focal accent

  const taglineText =
    lang === 'en'
      ? 'Resolution without complication.'
      : 'Resolução sem complicação.';

  if (variant === 'symbol') {
    const symbolPx = size === 'sm' ? 32 : size === 'lg' ? 56 : size === 'xl' ? 80 : 44;
    return (
      <BrandSymbol
        size={symbolPx}
        dotColor={dotColor}
        lineColor={lineColor}
        className={className}
      />
    );
  }

  if (variant === 'vertical') {
    const symbolPx = size === 'sm' ? 44 : size === 'lg' ? 72 : size === 'xl' ? 96 : 60;
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <BrandSymbol size={symbolPx} dotColor={dotColor} lineColor={lineColor} />
        <span
          className="mt-3 font-sans font-black tracking-[0.24em] text-xl sm:text-2xl lg:text-3xl uppercase select-none leading-none"
          style={{ color: textColor }}
        >
          CONSIGLIERI
        </span>
        {showTagline && (
          <span
            className="mt-1.5 text-xs sm:text-sm tracking-wide font-normal select-none"
            style={{ color: tagColor }}
          >
            {taglineText}
          </span>
        )}
      </div>
    );
  }

  // Default: Horizontal lockup (ideal for headers and footers)
  const symbolPx = size === 'sm' ? 34 : size === 'lg' ? 48 : 42;
  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 ${className}`}>
      <BrandSymbol
        size={symbolPx}
        dotColor={dotColor}
        lineColor={lineColor}
        className="flex-shrink-0"
      />
      <div className="flex flex-col justify-center select-none">
        <span
          className="font-sans font-black tracking-[0.22em] text-base sm:text-lg lg:text-xl leading-none uppercase"
          style={{ color: textColor }}
        >
          CONSIGLIERI
        </span>
        {showTagline && (
          <span
            className="text-[10px] sm:text-[11px] tracking-normal font-medium mt-1"
            style={{ color: tagColor }}
          >
            {taglineText}
          </span>
        )}
      </div>
    </div>
  );
};
