import {
  List,
  ListItem,
  TextField,
} from '@/components'
import { SetStateAction } from 'react'

export type GrepConditionsProps = {
  conditionsText: string,
  setConditionsText: React.Dispatch<SetStateAction<string>>,
  folderPathsText: string,
  setFolderPathsText: React.Dispatch<SetStateAction<string>>,
  filePatternsText: string,
  setFilePatternsText: React.Dispatch<SetStateAction<string>>,
  className?: string,
}

export const GrepConditions = (
  {
    conditionsText,
    setConditionsText,
    folderPathsText,
    setFolderPathsText,
    filePatternsText,
    setFilePatternsText,
    className = '',
  }: GrepConditionsProps) => {
  return (
    <List
      sx={{
        minWidth: '100vh',
      }}
      className={className}>
      <ListItem>
        <TextField
          required
          label='条件'
          InputProps={{
            style: { fontSize: '14px' }
          }}
          placeholder='検索文字列または正規表現（複数の場合は「,」で区切る）'
          fullWidth={true}
          InputLabelProps={
            {
              shrink: true,
            }
          }
          value={conditionsText}
          onChange={(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setConditionsText(e.target.value)}} />
      </ListItem>
      <ListItem>
        <TextField
          required
          label='フォルダ'
          InputProps={{
            style: { fontSize: '14px' }
          }}
          placeholder='検索対象となるフォルダパス（複数の場合は「,」区切り）'
          fullWidth={true}
          InputLabelProps={
            {
              shrink: true,
            }
          }
          value={folderPathsText}
          onChange={(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setFolderPathsText(e.target.value)}} />
      </ListItem>
      <ListItem>
        <TextField
          label='ファイル'
          InputProps={{
            style: { fontSize: '14px' }
          }}
          placeholder='検索対象となるファイル形式（例：*.js, *.ts）'
          fullWidth={true}
          InputLabelProps={
            {
              shrink: true,
            }
          }
          value={filePatternsText}
          onChange={(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setFilePatternsText(e.target.value)}} />
      </ListItem>
    </List>
  )
}