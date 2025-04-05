function PlaceTimeRow({content}){
  var sep = " | ";
  var p = "";
  var t = "";

  if('place' in content){
    p = content.place;
  }else{
    sep = "";
  }

  if('time' in content){
    t = content.time;
  }else{
    sep = "";
  }

  return (
    <p className='text-xl text-[#9199A2] tracking-widest'>{p + sep + t} </p>
  )
}

function ExperienceContent({content}){
  return (
    <li className='flex flex-col pl-10'>
      {
        content.subtitle !== undefined ?
          <>
            <h3 className='text-2xl font-bold tracking-widest'>{content.subtitle.toUpperCase()}</h3>
            <PlaceTimeRow content={content}/>
            {content.description !== undefined && <p className='text-xl pt-3 pl-10'>{content.description}</p>}
          </> :
          <p className='text-xl'>{content.description}</p>
      }
    </li>
  )
}

function ExperienceContentList({experience}){
  const expRows = experience.contents.map((row, index) => (<ExperienceContent content={row} key={index}/>));

  return (
    <li className='flex flex-col mt-8 pb-8 pr-20'>
      <h2 className='text-3xl font-bold tracking-widest'>{experience.title.toUpperCase()}</h2>
      <ul className="flex flex-col gap-8 mt-8">
        {expRows}
      </ul>
    </li>
  )
}

export default function ExperienceList({experiences}){
  const expList = experiences.map((row, index) => (<ExperienceContentList experience={row} key={index}/>));
  return(
    <ul className='flex flex-col min-w-300 text-[#253446] font-montserrat divide-y-6 divide-[#FD4245] divide-xl pl-20 py-10'>
      {expList}
    </ul>
  )
}