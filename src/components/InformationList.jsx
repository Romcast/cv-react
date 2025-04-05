function InformationRow({information}){
    return (
      <li className='my-3'>{information}</li>
    );
}

function InformationLabel({label}){
    return (
      <h2 className='text-[#FD4245] text-2xl font-bold tracking-widest'>{label.toUpperCase()}</h2>
    );
}

function InformationThread({infoThread}){
    const infoRows = infoThread.infoList.map((row, index) => (<InformationRow information={row} key={index}/>));
  
    return(
      <li className='flex flex-col gap-3 my-7'>
        <InformationLabel label={infoThread.label}/>
        <ul className='list-disc pl-8 text-white text-xl'>
          {infoRows}
        </ul>
      </li>
    );
}

export default function InformationList({informations}){
    const threads = informations.map((info, index) => (<InformationThread infoThread={info} key={index}/>));
  
    return(
      <ul className='flex flex-col px-15 py-10 min-w-120 font-montserrat bg-[#253446]'>
          {threads}
      </ul>
    )
}