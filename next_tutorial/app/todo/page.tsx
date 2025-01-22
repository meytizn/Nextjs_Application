interface TaskInterface{
  id:number
  title:string 
  description:string
}
  

async function Todo(){

  const response = await fetch('http://localhost:8003/tasks/',{cache:'no-store'})
  let data:TaskInterface[]= await response.json()



 return(<>
 <h1 className="w-[100%] text-center">Todo application form using server action </h1>
 <br/>


<form className="flex flex-col gap-5 max-w-xl bg-slate-800 rounded-md p-8 mx-auto">
  <input type="text" name="title" placeholder="Title ... " className="p-2 bg-slate-600 outline-none rounded-md" />
  <input type="text" name="description" placeholder="Description ...  " className="p-2 bg-slate-600 outline-none rounded-md" />
  <button className="p-2 bg-slate-900 text-slate-100 rounded-md">add</button>
</form>


<div>
{data.map((item)=>(
  <div key={item.id}>
  <p>{item.title}</p>
  <p>{item.description}</p>
  </div>
))}
</div>
 </>) 
}

export default Todo