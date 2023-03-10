import { useState, useEffect } from 'react'
import Card from './components/Card'

export default function Home () {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  return (
    <div className='cards'>
      {data.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  )
}
