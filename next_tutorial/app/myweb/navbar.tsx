'use client'

import { useState } from "react"

function Navbar(){

  let [age,Setage]=useState(0)

const add=()=>{
  const a = document.getElementById('firstdiv')
 
  return age+1

}


  return(
  <>
  <div className="flex flex-col text-black  bg-slate-100  md:flex-row  md:bg-pink-400 text-center">
      <div id="firstdiv" className="w-[100%] md:w-[25%] ">{age}</div>
      <div className="w-[100%] md:w-[25%]">2</div>
      <div className="w-[100%] md:w-[25%]">3</div>
      <div onClick={()=>{Setage(add)}} className="w-[100%] md:w-[25%]">4</div>
  </div>
  </>
  )
}

export default Navbar