import React, {  useState } from 'react'

type inputBoxType = {
    ref: React.RefObject<HTMLInputElement | null>
}

function InputBox ({ ref }: inputBoxType)  {
    // const ref = useRef<HTMLInputElement>(null);
    const [isSubmit, setIsSubmit] = useState<string>();
    const handleSubmit = () => {
      if(ref.current == null) {
        return;
      }
      setIsSubmit(ref.current?.value);
      ref.current.value = '';
      ref.current.focus();
    }
  return (
 <section className='card'>
     
          <p>You enter this name : {isSubmit ?? ''}</p>
          <label htmlFor="name">Name: </label>
      <input type="text"  ref={ref}
      onChange={(e) => console.log(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
</section>
  )
}

export default InputBox