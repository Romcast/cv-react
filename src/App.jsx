import Header from './components/Header.jsx'
import InformationList from './components/InformationList.jsx'
import ExperienceList from './components/ExperienceList.jsx'
import myData from './assets/romainCV.json'

function Cv({data}){
  return (
    <div>
      <Header firstname={data.firstname} lastname={data.lastname} intro={data.intro}/>
      <div className='flex'>
        <InformationList informations={data.informations}/>
        <ExperienceList experiences={(data.experiences)}/>
      </div>
    </div>
    
  )
}

function App() {
  return <Cv data={myData}/>
}

export default App
