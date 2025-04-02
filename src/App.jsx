import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import myData from './romain.json'

function Header({firstname, lastname, description}){
  return (
    <header>
      <div className="flex flex-col items-center justify-center bg-[#FD4245]">
        <h1 className="text-5xl">{lastname} {firstname}</h1>
        <p>{description}</p>
      </div>
    </header>
  )
}

function App() {
  return <Header firstname={myData.firstname} lastname={myData.lastname} description="ÉTUDIANT EN INFORMATIQUE À LA RECHERCHE D'UN STAGE
  DE 18 SEMAINES MINIMUM À PARTIR DE JANVIER 2025"/>;
}

export default App
