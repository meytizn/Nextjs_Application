'use client'
import React, { useState } from "react";

function Navbar() {
  const [bottom, setbottom] = useState("-100px");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    if (!open) {
      setbottom("0px");
      console.log(open)
    } else {
      setbottom("-100px");
      console.log(open)
    }
  };

  return (
    <>


{/* navbar */}

<div style={{ bottom: `${bottom}` }} className={`  flex flex-col fixed -z-10 right-0 left-0 bottom-0  text-black bg-blue-800 md:flex-row md:bg-pink-400 text-center  transition-all delay-[5ms] md:top-0 md:h-[50px] my-0`}>
        <div id="firstdiv" className="w-[100%] md:w-[25%]">1</div>
        <div className="w-[100%] md:w-[25%]">2</div>
        <div className="w-[100%] md:w-[25%]">3</div>
        <div className="w-[100%] md:w-[25%]">4</div>
      </div>








<div
        // style={{ bottom: `${bottom}` }}
        className="w-[20%] float-right text-center bg-blue-200 text-black my-[0px] transition-all delay-[5ms] fixed right-0 md:hidden "
        onClick={handleClick}
      >
        Tester
      </div>










    </>
  );
}

export default Navbar;