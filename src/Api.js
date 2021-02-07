
import React, { useState, useEffect } from "react";
import axios from "axios";



function Api(){
  const [num, setnum] = useState();
  const [name, setname] = useState();
  const [moves, setmoves] = useState()

  useEffect(()=>{
    // alert(shoaib)
    async function well(){
      const meet = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(meet.data)
      setname(meet.data.name);
      setmoves(meet.data.moves.length)
      
    }

    well();

  })

  return(
    <div style={{textAlign:'center'}}>

    <h1>Choose your value <span style={{color:'yellowgreen'}}> {num} </span>   </h1>
    <h1>My name is  <span style={{color:'pink'}}> {name} </span>   </h1>
    <h1>I haVe <span style={{color:'blue'}}> {moves} </span>   </h1>


    <select
    value={num}
    onChange={(event)=>{
      setnum(event.target.value)
    }}
    
     >
      <option value="1">1</option>
      <option value="25">25</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>

    </div>
  )
}

export default Api;

