import React, {useState, useEffect, useRef} from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { Button } from "@material-ui/core";


import { Link } from "react-router-dom";




export default function CustomerTraining(){
    const [trainings, setTrainings] = useState([]);
    //const fref = useRef();
    
    
    useEffect(() => fetchData(), []);


    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
        
    }

   

   

    const columns = [
        {
            Header: "Date",
            id: 'dateId',
            accessor: "date"
        },
        {
            Header: "Duration",
            accessor: "duration"
        },
        {
            Header: "Activity",
            accessor: "activity"
        }
        
    ]

    return (
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} style={{ marginTop: 20 }}/>
        </div>
    )

}