import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
const UpdateUser = () => {
    const {id}= useParams();
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email , setEmail] = useState('');
    const [age, setAge] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/getUser/'+id)
        .then((response)=> {
          console.log((response.data))
          setName(response.data.name);
          setEmail(response.data.email);
          setAge(response.data.age);
        }).catch((err)=> {
          console.log(err);
        })
      }, [])

      const updateHandler =(e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/updateUser/'+id,{name, email, age})
        .then((response) => {
            console.log(response)
            navigate('/')
        })
        .catch(err=>console.log(err))
      }
  return (
    <div className='d-flex bg-primary vh-100 justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={updateHandler}>
            <h2>Update User</h2>
            <div className='mb-2'>
                <label htmlFor=''>Name</label>
                <input type='text' name='name' placeholder='Enter your Name' className='form-control' value={name} 
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Email</label>
                <input type='email' name='email' placeholder='Enter your Email' className='form-control' value={email}
                onChange={(e)=>setEmail(e.target.value)}
                 />
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Age</label>
                <input type='text' name='age' placeholder='Enter your Age' className='form-control' value={age}
                onChange={(e)=>setAge(e.target.value)}
                 />
            </div>
            <button className='btn btn-success'>Update </button>
        </form>
    </div>
</div>
  )
}

export default UpdateUser