import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PinDropSharp } from '@material-ui/icons';


export default function AddTrainingToCustomer({saveTraining, customer}){

    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date:'', duration: "", activity:'', customer: customer.links[0].href
    });
    
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleInputChange = (event) =>{
        setTraining({...training, [event.target.name]: event.target.value })
    }

    const addTraining = () =>{
        
        saveTraining(training);
        handleClose();
    }

    return(
        <div>
        <Button style={{margin: 10}} variant="outlined" color="primary" size="small" onClick={handleClickOpen}>
            Add training
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New training</DialogTitle>
            <DialogContent>
            <TextField
                    autoFocus
                    margin="dense"
                    name="date"
                    value={training.date}
                    onChange={e => handleInputChange(e)}
                    label="date"
                    // type="datetime-local"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="duration"
                    value={training.duration}
                    onChange={e => handleInputChange(e)}
                    label="duration"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="activity"
                    value={training.activity}
                    onChange={e => handleInputChange(e)}
                    label="activity"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={addTraining} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}