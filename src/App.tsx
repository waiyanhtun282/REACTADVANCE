import { useReducer, type ChangeEvent, type FormEvent } from 'react';
import './App.css'

type FormState = {
  name:string,
  city:string,
  salary:string
};

type FormAction = { type: "UPDATED_FAILED" ,filed: keyof FormState , value:string } | { type: "RESET" };  
// let timer:number;
const initialState = {
  name:"",
  city:"",
  salary:""
}





const formReducer = (state:FormState,action:FormAction)=>{
  switch (action.type) {
    case "UPDATED_FAILED":
      return {
        ...state,
        [action.filed]:action.value
      }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}


function App() {
 const [formState , disaptch] =useReducer( formReducer,initialState)

 const handelChange = (e :ChangeEvent<HTMLInputElement>)=>{
  const  { name , value} = e.target;
  disaptch({
    type:"UPDATED_FAILED",
    filed:name as keyof FormState,
    value
  })
 }
   const handelSubmit = (e: FormEvent) => {
     e.preventDefault();
     disaptch({ type: "RESET" });

     console.log("SubbmitData");
   };

  return (
    <div className="">
      <form action="" onSubmit={handelSubmit}>
        <input type="text" name="name"
        value={formState.name}
        onChange={handelChange}
        />
        <input type="text" name="city" value={formState.city} onChange={handelChange} />
        <input type="text" name="salary" value={formState.salary} onChange={handelChange} />
        <input type="submit">Update</input>
      </form>
    </div>
  );
}

export default App
