import React, { useEffect } from 'react';
import Navbar from '../Components/NavBar';
import { useState } from 'react';
import  axios  from 'axios';
const Customers = ()=> {
  const[search,setSearch] = useState(false);
  const[name,setName] = useState(null);
  const[username,serUserName] = useState(null);  
  const [status,setStatus] = useState(null);
  const [customers, setCustomers] = useState(null)

  const Search = () =>{
    setSearch(true);
    setStatus(false);
  }
  const Sumbit = async(e) =>{
    //setStatus(true);
    setSearch(false);
    e.preventDefault();
    let response = await axios.get('http://localhost:8080/api/v1/customer/filter/' + name +'/'+username);
    let data = await response.data;
    setName(null);
    serUserName(null);
    setSearch(false)
    setCustomers(data);
  }
   useEffect(() => {
        setStatus(true)
    }, [customers])

    const Return = () =>{
      setStatus(false);
      setSearch(true)
    }

  return (
    <div className='Customers'>
    <h1>Customers</h1>
     <div>
     <div className='paddedButtons2'>
        <button className="button" onClick={Search} >Search</button>
      </div>
      </div>
      { search && <div>
         <div className="form-group">
                <label>Name</label> 
                <input type="text" className="form-control" placeholder="Name" onChange={e => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control" placeholder="User Name" onChange={e => serUserName(e.target.value)} />
            </div>
            <div className='buttonContainer'>
            <button className="button" onClick={Sumbit} >Sumbit</button>
            </div>
        </div>}
        {status && customers && <div>
          <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>
                    {
                        customers.map((customer) => (
                            <tr key={customer.username}>
                                <td>{customer.name}</td>
                                <td>{customer.username}</td>
                                <td>{customer.email}</td>
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='buttonContainer'>
              <button className='button' onClick={Return}>Return</button>
            </div>
          </div>}
    </div>
  );
}
export default Customers;