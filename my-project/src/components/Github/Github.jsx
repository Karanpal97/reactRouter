import React from "react"
import { useEffect,useState } from "react"

function Github(){

   const [data,setData]=useState([]);
   useEffect(()=>{
      fetch('https://api.github.com/users/karanpal97')
      .then(responce=>responce.json())
      .then(data=>{
         console.log(data)
         setData(data)}
      )
   },[])

   return (
      <>
      <div className="bg-gray-400 text-white-600 text-10xl p-4 text-center">GitHub follwers:{data.followers}</div>
      
      </>
   )
}

export default Github