import React, {useState, useEffect, useRef} from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";
import { Button } from "@material-ui/core";
import AddTrainingToCustomer from "./AddTrainingToCustomer";
import CustomerTraining from "./CustomerTraining"

import { useHistory } from "react-router";




export default function CustomersList(){
    const [customers, setCustomers] = useState([]);
    const [trainings, setTraining] = useState([])

    //const fref = useRef();

    
 
    useEffect(() => fetchData(), []);


    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    const deleteCustomer = (link) => {
        //ask if you are really want to delete
        if(window.confirm("Are you sure?")){
            fetch(link, {method: "DELETE"})
            .then(res => fetchData())
            .catch(err => console.error(err))

           

            //fref.current.toShow();
            

        }
    }

    const showTrainings = (link) => {
        console.log(link)
        
       


        

        //fref.current.toShow();
        

        
    }

    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const updateCustomer = (customer, link) =>{
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const saveTraining = (training) => {
        console.log(training)
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(training)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    

    const columns = [
        {
            sortable: false,
            filterable: false,
            width: 140,
            Cell: row => <AddTrainingToCustomer saveTraining={saveTraining} customer={row.original}/>
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: "links[2].href",
            Cell: row => <Button color="secondary" variant="outlined" size="small" onClick={() => showTrainings(row.value)}>show</Button>
        },
        
        
        {
            Header: "firstname",
            accessor: "firstname"
        },
        {
            Header: "lastname",
            accessor: "lastname"
        },
        {
            Header: "streetaddress",
            accessor: "streetaddress"
        },
        {
            Header: "postcode",
            accessor: "postcode"
        },
        {
            Header: "city",
            accessor: "city"
        },
        {
            Header: "email",
            accessor: "email"
        },
        {
            Header: "phone",
            accessor: "phone"
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <EditCustomer updateCustomer={updateCustomer} customer={row.original}/>
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: "links[0].href",
            Cell: row => <Button color="secondary" variant="outlined" size="small" onClick={() => deleteCustomer(row.value)}>Delete</Button>
        }
    ]

    const columnsTrainings = [
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
        },
        // {
        //     sortable: false,
        //     filterable: false,
        //     width: 100,
        //     Cell: row => <EditTrainig updateTraining={updateTraining} training={row.original}/>
        // },
        // {
        //     sortable: false,
        //     filterable: false,
        //     width: 100,
        //     accessor: "links[0].href",
        //     Cell: row => <Button color="secondary" variant="outlined" size="small" onClick={() => deleteTraining(row.value)}>Delete</Button>
        // }
    ]

    return (
        <div>
            <AddCustomer saveCustomer={saveCustomer}/>
            <ReactTable filterable={true} data={customers} columns={columns} style={{ marginTop: 10 }}/>
        </div>
    )
}