import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

interface FloatingIconProps {
  src: string | { src: string };
  offset: number;
  speed: number;
  top?: string;
  left?: string;
  width?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ src, offset, speed, top, left, width, className, style }) => {
  const imageSrc = typeof src === 'string' ? src : src.src;

  return (
    <ParallaxLayer offset={offset} speed={speed} style={{ pointerEvents: 'none', zIndex: 1, ...style }}>
      <img
        src={imageSrc}
        alt=""
        className={className}
        style={{
            display: 'block',
            width: width || 'auto',
            position: 'absolute',
            top: top || '0',
            left: left || '0',
            opacity: className?.includes('opacity-') ? undefined : 0.2 // Default opacity if not in class
        }}
      />
    </ParallaxLayer>
  );
};

export default FloatingIcon;
