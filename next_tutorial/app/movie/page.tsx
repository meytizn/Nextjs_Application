// interfaces.ts


import Link from "next/link";
import { Fragment } from "react";

export interface Movie {
  id: number;
  poster: string;
  title: string;
  description: string;
  imdb_score: string;
  movie_time: number;
  age: number;
  country: string;
  status: boolean;
  created_time: string;
  updated_time: string;
  author: number;
  actor: number[];
  genre: number[];
}

async function Movies(){
  const response =await fetch('http://127.0.0.1:8000/api/movie/',{cache:'no-cache'})
  let data : Movie[]=await response.json()

  return(
    <Fragment>
 


<div className="w-[100%] py-[100px] md:py-[-200px]">
  
 <form className="max-w-lg mx-auto">
    <div className="flex">
        <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Movie name ... " required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
</div>



{/* 
end serachbar  */}


 <div 
 className="content-center flex flex-row gap-y-5 md:flex-row my-[-70px] w-[100%] md:gap-x-5  justify-between md:justify-center flex-wrap ">



 {data.map((item)=>(
  <div key={item.id}>
    <Link href={`/movie/${item.id}`}>
    <img className="bg-red-600 w-[200px] h-[350px] md:w-[300px] md:h[400px] rounded-md" src={item.poster} alt="" />
  <h3 className="text-center">{item.title}</h3>
  </Link>
  </div>
  
 ))}




</div>
</Fragment>
  )
}

export default Movies