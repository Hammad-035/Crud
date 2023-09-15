import React , {useState ,  useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Users = () => {
  const [users , setUser] = useState([]);
      useEffect(() => {
        axios.get('http://localhost:8000')
        .then((response)=> {
          setUser(response.data)
        }).catch((err)=> {
          console.log(err);
        })
      }, [])

      const deleteHandler = (id) => {
         axios.delete('http://localhost:8000/deleteUser/' + id)
        .then((response)=> {
      console.log((response.data))
      window.location.reload();
        }).catch((err)=> {
          console.log(err);
        })
      }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
    <Link to='/create' className='btn btn-success'>Add +</Link>
    <table className='table'>
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
        </tr>
        </thead>
        <tbody>
        
        {
            users.map((users , index)=> {
              return (
                <>
                <tr key={index}>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.age}</td>
                <td>
                <Link to={`/update/${users._id}`} className='btn btn-success'>update</Link>
                <Link className='btn btn-danger mx-2' onClick={()=>deleteHandler(users._id)}>Delete</Link>
                </td>
                </tr>
                </>
              )
            })
        }
       
        </tbody>
    </table>
    </div>
    </div>
  )
}

export default Users