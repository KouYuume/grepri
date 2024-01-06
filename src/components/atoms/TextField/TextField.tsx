import { TextField as MUITextField, TextFieldProps as MUITextFieldProps } from "@mui/material";

export type TextFieldProps =
  MUITextFieldProps &
  {
    className?: string,
  }

export const TextField = (
  {
    ...props
  }: TextFieldProps) => {
  return (
    <MUITextField {...props} />
  )
}