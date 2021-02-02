
import React, {useState,useEffect} from 'react'
import ListItem from './ListItem'
import axios from 'axios'
import './App.css';

function App() {
  const[list,setList] = useState([])


  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=26').then((res)=>{
      setList(res.data.results)
    })
  },[])


  return (
    <div className="App">
      <h1> <u>First 26 Pokemon</u></h1>
      <ol>
        
        {list.map((el,index)=>{
          return <li><ListItem name={el.name} key={index}/></li>
        })}
    </ol>
    </div>
  );
}

export default App;
