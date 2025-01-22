import { revalidateTag } from "next/cache"

interface TaskInterface{
  id:number
  title:string 
  description:string
}

  // main function using fetch
async function Todo(){

  const response = await fetch('http://localhost:8003/tasks/',{
    cache:'no-cache',
    next:{tags :['tasks']} //caching method reload datas when calling revalidateTag
  })

  let data:TaskInterface[]= await response.json()


// server function using post method and called in action form 
async function add_do(e:FormData ){
  'use server'  //using server to send data for server
  const title = e.get('title')
  const description = e.get('description')
  const newdo={title:title , description:description}

  await fetch('http://localhost:8003/tasks/',{
    method:'POST',
    headers:{'Content-Type':'application/json',},
    body:JSON.stringify(newdo)
  })
  revalidateTag('tasks')   //import { revalidateTag } from "next/cache"
}

 return(<>
 <h1 className="w-[100%] text-center">Todo application form using server action </h1>
 <br/>


<form action={add_do} className="flex flex-col gap-5 max-w-xl bg-slate-800 rounded-md p-8 mx-auto">
  <input type="text" name="title" placeholder="Title ... " className="p-2 bg-slate-600 outline-none rounded-md" />
  <input type="text" name="description" placeholder="Description ...  " className="p-2 bg-slate-600 outline-none rounded-md" />
  <button className="p-2 bg-slate-900 text-slate-100 rounded-md">add</button>
</form>


<div className="flex flex-wrap justify-center max-w-xl mx-auto my-10 gap-5">
{data.map((item)=>(
  <div key={item.id} className="p-5 bg-slate-800 rounded-md text-center">
  <p>{item.title}</p>
  <p>{item.description}</p>
  </div>
))}
</div>
 </>) 
}

export default Todo