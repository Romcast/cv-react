import { useState } from 'react'
import './App.css'
import myData from './romain.json'

function Header({firstname, lastname, intro}){
  return (
    <header>
      <div className="flex flex-col justify-between min-w-300 px-20 pt-20 pb-15 bg-[#FD4245]">
        <h1 className="text-7xl font-semibold font-montserrat tracking-widest text-white">{lastname.toUpperCase()} {firstname.toUpperCase()}</h1>
        <p className="text-3xl font-medium font-montserrat tracking-widest my-5">{intro}</p>
      </div>
    </header>
  )
}

function InformationRow({information}){
  return (
    <li className='my-3'>{information}</li>
  );
}

function InformationLabel({label}){
  return (
    <tr className='text-[#FD4245] text-2xl font-montserrat tracking-widest'>
      <th>{label.toUpperCase()}</th>
    </tr>
  );
}

function InformationThread({infoThread}){
  const rows = infoThread.infoList.map((row, index) => (<InformationRow information={row} key={index}/>));

  return(
    <div className='my-7'>
      <InformationLabel label={infoThread.label}/>
      <tr className='text-white text-xl font-montserrat'>
        <td>
          <ul className='list-disc pl-5'>
            {rows}
          </ul>
        </td>
      </tr>
    </div>
  );
}

function InformationTable({informations}){
  const threads = informations.map((info) => (<InformationThread infoThread={info}/>));

  return(
    <table className='flex flex-col justify-between px-20 py-10 w-1/3 min-w-100 text-left bg-[#253446]'>
      {threads}
    </table>
  )
}

function Cv({data}){
  return (
    <div>
      <Header firstname={data.firstname} lastname={data.lastname} intro={data.intro}/>
      <div>
        <InformationTable informations={data.informations}/>
      </div>
    </div>
  )
}

function App() {
  return <Cv data={myData}/>
}

export default App
