import React, {  useImperativeHandle, useRef, useState } from 'react'

type inputBoxType = {
  focus: () => void;
    // ref: React.RefObject<HTMLInputElement | null>
}

function InputBox ({ ref }: { ref : React.RefObject<inputBoxType | null>}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isSubmit, setIsSubmit] = useState<string>();
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      }
    }));
    const handleSubmit = () => {
      if(ref.current == null) {
        return;
      }
      setIsSubmit(inputRef.current?.value);
      inputRef.current!.value = '';
      inputRef.current!.focus();
    }
  return (
 <section className='card'>
     
          <p>You enter this name : {isSubmit ?? ''}</p>
          <label htmlFor="name">Name: </label>
      <input type="text"  ref={inputRef}
      onChange={(e) => console.log(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
</section>
  )
}

export default InputBox