import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PinDropSharp } from '@material-ui/icons';
import { useHistory } from 'react-router';


export default function AddCustomer(){

    const [customer, setCustomer] = React.useState([]);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(customer)
        fetch('https://customerrest.herokuapp.com/api/customers', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(customer)
        }).then(() => {
          history.push('/customers');
        })
      }

    return(
        <div className="create">
            <h2>Add New Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input 
                type="text" 
                required 
                value={customer.firstname}
                name="firstname"
                onChange={(e) => setCustomer({...customer, [e.target.name] : e.target.value})}
                />
                <label>Last Name:</label>
                <input 
                type="text" 
                required 
                value={customer.lastname}
                name="lastname"
                onChange={(e) => setCustomer({...customer, [e.target.name] : e.target.value})}
                />
                <label>Street address:</label>
                <input 
                type="text" 
                required 
                value={customer.streetaddress}
                name="streetaddress"
                onChange={(e) => setCustomer({...customer, [e.target.name] : e.target.value})}
                />
                <label>Postcode:</label>
                <input 
                type="number" 
                required 
                value={customer.postcode}
                name="postcode"
                onChange={(e) => setCustomer({...customer, [e.target.name] : e.target.value})}
                />
                <label>City:</label>
                <input 
                type="text" 
                required 
                value={customer.city}
                name="city"
                onChange={(e) => setCustomer({...customer, [e.target.name] : e.target.value})}
                />
                <label>Email:</label>
                <input 
                type="text" 
                required 
                value={customer.email}
                name="email"
                onChange={(e) => setCustomer({...customer, [e.target.name] : e.target.value})}
                />
                <label>Phone:</label>
                <input 
                type="number"
                required 
                value={customer.phone}
                name="phone"
                onChange={(e) => setCustomer({...customer, [e.target.name] : e.target.value})}
                />
                <button>Create</button>
            </form>
        </div>
    );
}