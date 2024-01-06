import { Checkbox as MUICheckBox, CheckboxProps as MUICheckBoxProps } from '@mui/material';

export type CheckBoxProps =
  MUICheckBoxProps &
  {  
    className?: string,
  }

export const CheckBox = (
  {
    ...props
  }: CheckBoxProps) => {
  return (
    <MUICheckBox {...props} />
  )
}