import React, {useEffect, useState} from 'react'
import '../pages/Skills.css'
const Effect = () => {
    const [user,setUser]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>(res.json()))
        .then((data)=>setUser(data))
    })

  return (
    <div className='Count'>
        <h2>User DEtails</h2>
        <ol>
            {user.map((data)=>(
                <>
                    <p>S.No: {data.id}</p>
                    <p>Name: {data.name}</p>
                    <p>UserName: {data.username}</p>
                    <p>Email: {data.email}</p>
                    <p>Address</p>
                    <ul>
                    <li><p>Street: {data.address.street}</p></li>
                    <li><p>Suite: {data.address.suite}</p></li>
                    <li><p>City: {data.address.city}</p></li>
                    <li><p>Zipcode: {data.address.zipcode}</p></li>
                    <li>Geo</li>
                    <ul>
                    <li><p>Lat: {data.address.geo.lat}</p></li>
                    <li><p>Lng: {data.address.geo.lng}</p></li>
                    </ul>
                    </ul>
                    <p>Phone: {data.phone}</p>
                    <p>Website: {data.website}</p>
                    <p>Company</p>
                    <ul>
                    <li><p>Nmae: {data.company.name}</p></li>
                    <li><p>CatchPhrase: {data.company.catchPhrase}</p></li>
                    <li><p>Bs: {data.company.bs}</p><br></br></li>
                    </ul>
                </>
            ))}
        </ol>
    </div>
  )
}

export default Effect