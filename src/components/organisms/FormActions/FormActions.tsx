import {
  Box,
  Button,
} from '@/components'

export type FormActionsProps =
  {
    className?: string,
    onAction: any,
    onClear: any,
  }

export const FormActions = (
  {
    className = '',
    onAction,
    onClear,
  }: FormActionsProps) => {
  return (
    <Box
      content='div'
      m='auto'
      className={className}>
      <Box
        content='div'
        sx={{
          width: 100,
          pb: 1,
        }}>
        <Button
          fullWidth={true}
          color='primary'
          sx={{ 
            width : 120,
            height : 54,
            fontSize: 18,
           }}
           onClick={() => onAction()}
          variant='contained'>実行</Button>
      </Box>
      <Box
        content='div'
        sx={{
          width: 100
        }}>
        <Button 
          fullWidth={true}
          color='primary'
          sx={{ 
            width : 120,
            height : 54,
           }}
           onClick={() => onClear()}
          variant='outlined'>クリア</Button>
      </Box>
    </Box>
  )
}
