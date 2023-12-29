import axios from 'axios';
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';


async function fetchApi(id) {
  try {
    return await axios.get(`https://dummyjson.com/users/${id}`);
  } catch (err) {
    return err;
  }
}

function App() {
  const [data,setData] = useState({});

  useEffect(()=>{
    handleChange();
  },[]);
  const handleChange = async () => {
    const randomNumber = Math.floor(Math.random() * 30);
    try {
      const userData = await fetchApi(randomNumber);
      setData(userData.data);
      console.log(userData.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    
    <div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center '>
      
      <h1 style={{textAlign:'center'}}> Random User on Refresh</h1>
      {data.id ? (
    <div style={{width:'600px'}} className='border rounded p-5  d-flex bg-warning justify-content-evenly align-items-center'>
      
        <div className='d-flex align-items-center flex-column'>
        <img className='border rounded-circle' style={{width:'150px'}} src={data?.image} alt="" />
        <h5 style={{textAlign:'center'}}>{data?.firstName} {data?.lastName}  </h5>
        <p style={{textAlign:'center'}}>{data?.gender}</p>
        <div className='d-flex  gap-5'>
            <div>
                <h5>Birth Date:</h5>
                <p>{data?.birthDate}</p>
                <br />
                <h5>Weight:</h5>
                <p>{data?.weight}</p>
            </div>
            <div>
                <h5>Age:</h5>
                <p> {data?.age}</p>
                <br />
                <h5>Height:</h5>
                <p>{data?.height}</p>
            </div>
        </div>
        <button onClick={handleChange} style={{alignItems:'center'}} className='btn btn-primary '>Refresh</button>

    </div>
    <div>
        <h5>Home Address:</h5>
        <p>{data?.address.address}</p>
        
        <h5>Mobile Phone:</h5>
        <p>{data?.phone}</p>
        
        <h5>Company:</h5>
        <p> {data?.company.name} </p>
        
        <h5>Job Title:</h5>
        <p>{data?.company.title}</p>
        
        <h5>Email:</h5>
        <p>{data?.email}</p>
    </div>
    

      
    
    </div>
    ) : null}
    
    </div>
    
  )
}

export default App
