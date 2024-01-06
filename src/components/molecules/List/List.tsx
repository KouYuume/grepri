import { List as MUIList, ListProps as MUIListProps } from '@mui/material';

export type ListProps =
  MUIListProps &
  {  
    className?: string,
  }

export const List = (
  {
    ...props
  }: ListProps) => {
  return (
    <MUIList {...props}>
      {props.children}
    </MUIList>
  )
}