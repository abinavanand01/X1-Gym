// SVG-based placeholder images for development
// These are automatically used as fallbacks when real images are not available.
// Replace with actual images by placing them in src/assets/ directories.

const COLORS = {
  hero: '#2a2a2a',
  program: '#1a1a1a',
  trainer: '#2a2a2a',
  gallery: '#222',
};

export function getPlaceholder(type: 'hero' | 'program' | 'trainer' | 'gallery', label: string): string {
  const bg = COLORS[type];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="${bg}"/>
    <rect x="0" y="0" width="800" height="600" fill="url(#g)"/>
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:rgba(107,47,42,0.05)"/>
        <stop offset="100%" style="stop-color:rgba(0,0,0,0.3)"/>
      </linearGradient>
    </defs>
    <text x="400" y="290" font-family="sans-serif" font-size="18" fill="rgba(250,248,245,0.15)" text-anchor="middle" letter-spacing="3" text-transform="uppercase">${label}</text>
    <text x="400" y="320" font-family="sans-serif" font-size="11" fill="rgba(250,248,245,0.08)" text-anchor="middle" letter-spacing="2">X1 Fitness</text>
  </svg>`;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
}