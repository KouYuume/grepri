import { FormControlLabel as MUIFormLabel, FormControlLabelProps as MUIFormLabelProps } from '@mui/material';

export type FormLabelProps =
MUIFormLabelProps &
  {  
    className?: string,
  }

export const FormLabel = (
  {
    ...props
  }: FormLabelProps) => {
  return (
    <MUIFormLabel {...props} />
  )
}