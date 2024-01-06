import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type ResultAlertProps = {
  open: boolean,
  onClose: () => void,
}

export const ResultAlert = (
  {
    open,
    onClose,
  }: ResultAlertProps) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Grep完了"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ツールフォルダ直下のresult.txtを確認してね！
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}