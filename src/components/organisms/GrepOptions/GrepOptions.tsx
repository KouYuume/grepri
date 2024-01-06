import {
  List,
  ListItem,
  CheckBox,
  FormLabel,
} from '@/components'
import { SetStateAction } from 'react'

export type GrepOptionsProps = {
  needRecurse: boolean,
  setNeedRecurse: React.Dispatch<SetStateAction<boolean>>,
  needCaseSensitive: boolean,
  setNeedCaseSensitive: React.Dispatch<SetStateAction<boolean>>,
  isRegex: boolean,
  setIsRegex: React.Dispatch<SetStateAction<boolean>>,
  className?: string,
}

export const GrepOptions = (
  {
    needRecurse,
    setNeedRecurse,
    needCaseSensitive,
    setNeedCaseSensitive,
    isRegex,
    setIsRegex,
    className = '',
  }: GrepOptionsProps) => {
  return (
    <List
      disablePadding={true}
      sx={{
        pl: 4,
      }}
      className={className}>
      <ListItem
        disablePadding={true}>
        <FormLabel
          label='サブフォルダも検索'
          control={<CheckBox
            checked={needRecurse}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              setNeedRecurse(e.target.checked)
            }} />}
        />
      </ListItem>
      <ListItem
        disablePadding={true}>
        <FormLabel
          label='大文字小文字を区別する'
          control={<CheckBox
            checked={needCaseSensitive}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              setNeedCaseSensitive(e.target.checked)
            }} />}
        />
      </ListItem>
      <ListItem
        disablePadding={true}>
        <FormLabel
          label='正規表現'
          control={<CheckBox
            checked={isRegex}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              setIsRegex(e.target.checked)
            }} />}
        />
      </ListItem>
    </List>
  )
}