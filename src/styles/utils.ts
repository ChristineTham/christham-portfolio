export const hidden = `hidden md:block lg:block`;

export const iconpos = (width: number, left: string, top: string, className?: string) => {
  return `absolute w-[${width}px] h-[${width}px] top-[${top}] left-[${left}] text-icon_darkest opacity-20 ${className || ''}`;
}
