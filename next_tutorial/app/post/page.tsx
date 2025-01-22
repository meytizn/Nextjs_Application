// make fetch functino async and the fetch await cuz fetching is a asyncerknouse 
// then extract the fetch const with await
// map in data in return and use uniq id to shoe
//after maping u have to declare the type of item in map by interface out of the fuction 
// and then use interface while extracting data to json 
//just know that it automaticlay run on the server not client 
interface PostInterface{
  id:number
  title:string
}

async function Post(){

  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{next:{revalidate:5},})
  let data:PostInterface[]=await response.json()
  data=data.slice(0,10) //to use 10 post
  return(
    <>
    <h3>post page usig param by id usig [] in create a new folder and tsxt file in that  . </h3>

    <div>
      <ul>
      {data.map((item)=>(
        <li key={item.id}>{item.title}</li>
      ))}
      </ul>
    </div>

    </>
  )
}
export default Post