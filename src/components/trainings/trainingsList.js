import React, {useState, useEffect, useRef} from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import DayJS from 'react-dayjs';
import { Button } from "@material-ui/core";
import EditTrainig from "./EditTraining";

import { Link } from "react-router-dom";




export default function TrainingList(){
    const [trainings, setTrainings] = useState([]);
    //const fref = useRef();
    
    
    useEffect(() => fetchData(), []);


    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
        
    }

    //date formater
    const dayjs = require('dayjs')
        //import dayjs from 'dayjs' // ES 2015
        dayjs().format('DD/MM/YYYY')
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
            accessor: row => formatDate(row.date) // You format date here
        },
        {
            Header: "Duration",
            accessor: "duration"
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
            Cell: row => <Button color="secondary" variant="outlined" size="small" onClick={() => deleteTraining(row.value)}>Delete</Button>
        }
    ]

    return (
        <div>
            
            <ReactTable filterable={true} data={trainings} columns={columns} style={{ marginTop: 20 }}/>
        </div>
    )

}