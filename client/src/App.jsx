import axios from "axios"
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([])

  const GetUsers = async () => {
    try {
      const response = await axios.get('/api/v1/users')
     setData(response.data?.users)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(data)

  useEffect(() => {
   GetUsers()
  }, [])
  
  

  return (
    <>
      <div>
        <h2>User Data</h2>
        <table>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Created At</th>
          </tr>
          {
            data?.map((item,i)=>{
              return (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.age}</td>
                  <td>{item?.email}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.createdAt}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </>
  )
}

export default App
