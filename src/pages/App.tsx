import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import GrepForm from "@/templates/GrepForm";
import { ResultAlert } from "@/components/organisms";

export interface GrepResult {
  file_path: string,
  row: number,
  match_text: string,
}

function App() {
  const [conditionsText, setConditionsText] = useState("");
  const [folderPathsText, setFolderPathsText] = useState("");
  const [filePatternsText, setFilePatternsText] = useState("");

  const [needRecurse, setNeedRecurse] = useState(false);
  const [needCaseSensitive, setNeedCaseSensitive] = useState(false);
  const [isRegex, setIsRegex] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  async function grep() {
    await invoke("grep", { 
      conditionsText,
      folderPathsText,
      filePatternsText,
      needRecurse,
      needCaseSensitive,
      isRegex,
    }).then((res:unknown) => {
      console.log(res);
      handleClickOpen();
    });
  }

  const clear = () => {
    setConditionsText("");
    setFolderPathsText("");
    setFilePatternsText("");
    setNeedRecurse(false);
    setNeedCaseSensitive(false);
    setIsRegex(false);
  }

  return (
    <>
      <ResultAlert
        open={open}
        onClose={handleClose}
      />
      <GrepForm
        conditionsText={conditionsText}
        setConditionsText={setConditionsText}
        folderPathsText={folderPathsText}
        setFolderPathsText={setFolderPathsText}
        filePatternsText={filePatternsText}
        setFilePatternsText={setFilePatternsText}
        needRecurse={needRecurse}
        setNeedRecurse={setNeedRecurse}
        needCaseSensitive={needCaseSensitive}
        setNeedCaseSensitive={setNeedCaseSensitive}
        isRegex={isRegex}
        setIsRegex={setIsRegex}
        onAction={grep}
        onClear={clear} />
      </>
  );
}

export default App;
