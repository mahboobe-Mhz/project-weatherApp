import { ElementGenerator } from '@/library/'

const variants = {
  contained: 'bg-blue-600 text-slate-100 font-bold hover:bg-[#094692]',
  outlined: ' border border-1 text-blue-700 font-bold border-blue-700 hover:bg-[#E0E3FB]',
  link: 'bg-transparent'
}

export const Button = ({
  element = 'button',
  child,
  classes,
  variant = 'contained',
  ...rest
}) => {
  return ElementGenerator({
    element,
    className: `${variants[variant]} ${classes} inline-block rounded-md text-sm py-1 px-4`,
    child,
    ...rest
  })
}
