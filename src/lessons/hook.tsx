import './App.css'
import { useQuery } from './hooks/useQuery';
 
type Response = {
  data: {
    id: number;
    email: string;
  };
}
// let timer:number;
function App() {
 const { data, isLoading, error } = useQuery<Response>("users/2");

if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error : {error}</p>;

  return (
    <div className='card'>
     <h3>Custom Hook</h3>
     <p>User Email :  {data?.data.email} </p>
    </div>
  )
}

export default App
