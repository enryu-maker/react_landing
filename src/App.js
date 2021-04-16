//import logo from './logo.svg';
import './App.css';
import Avtar from './avatar'
import 'tachyons'
function App() {

const arraylist = [
  {
    id:'1',
    name:'Awais khan ',
    work:'Cyber Security Researcher'
  },
  {
    id:'2',
    name:'Akif khan',
    work:'Data Scientist'
  },
  {
    id:'3',
    name:'Anonymous404',
    work:'Blackhat Hacker'
  },
  {
    id:'4' ,
    name:'Rao Anwaar ',
    work:'Full Stack Developer'
  }
]

const avtarvalue=(arraylist.map((avatarcard,i)=>{
  return <Avtar id={arraylist[i].id} name={arraylist[i].name} work={arraylist[i].work}/>

}))
const onclick=()=>{
  window.location.href=('http://codiux.net')
}

  return (
      <div className='heading'>
      <h2 className='tc'>Welcome to CodiuX</h2>
      {avtarvalue}
      <button style={{display: 'flex',margin:'auto', justifyContent: 'center'}} className='bg-light-blue pa2 ma2' onClick={()=>{onclick()}}>Joinus</button> 
      </div>

    
  );
}

export default App;
