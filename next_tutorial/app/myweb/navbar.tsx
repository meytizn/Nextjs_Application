'use client'
import React, { useState } from "react";

function Navbar() {
  const [marginTop, setMarginTop] = useState("0px");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    if (!open) {
      setMarginTop("100px");
      console.log(open)
    } else {
      setMarginTop("0px");
      console.log(open)
    }
  };

  return (
    <>
      <div className="flex flex-col text-black bg-slate-100 md:flex-row md:bg-pink-400 text-center">
        <div id="firstdiv" className="w-[100%] md:w-[25%]">1</div>
        <div className="w-[100%] md:w-[25%]">2</div>
        <div className="w-[100%] md:w-[25%]">3</div>
        <div className="w-[100%] md:w-[25%]">4</div>
      </div>

      <div
        style={{ marginTop: `${marginTop}` }}
        className="w-[20%] float-right text-center bg-slate-200 text-black my-[0px] transition-all delay-[5ms]"
        onClick={handleClick}
      >
        Tester
      </div>
    </>
  );
}

export default Navbar;