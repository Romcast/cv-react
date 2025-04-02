import { useState } from 'react'
import './App.css'
import myData from './romain.json'

function Header({firstname, lastname, description}){
  return (
    <header>
      <div className="flex flex-col items-start justify-between min-w-300 h-80 px-20 py-20 bg-[#FD4245]">
        <h1 className="text-7xl font-semibold font-montserrat tracking-widest text-white">{lastname.toUpperCase()} {firstname.toUpperCase()}</h1>
        <p className="text-3xl font-medium font-montserrat tracking-widest">{description}</p>
      </div>
    </header>
  )
}

function App() {
  return <Header firstname={myData.firstname} lastname={myData.lastname} description="ÉTUDIANT EN INFORMATIQUE À LA RECHERCHE D'UN STAGE
  DE 18 SEMAINES MINIMUM À PARTIR DE JANVIER 2025"/>;
}

export default App
