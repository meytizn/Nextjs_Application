import Link from "next/link";

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

async function Moviedetail( {params} : {params : {id:string} } ){
  const response = await fetch(`http://127.0.0.1:8000/api/movie/${params.id}/`, { cache: 'no-cache' });
  const data: Movie = await response.json();

  return (
    <>
      <div>post id : {params.id}</div>
      
      <div className="content-center flex flex-row gap-y-5 md:flex-row my-[120px] w-[100%] justify-between bg-yellow-600 flex-wrap ">
        <div key={data.id}>
          <img className="bg-red-600 w-[230px] h-[350px] md:w-[350px] md:h[400px]" src={data.poster} alt="" />
          <h3 className="text-center">{data.title}</h3>
        </div>
      </div>
    </>
  );
}

export default Moviedetail;