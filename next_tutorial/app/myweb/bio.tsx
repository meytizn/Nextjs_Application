'use client'

import Contact from "./contact_post"

function Bio(){
 return(<>
 


















 
<div  className="flex flex-col  md:flex-row my-[120px] w-[100%]  md:justify-between   ">






<div id="row1" className="w-[100%] md:w-[48%]  rounded-t-lg ">


    <div id="defaultTabContent" className="my-[-4px] md:w-[100%] ">
      <img className="w-[50%] m-auto" src="/images/mahdi.jpg"/>

        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
        <p className="mb-3 text-gray-800 dark:text-black-800">MAHDI ZAMANIAN</p>
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Full-Stack Web Developer</h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">I'm excited about the possibilities that coding presents and the impact it can have on the world. From creating innovative solutions to important issues, to improving efficiency and productivity in businesses, developing has the power to change lives. I'm eager to be a part of this exciting field and contribute to its growth and development.</p>
            <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                Learn more
                <svg className=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path>
                </svg>
            </a>
        </div>



    </div>


{/* 
    <ul className="flex flex-wrap bg-blue-900 text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 md:w-[100%]" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li className="me-2 w-[100%]">
           
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500 text-[35px] text-white">Education</button>
        </li>

    </ul> */}

<br/><br/>







{/* 
biography */}

<ul className="flex flex-wrap  bg-black text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 md:w-[100%] bg-blue-600" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li className="me-2 w-[100%]">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" className="inline-block p-4  rounded-ss-lg  dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500   border-blue-600 dark:border-blue-500 text-[35px] text-white">Education</button>
        </li>

    </ul>

    <div id="defaultTabContent" className="my-[-4px] md:w-[100%]">
        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation &amp; trust at 200,000+ companies worldwide</h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
            <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                Learn more
                <svg className=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path>
                </svg>
            </a>
        </div>



    </div>

    </div>














    <div id="row2" className="w-[100%] md:w-[25%]  ">
    <ul className="flex flex-wrap  bg-black text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 md:w-[100%] bg-blue-600" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li className="me-2 w-[100%]">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" className="inline-block p-4  rounded-ss-lg  dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500   border-blue-600 dark:border-blue-500 text-[25px] text-white">Front-end Projects </button>
        </li>

    </ul>

    <div id="defaultTabContent" className="my-[-4px] md:w-[100%]">
        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation &amp; trust at 200,000+ companies worldwide</h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
            <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                Learn more
                <svg className=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path>
                </svg>
            </a>
        </div>



    </div>


{/* 
biography */}

<ul className="flex flex-wrap bg-blue-900 text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 md:w-[100%]" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li className="me-2 w-[100%]">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500 text-[35px] text-white">Education</button>
        </li>

    </ul>

    <div id="defaultTabContent" className="my-[-4px] md:w-[100%]">
        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation &amp; trust at 200,000+ companies worldwide</h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
            <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                Learn more
                <svg className=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path>
                </svg>
            </a>
        </div>



    </div>

    </div>












    <div id="row3" className="w-[100%] md:w-[25%] ">
    <ul className="flex flex-wrap bg-blue-900 text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 md:w-[100%]" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li className="me-2 w-[100%]">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500 text-[25px] text-white">back-end projects</button>
        </li>

    </ul>




    <div id="defaultTabContent" className="my-[-4px] md:w-[100%]">
        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation &amp; trust at 200,000+ companies worldwide</h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
            <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                Learn more
                <svg className=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path>
                </svg>
            </a>
        </div>



    </div>


{/* 
biography */}
<ul className="flex flex-wrap  bg-black text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 md:w-[100%] bg-blue-600" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li className="me-2 w-[100%]">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" className="inline-block p-4  rounded-ss-lg  dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500   border-blue-600 dark:border-blue-500 text-[35px] text-white">Contact</button>
        </li>

    </ul>

    <div id="defaultTabContent" className="my-[-4px] md:w-[100%]">

        <Contact/>



    </div>

    </div>










    </div>



 </>) 
}

export default Bio