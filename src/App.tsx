import { useState } from 'react';
import './App.css'
const users = [
  {
    id: 1,
    name: "Mg Mg",
  },
  {
    id: 2,
    name: "Aug Mg",
  },
   {
    id:3 ,name:"Lg Mg",
    
  },
   {
    id:1 ,name:"M Mg",
    
  }
];
// let timer:number;
function App() {
  const [inputValue,setInputValue]=useState('');

  const filterUsers = users.filter((user) => user.name.toLowerCase().includes(inputValue.toLowerCase()));

  
  
  return (
    <div className='card'>

    <h3>Search Filtering and Debouncing</h3>
    <input type="text" placeholder="Search users..."  value={inputValue} onChange={(e) => setInputValue(e.target.value)}   />
    <ul>
      {filterUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </div>
  )
}

export default App
