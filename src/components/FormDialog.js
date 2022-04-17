import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//add tasks dialog box
export default function FormDialog({isOpen, setTasks, oldTasks, render}) {
  const [open, setOpen] = React.useState(true);

  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [id, setId] = React.useState(oldTasks.length)

  const handleClose = () => {
    setOpen(false)
    render(false)
  };

  const addTask = () => {
    const task = {id, name, description}
    setTasks([...oldTasks, task])
    setOpen(false)
    setId(parseInt(id)+1)
    render(false)
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a task to your task list
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            multiline
            fullWidth
            rows={4}
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addTask}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}