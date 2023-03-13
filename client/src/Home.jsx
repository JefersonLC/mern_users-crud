import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './components/Card'

export default function Home () {
  const [data, setData] = useState(useLoaderData())

  const deleteTask = id => {
    fetch('http://localhost:3000/' + id, {
      method: 'DELETE'
    }).then(() => {
      setData(data.filter((e) => e.id !== id))
    })
  }

  return (
    <>
      <section className='search'>
        <input className='input' type='text' placeholder='Search user' />
      </section>
      <section className='cards'>
        {!data
          ? (<div>Loading...</div>)
          : data.length === 0
            ? <div>Nothing</div>
            : (data.map((user) => <Card key={user.id} user={user} remove={deleteTask} />))}
      </section>
    </>
  )
}
