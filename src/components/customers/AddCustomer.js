import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PinDropSharp } from '@material-ui/icons';


export default function AddCustomer(props){

    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname:'', lastname:'', streetaddress:'', postcode:'', city:'', email:'', phone:''
    });
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleInputChange = (event) =>{
        setCustomer({...customer, [event.target.name]: event.target.value })
    }

    const addCustomer = () =>{
        props.saveCustomer(customer);
        handleClose();
    }

    return(
        <div>
        <Button style={{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
            Add customer
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New customer</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="firstname"
                    value={customer.firstname}
                    onChange={e => handleInputChange(e)}
                    label="firstname"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="lastname"
                    value={customer.lastname}
                    onChange={e => handleInputChange(e)}
                    label="lastname"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="streetaddress"
                    value={customer.streetaddress}
                    onChange={e => handleInputChange(e)}
                    label="streetaddress"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="postcode"
                    value={customer.postcode}
                    onChange={e => handleInputChange(e)}
                    label="postcode"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="city"
                    value={customer.city}
                    onChange={e => handleInputChange(e)}
                    label="city"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="email"
                    value={customer.email}
                    onChange={e => handleInputChange(e)}
                    label="email"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="phone"
                    value={customer.phone}
                    onChange={e => handleInputChange(e)}
                    label="phone"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={addCustomer} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}