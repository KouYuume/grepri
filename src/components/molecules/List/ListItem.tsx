import { ListItem as MUIListItem, ListItemProps as MUIListItemProps } from '@mui/material';

export type ListItemProps =
  MUIListItemProps &
  {  
    className?: string,
  }

export const ListItem = (
  {
    ...props
  }: ListItemProps) => {
  return (
    <MUIListItem {...props}>
      {props.children}
    </MUIListItem>
  )
}