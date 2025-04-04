import { useState } from 'react'
import myData from './romain.json'

function Header({firstname, lastname, intro}){
  return (
    <header>
      <div className="flex flex-col justify-between min-w-300 px-20 pt-20 pb-15 font-montserrat bg-[#FD4245]">
        <h1 className="text-7xl font-semibold tracking-widest text-white">{lastname.toUpperCase()} {firstname.toUpperCase()}</h1>
        <p className="text-3xl text-[#253446] font-medium tracking-widest my-5">{intro}</p>
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
    <tr className='text-[#FD4245] text-2xl tracking-widest'>
      <th>{label.toUpperCase()}</th>
    </tr>
  );
}

function InformationThread({infoThread}){
  const infoRows = infoThread.infoList.map((row, index) => (<InformationRow information={row} key={index}/>));

  return(
    <div className='flex flex-col gap-3 my-7'>
      <InformationLabel label={infoThread.label}/>
      <tr className='text-white text-xl'>
        <td>
          <ul className='list-disc pl-8'>
            {infoRows}
          </ul>
        </td>
      </tr>
    </div>
  );
}

function InformationTable({informations}){
  const threads = informations.map((info) => (<InformationThread infoThread={info}/>));

  return(
    <table className='flex flex-col px-15 py-10 min-w-120 text-left font-montserrat bg-[#253446]'>
      {threads}
    </table>
  )
}

function PlaceTimeRow({content}){
  var sep = true;
  var p = "";
  var t = "";

  if('place' in content){
    p = content.place;
  }else{
    sep = false;
  }

  if('time' in content){
    t = content.time;
  }else{
    sep = false;
  }

  return (
    <tr>
      <td className='text-xl text-[#9199A2] tracking-widest'>{p + (sep && " | ") + t} </td>
    </tr>
  )
}

function ExperienceContent({content}){
  return (
    <div className='flex flex-col pl-10'>
      {
        content.subtitle !== undefined ?
          <>
            <tr>
              <th className='text-2xl tracking-widest'>{content.subtitle.toUpperCase()}</th>
            </tr>
            <PlaceTimeRow content={content}/>
            {content.description !== undefined && <tr><td className='text-xl pt-3 pl-10'>{content.description}</td></tr>}
          </> :
          <tr>
            <td className='text-xl'>{content.description}</td>
          </tr>
      }
    </div>
  )
}

function ExperienceContentList({experience}){
  const expRows = experience.contents.map((row) => (<ExperienceContent content={row}/>));

  return (
    <div className='flex flex-col gap-8 my-7'>
      <tr className='text-3xl tracking-widest'>
        <th>{experience.title.toUpperCase()}</th>
      </tr>
      {expRows}
      <hr className="border-t-6 border-[#FD4245]" />
    </div>
  )
}

function ExperienceTable({experiences}){
  const expList = experiences.map((row) => (<ExperienceContentList experience={row}/>));

  return(
    <table className='flex flex-col min-w-300 text-[#253446] font-montserrat text-left px-20 py-10'>
      {expList}
    </table>
  )
}

function Cv({data}){
  return (
    <div>
      <Header firstname={data.firstname} lastname={data.lastname} intro={data.intro}/>
      <div className='flex'>
        <InformationTable informations={data.informations}/>
        <div>
          <ExperienceTable experiences={(data.experiences)}/>
        </div>
      </div>
    </div>
    
  )
}

function App() {
  return <Cv data={myData}/>
}

export default App
