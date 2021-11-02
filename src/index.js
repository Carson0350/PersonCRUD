import React from 'react';
import ReactDOM from 'react-dom';
import AddPersonForm from './components/addPersonFrom';
import PersonList from './components/personList'

ReactDOM.render(
  <React.StrictMode>
    <AddPersonForm />
    <PersonList/>
  </React.StrictMode>,
  document.getElementById('root')
);


