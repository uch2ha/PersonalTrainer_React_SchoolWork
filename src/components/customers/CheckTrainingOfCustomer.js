// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import { PinDropSharp } from '@material-ui/icons';
// import ReactTable from 'react-table';


// export default function AddTrainingToCustomer({ customer}){

//     const [open, setOpen] = React.useState(false);
//     const [training, setTraining] = React.useState({
//         date:'1', duration: "2", activity:'1'
//     });
    
    
//     const handleClickOpen = () => {
//       setOpen(true);
//     };
  
//     const handleClose = () => {
//       setOpen(false);
//     };

//     const columns = [
//         {
//             Header: "Date",
//             id: 'dateId',
//             // accessor: row => formatDate(row.date) // You format date here
//         },
//         {
//             Header: "Duration",
//             accessor: "duration"
//         },
//         {
//             Header: "Activity",
//             accessor: "activity"
//         }
//     ]

    

//     return(
//         <div>
//         <Button style={{margin: 10}} variant="outlined" color="primary" size="small" onClick={handleClickOpen}>
//             check tra
//         </Button>
        
//         <ReactTable filterable={true} data={training} columns={columns} style={{ marginTop: 10 }}/>
            
//         </div>
//     );
// }