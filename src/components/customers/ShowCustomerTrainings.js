import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import dayjs from "dayjs";
import React, {useState, useEffect, useRef} from "react";
import ReactTable from "react-table";

import EditTrainig from "./EditTraining";


export default function ShowCustomerTrainings({trainingsLink, customer}){

    const [open, setOpen] = React.useState(false);
    const [trainings, setTrainings] = React.useState([]);
    
    


    const fetchData = () => {
        fetch(trainingsLink)
        .then(response => response.json())
        .then(data => setTrainings(data.content))
        
    }
    
    const handleClickOpen = () => {
      setOpen(true)
      fetchData()
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const formatDate = (date) =>{
        return dayjs(date).format('DD/MM/YYYY HH:mm')
    }


    const deleteTraining = (link) => {
        //ask if you are really want to delete
        if(window.confirm("Are you sure?")){
            fetch(link, {method: "DELETE"})
            .then(res => fetchData())
            .catch(err => console.error(err))

            //fref.current.toShow();
            

        }
    }

    const updateTraining = (training, link) =>{
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(training)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }


    const columns = [
        {
            Header: "Date",
            id: 'dateId',
            // accessor: "date"
            accessor: row => formatDate(row.date) // You format date here
        },
        {
            Header: "Duration",
            accessor: "duration",
            align: "right"
        },
        {
            Header: "Activity",
            accessor: "activity"
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <EditTrainig updateTraining={updateTraining} training={row.original}/>
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: "links[0].href",
            Cell: row => <Button style={{margin: 10}} color="secondary" variant="outlined" size="small" onClick={() => deleteTraining(row.value)}>Delete</Button>
        }
    ]

    return(
        <div>
        <Button style={{margin: 10}} variant="outlined" color="primary" size="small" onClick={handleClickOpen}>
            Show
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth={"md"}>
            <DialogTitle id="form-dialog-title">Training List of {customer.firstname} {customer.lastname}</DialogTitle>
                <DialogContent>
                    <ReactTable filterable={true} data={trainings} columns={columns} style={{ marginTop: 10 }}/>
                </DialogContent>  
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
            
        </div>
    );
}