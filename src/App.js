import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import { useState } from "react";

const App = () => {
  const [message, setMessage] = useState(false);

  const handleClick = (value) => {
    setMessage(value);
    console.log("getting value"+value)
  };
  return (
    <div>
      <NavBar onButtonClick={handleClick} />
      <Hero message={message}/>
    </div>
  )
}

export default App

