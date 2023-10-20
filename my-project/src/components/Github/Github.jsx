import React from "react"
import { useEffect,useState } from "react"
import { useLoaderData } from "react-router-dom";

function Github(){
   const data=useLoaderData();

   // const [data,setData]=useState([]);
   // useEffect(()=>{
   //    fetch('https://api.github.com/users/karanpal97')
   //    .then(responce=>responce.json())
   //    .then(data=>{
   //       console.log(data)
   //       setData(data)}
   //    )
   // },[])

   return (
      <>
      <div className="bg-gray-400 text-white-600 text-10xl p-4 text-center">GitHub follwers:{data.followers}
      <img src={data.avatar_url} alt="image of the user" width={300} /></div>
      
      </>
   )
}

export default Github



export const GithubLoader=async()=>{
   const responce = await fetch('https://api.github.com/users/karanpal97')
   return responce.json()


}