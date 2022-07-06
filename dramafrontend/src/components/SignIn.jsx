import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
const navigate=useNavigate();
const handleChange =(e)=>{

setFormData({...formData,[e.target.name]:e.target.value})
}
const submitData = async(e)=>{
    e.preventDefault();
   await Axios.post('http://localhost:3500/user/signin',formData)
        .then(res=>{
          localStorage.setItem('user',JSON.stringify(res.data))
        })


navigate("/dramas")
}

  return (
    <div className='container'>
    <div>SignIn</div>
 <form className='row'>
 <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" name='email' onChange={handleChange} placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Password</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" name='password' onChange={handleChange} rows="1"></textarea>
    </div>
    <button onClick={submitData} type="submit" className="btn btn-primary mb-3">Sign in</button>
 </form>
    </div>
  )
}

export default SignIn