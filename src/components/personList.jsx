import { useState } from "react"
import Axios from 'axios'
// import { response } from "express";

function PersonList() {
  const [peopleList, setPeopleList] = useState();
  const [newName, setNewName] = useState('')

  const getPeople = () => {
    Axios.get('http://http://localhost:3001/getPeople').then((response) => {
      console.log(response)
      setPeopleList(response.data)
    }).catch((error) => {
      console.log('this message' + error)
    })
  }

  const updatePersonName = (id) => {
    Axios.put('http://http://localhost:3001/updatePerson', {firstName: newName, id:id}).then(() =>{
      console.log('updated')
    })
  }

  return(
    <div>
      <button onClick={getPeople}>show people</button>

      {/* {peopleList.map((val, key) => {
        return (
          <div>
            <div>
              <p>{val.firstName}</p>
              <p>{val.lastName}</p>
              <p>{val.subStart}</p>
              <p>{val.subEnd}</p>
              <button>delete person</button>
            </div>
            <div>
              <input type='text' placeholder='New Name' onChange={(event)=> {setNewName(event.target.value)}}></input>
              <button onClick={()=>updatePersonName(val.id)}>Update</button>
            </div>
          </div>
        )
      })} */}
    </div>
  )
}

export default PersonList