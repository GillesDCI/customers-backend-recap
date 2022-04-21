import {useEffect, useState} from 'react';
import axios from 'axios';

export default function ListCustomers() {

  const [listCustomers, setListCustomers] = useState([]);

  const loadCustomerData = async () => {
    const res = await axios.get('http://localhost:3001/api/customers/list')

    if(res.status === 200){
        setListCustomers(res.data);
    }
  }
  useEffect(() => {
        loadCustomerData();
  },[])

  return (
      <>
          <h1>ListCustomers</h1>
       
          <ul className="list-group">
            
            {listCustomers.map((customer) => (
             <li className="list-group-item" key={customer._id}>{`${customer.name} ${customer.firstname}  `}</li>
          ))}
          </ul>
      </>

    
  )
}