import { useEffect, useState } from 'react';
import './App.css'
 
type Response = {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
  }[];
}
// let timer:number;
function App() {
 const [data,setData] = useState<Response|null>(null);
 const [isLoading, setIsLoading] = useState<boolean>(true);
 const [error, setError] = useState<string | null>(null);
 
 const fetchData = async () => {
  setIsLoading(true);
  setError(null);
  try {
    setIsLoading(true);
    const response = await fetch("https://reqres.in/api/users/2", {
      headers: {
        "x-api-key":
          "pub_2c64ba05b9c400043d0b67cd5850ef14a984ee78b228fb6386e28b0f79163f12", // ✅ required API key
      },
    });
    if(!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const result =await response.json();
    // console.log("Result:", result);
    setData(result);
    // console.log(data)
   }catch (err)
  {
    setError('Failed to fetch data');
 }finally{
    setIsLoading(false);
 }
}
useEffect(() =>{
  fetchData();
},[])

if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error : {error}</p>;

  return (
    <div className='card'>
     <h3>Custom Hook</h3>
     <p>User Email :  {data?.data[0]?.email} </p>
    </div>
  )
}

export default App
