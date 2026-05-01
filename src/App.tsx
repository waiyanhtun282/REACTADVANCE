import { useEffect, useState } from 'react';
import './App.css'
import { Link, useSearchParams } from 'react-router';
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
  const [searchParams ,setSearchParams] = useSearchParams();
 const searchQuery = searchParams.get('search') || '';
  const [inputValue,setInputValue]=useState(searchQuery);
  // const [searchQuery,setSearchQuery]=useState('');
  useEffect(
    ()=>{
  const timer = setTimeout(
    ()=>{
    if(inputValue){
          searchParams.set('search',inputValue);
    }else {
      searchParams.delete('search');  
    }
    setSearchParams(searchParams);
  },500);

  return () =>  clearTimeout(timer);

   
},[inputValue ,searchParams,setSearchParams]);

  const filterUsers = users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()));

  
  
  return (
    <div className='card'>
      <Link to="/help">Link to other page</Link>

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
