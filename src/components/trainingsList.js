import React, {useState, useEffect, useRef} from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import DayJS from 'react-dayjs';


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
        }
        /*{
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <Editcar updateCar={updateCar} car={row.original}/>
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: "_links.self.href",
            Cell: row => <Button color="secondary" variant="outlined" size="small" onClick={() => deleteCar(row.value)}>Delete</Button>
        }*/
    ]

    return (
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} style={{ marginTop: 20 }}/>
        </div>
    )

}