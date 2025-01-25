'use client'
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [bottom, setbottom] = useState("-200px");

  const [navlogo,SetNavlogo]=useState('images/bar.png')

  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen(!open);
    if (!open) {
      setbottom("0px");
      SetNavlogo('images/close.png')
      //console.log(open)
    } else {
      setbottom("-200px");
      SetNavlogo('images/bar.png')
      //console.log(open)
    }
  };

  return (
    <>


{/* navbar */}

<div style={{ bottom: `${bottom}` }} className={`  flex flex-col fixed  right-0 left-0 bottom-0 z-5
 text-black bg-blue-800 md:flex-row md:bg-pink-400 text-center  transition-all delay-[5ms] md:h-[50px] my-0  md:absolute   md:right-[10%]  md:left-[10%]  md:top-5 md:rounded-md`}>
        
        
        <div id="firstdiv" className="w-[100%] md:w-[25%] h-[50px]"><Link href="/bio">about me </Link></div>
        <div className="w-[100%] md:w-[25%] h-[50px]">  <Link href="/post">post using jsonplace holder api </Link></div>
        <div className="w-[100%] md:w-[25%] h-[50px]"><Link href="/todo"> todo app using json-server on local</Link></div>
        <div className="w-[100%] md:w-[25%] h-[50px]"><Link href="/movie">movies usuing my backend django</Link></div>
      </div>








<div
        // style={{ bottom: `${bottom}` }}
        className="w-[70px] float-right text-center text-black my-[0px] transition-all delay-[5ms] fixed right-0 md:hidden "
        onClick={handleClick}
      >
        <img className="w-[80%]" src={`${navlogo}`}/>
      </div>










    </>
  );
}

export default Navbar;