'use client'
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [bottom, setbottom] = useState("-100px");

  const [navlogo,SetNavlogo]=useState('images/bar.png')

  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen(!open);
    if (!open) {
      setbottom("0px");
      SetNavlogo('images/close.png')
      //console.log(open)
    } else {
      setbottom("-100px");
      SetNavlogo('images/bar.png')
      //console.log(open)
    }
  };

  return (
    <>


{/* navbar */}

<div style={{ bottom: `${bottom}` }} className={`  flex flex-col fixed -z-10 right-0 left-0 bottom-0  text-black bg-blue-800 md:flex-row md:bg-pink-400 text-center  transition-all delay-[5ms] md:top-0 md:h-[50px] my-0`}>
        <div id="firstdiv" className="w-[100%] md:w-[25%]"><Link href="/about">about us </Link></div>
        <div className="w-[100%] md:w-[25%]">  <Link href="/post">تمامی پست ها </Link></div>
        <div className="w-[100%] md:w-[25%]"><Link href="/todo">تودو اپ</Link></div>
        <div className="w-[100%] md:w-[25%]">4</div>
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