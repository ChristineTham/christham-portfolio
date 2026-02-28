export const hidden = 'hidden md:block lg:block';

// Tailwind doesn't support dynamic arbitrary values well, so we pass an inline style object for position
export const iconpos = (width: number, left: string, top: string, className?: string) => {
  return {
    style: { width: `${width}px`, height: `${width}px`, top, left },
    className: `absolute text-icon_darkest opacity-20 ${className || ''}`
  };
}
