import React, { useState } from 'react'
import Axios from 'axios'
// import { response } from 'express'

function AddPersonForm() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [subStart, setSubStart] = useState('')
  const [subEnd, setSubEnd] = useState('')

  // const displayInfo = () => {
  //   console.log(`First Name: ${firstName}, Last Name: ${LastName}, Subscription Start: ${subStart}, Subscription End: ${subEnd}`)
  // }

  const addPerson = () => {
    console.log(firstName)
    console.log(lastName)
    console.log(subEnd)
    console.log(subStart)

    Axios.post('http://http://localhost:3000/create', {
      firstName: firstName,
      lastName: lastName,
      subStart: subStart,
      subEnd: subEnd,
    }).then(() => {
      console.log('success')
    }).catch((error) => {
      console.log('this message' + error)
    })
  }

  return (
    <div className="App">
      <div className='Infomation'>
        <header className="App-header">
          <p>My Person</p>
          <form>
            <input type="text" name="FirstName" placeholder='First Name' onChange={(event) => setFirstName(event.target.value)}/>
            <input type="text" name="LastName" placeholder='Last Name' onChange={(event) => setLastName(event.target.value)}/>
            <input type='date' name='startDate' onChange={(event) => setSubStart(event.target.value)}/>
            <input type='date' name='endDate' onChange={(event) => setSubEnd(event.target.value)}/>
            <input type="submit" value="Submit" onClick={addPerson} />
          </form>
        </header>
      </div>
    </div>
  );
}

export default AddPersonForm;