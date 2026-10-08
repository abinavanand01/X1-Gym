import { useState } from 'react';

const PLACEHOLDER = `data:image/svg+xml;base64,${btoa(
  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#1a1a1a"/>
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:rgba(107,47,42,0.05)"/>
        <stop offset="100%" style="stop-color:rgba(0,0,0,0.3)"/>
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#g)"/>
    <text x="400" y="290" font-family="sans-serif" font-size="16" fill="rgba(250,248,245,0.12)" text-anchor="middle" letter-spacing="4" text-transform="uppercase">X1 Fitness</text>
  </svg>`
)}`;

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export default function ImageWithFallback({ src, alt, className, ...props }: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      className={className}
      decoding="async"
      onError={() => {
        if (imgSrc !== PLACEHOLDER) setImgSrc(PLACEHOLDER);
      }}
      loading={props.loading || 'lazy'}
    />
  );
}