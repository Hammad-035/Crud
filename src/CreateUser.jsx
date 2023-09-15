import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const CreateUser = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email , setEmail] = useState('');
    const [age, setAge] = useState('');
        const submitHandler = async(e) => {
            e.preventDefault();
           await axios.post('http://localhost:8000/createUser',{name, email, age})
            .then((response) => {
                console.log(response)
                navigate('/')
            })
            .catch(err=>console.log(err))
        }
    return (
        <div className='d-flex bg-primary vh-100 justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={submitHandler}>
                    <h2>Add User</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text' name='name' placeholder='Enter your Name' className='form-control'
                        onChange={(e)=>setName(e.target.value)}
                         />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='email' name='email' placeholder='Enter your Email' className='form-control'
                        onChange={(e)=>setEmail(e.target.value)}
                         />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Age</label>
                        <input type='text' name='age' placeholder='Enter your Age' className='form-control'
                        onChange={(e)=>setAge(e.target.value)}
                         />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser