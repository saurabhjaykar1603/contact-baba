import React, { useState } from 'react'
import './App.css'
import {phonebook} from "../components/data/phonebook"

const App = () => {
    const [contact , setContacts ] = useState(phonebook)
  return (
    <>
      <h1 className='text-center'>Contact Baba</h1>
    </>
  )
}

export default App
