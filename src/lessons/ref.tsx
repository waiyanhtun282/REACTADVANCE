import InputBox from './lessons/InputBox'
import './App.css'
import { useRef } from 'react';

// let timer:number;
function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  // const timer = useRef(0);
  // const [isStart, setIsStart] = useState(false);
  // const [ expireTime, setExpireTime] = useState(false);
  // const startTimer = () => {
  //   setIsStart(true);
  //   setExpireTime(false);
  //   timer.current = setTimeout(() => {
  //     setExpireTime(true)
  //     setIsStart(false)
  //   }, 5000)
  // }

  // const stopTimer = () => {
  //   clearTimeout(timer.current)
  //   setExpireTime(false)
  //   setIsStart(false)
  // }

  return (
    <section className='card'>
     <h3>Passing ref of custom component</h3>
     <button  onClick={() => inputRef.current?.focus()} >
      Focus Input Box
     </button>
        <InputBox  ref={inputRef}/>
    </section>
  )
}

export default App
