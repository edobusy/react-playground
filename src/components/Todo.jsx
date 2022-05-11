import { useState, useEffect } from 'react'

const Todo = () => {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState([])

  useEffect(() => {
    const getTodo = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
      )

      const data = await response.json()

      setTimeout(() => {
        setTodo(data)
        setLoading(false)
        console.log(data)
      }, 1000)
    }

    getTodo().catch(console.error)
  }, [])

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    todo.map((item) => (
      <div
        key={item.id}
        style={{
          display: 'flex',
          background: '#d3d3d3',
          borderRadius: 35,
          margin: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h4 style={{ color: 'blue', paddingLeft: 10 }}>{item.id}</h4> &nbsp;
        <h5 style={{ width: '100%', textAlign: 'center', padding: '0 5px' }}>
          {item.title}
        </h5>
      </div>
    ))
  )
}

export default Todo
