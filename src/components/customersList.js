import React, {useState, useEffect, useRef} from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';











export default function CustomersList(){
    const [customers, setCustomers] = useState([]);
    //const fref = useRef();
    
    useEffect(() => fetchData(), []);


    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    /*const deleteCar = (link) => {
        //ask if you are really want to delete
        if(window.confirm("Are you sure?")){
            fetch(link, {method: "DELETE"})
            .then(res => fetchData())
            .catch(err => console.error(err))

            fref.current.toShow();
            

        }
    }*/

    /*const saveCar = (car) => {
        fetch('https://carstockrest.herokuapp.com/cars', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const updateCar = (car, link) =>{
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }*/

    

    const columns = [
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
            <ReactTable filterable={true} data={customers} columns={columns} style={{ marginTop: 20 }}/>
        </div>
    )
}