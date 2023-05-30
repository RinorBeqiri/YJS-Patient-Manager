import React from 'react'
import PatientForm from './PatientForm'
import PatientList from './PatientList'

function App() {
  return (
      <div>
        <h1>Patient Manager</h1>
        <PatientForm />
        <PatientList />
      </div>
  );
}

export default App;