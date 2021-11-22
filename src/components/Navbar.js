import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><h1>Personal Trainer</h1></Link>
      <div className="links">
        <Link to="/customers" style={{ 
          color: '#f1356d', 
          backgroundColor: 'white',
          borderRadius: '8px',
          fontSize: "20px",
          border: "2px solid #f1356d",
          padding: "10px"   
        }}>Customers</Link>

        <Link to="/addCustomer" style={{ 
          color: '#f1356d', 
          backgroundColor: 'white',
          borderRadius: '8px',
          fontSize: "20px",
          border: "2px solid #f1356d",
          padding: "10px"   
        }}>Add Customer</Link>

      </div>
     
         
       

      
    </nav>
  );
}
 
export default Navbar;