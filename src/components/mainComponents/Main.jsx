import Card1 from './Card1';
import { useState, useEffect } from 'react';

const Main = () =>{
  const [data, setData] = useState({});
  const [data1, setData1] = useState(false);


  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon-form")
    .then((res)=>res.json())
    .then((data)=>{
      setData(data)
      setData1(true)
    })
  }, []);
  
console.log(data.results)
  return(
    <>
    {data1 && data.results.map((item)=>
      <Card1 obj={item} />
    )}
    </>
  )
}

export default Main;