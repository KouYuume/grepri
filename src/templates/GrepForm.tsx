import {
  Box,
  FormActions,
  GrepConditions,
  GrepOptions,
} from '@/components/index'
import { SetStateAction } from 'react';

type GrepFormProps = {
  conditionsText: string,
  setConditionsText: React.Dispatch<SetStateAction<string>>,
  folderPathsText: string,
  setFolderPathsText: React.Dispatch<SetStateAction<string>>,
  filePatternsText: string,
  setFilePatternsText: React.Dispatch<SetStateAction<string>>,
  needRecurse: boolean,
  setNeedRecurse: React.Dispatch<SetStateAction<boolean>>,
  needCaseSensitive: boolean,
  setNeedCaseSensitive: React.Dispatch<SetStateAction<boolean>>,
  isRegex: boolean,
  setIsRegex: React.Dispatch<SetStateAction<boolean>>,
  onAction: () => void,
  onClear: () => void,
}

const GrepForm = ({
  conditionsText,
  setConditionsText,
  folderPathsText,
  setFolderPathsText,
  filePatternsText,
  setFilePatternsText,
  needRecurse,
  setNeedRecurse,
  needCaseSensitive,
  setNeedCaseSensitive,
  isRegex,
  setIsRegex,
  onAction,
  onClear,
}: GrepFormProps) => {
  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh">
      <GrepConditions
        conditionsText={conditionsText}
        setConditionsText={setConditionsText}
        folderPathsText={folderPathsText}
        setFolderPathsText={setFolderPathsText}
        filePatternsText={filePatternsText}
        setFilePatternsText={setFilePatternsText} />
      <Box
        minWidth='100vh'
        display='flex'
        content='div'>
        <GrepOptions
          needRecurse={needRecurse}
          setNeedRecurse={setNeedRecurse}
          needCaseSensitive={needCaseSensitive}
          setNeedCaseSensitive={setNeedCaseSensitive}
          isRegex={isRegex}
          setIsRegex={setIsRegex} />
        <FormActions
          onAction={onAction}
          onClear={onClear} />
      </Box>
    </Box>
  )
}

export default GrepForm;