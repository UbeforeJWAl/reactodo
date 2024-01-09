import React, {useState} from 'react'
import './App.css';
const App = () => {
const [task, settask] = useState("");


const[Task, setTask] = useState([]);
const submitForm = (e) => {
e.preventDefault();
const newTask = {task : task};
setTask([...Task, newTask]);
console.log(Task)
}
return (
<>
<form action='' onSubmit={submitForm}>
<div> 
    <h1>TO DO LIST APP</h1>
<label> Enter the task : </label>
<input name="add Task" value={task}
onChange={(e)=>settask(e.target.value)}/><button type="submit">Submit</button>
</div>


</form>
<div>
{
Task.map((curElem, index)=>{
return(
<p key={index}>

<textarea>{curElem.task}</textarea>
<span> </span>
<span>{curElem.lastName}</span>

</p>
)
})
}
</div>
</>
)
}
export default App