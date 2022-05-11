import { useRef } from 'react'

const UseRefExample1 = () => {
  // useRef does not re-render the component on change, but it can be used to keep a reference to a specific DOM element
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(inputRef.current.value)
    inputRef.current.value = 'Well Done!'
    inputRef.current.style.backgroundColor = 'green'
    paraRef.current.innerText = 'Goodbye'
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          ref={inputRef}
          className='form-control mb-2'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello there, please submit your name in the above input box
        </p>
      </form>
    </div>
  )
}

export default UseRefExample1
