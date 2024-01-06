import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';

export type ButtonProps =
  MUIButtonProps &
  {  
    className?: string,
  }

export const Button = (
  {
    ...props
  }: ButtonProps) => {
  return (
    <MUIButton {...props}>
      {props.children}
    </MUIButton>
  )
}