import React from 'react'
import {useEffect, useState} from 'react'
import Axios from 'axios'
function DramaForm() {
const user=JSON.parse(localStorage.getItem('user'))
  const [dramas, setDramas] = useState([]);
  const [drama, setDrama] = useState({
    title:'',
    mainActor: '',
    mainActress: ''
  });
useEffect(()=>{
    Axios.get('http://localhost:3500/drama/')
    .then((res)=>{
      setDramas(res.data);
    })

},[dramas])
 
const handleDataChange = (e)=>{
    setDrama({...drama, [e.target.name]: e.target.value})
}
const submitDrama = (e)=>{
   e.preventDefault();
   Axios.post('http://localhost:3500/drama/', drama,{
    headers:{
      "Authorization": `Bearer ${user.token}`
    }
   })
  
}
const deleteData = (id,e) =>{
  e.preventDefault();
   Axios.delete(`http://localhost:3500/drama/${id}`)
}

  return (
    <div>
     
    <div>Form
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Title</label>
            <input type="email" className="form-control" name='title' id="exampleFormControlInput1" onChange={handleDataChange} placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Main actor</label>
            <textarea className="form-control" name='mainActor' id="exampleFormControlTextarea1" onChange={handleDataChange} rows="1"></textarea>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Main actress</label>
            <textarea className="form-control" name='mainActress' id="exampleFormControlTextarea1" onChange={handleDataChange} rows="1"></textarea>
        </div>
        <button type="submit" onClick={submitDrama} className="btn btn-primary mb-3">Save</button>
        </div>

        <div className="container">
          {dramas.map((d)=>(
            <div>
               <p>{d.title}</p>
               <button onClick={deleteData(d._id)} className="btn btn-danger mb-3">Update</button>
              </div>
          ))}
       
</div>
    </div>

  )
}

export default DramaForm