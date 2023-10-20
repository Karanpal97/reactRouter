import React from "react"
import { useParams } from "react-router-dom"

function User(){

   const {userId}=useParams();

   return(
      <>
      <div className="bg-gray-400 text-white-600 text-10xl p-4 text-center">User:{userId}</div>
 
      
      
      </>
   )
}


export default User