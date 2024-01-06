import { Box as MUIBox, BoxProps as MUIBoxProps } from '@mui/material';

export type BoxProps =
  MUIBoxProps &
  {  
    className?: string,
  }

export const Box = (
  {
    ...props
  }: BoxProps) => {
  return (
    <MUIBox {...props}>
      {props.children}
    </MUIBox>
  )
}