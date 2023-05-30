import React, { useState } from 'react'
import { patients } from './yjs'

const PatientForm = ({ patientKey = '', initialValues = {} }) => {
    const [name, setName] = useState(initialValues.name || '')
    const [age, setAge] = useState(initialValues.age || '')
    const [condition, setCondition] = useState(initialValues.condition || '')

    const handleSubmit = (event) => {
        event.preventDefault()
        patients.set(patientKey || name, { name, age, condition })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
            <input type="text" value={condition} onChange={(e) => setCondition(e.target.value)} placeholder="Condition" required />
            <button type="submit">{patientKey ? 'Update' : 'Add'} Patient</button>
        </form>
    )
}

export default PatientForm