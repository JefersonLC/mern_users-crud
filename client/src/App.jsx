import { useEffect, useState } from 'react'
import Button from './components/Button'
import './styles/App.css'

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  const colors = ['c52c2c', '575050', '1f3286', '128897', '12972f']

  const getColor = () => colors[Math.round(Math.random() * colors.length)]

  return (
    <div className='cards'>
      {data.map((user) => (
        <div key={user.id} className='card'>
          <div className='card-header'>
            <span
              className='avatar'
              style={{ backgroundColor: '#' + getColor() }}
            >
              {user.name[0]}
            </span>
            <span className='names'>
              {user.name} {user.lastname}
            </span>
            <span className='id'>#{user.id.toString().padStart(3, '0')}</span>
          </div>
          <div className='card-body'>
            <ul className='list'>
              <li className='item'>Phone: {user.phone}</li>
              <li className='item'>Age: {user.age}</li>
              <li className='item'>Email: {user.email}</li>
            </ul>
          </div>
          <div>
            <Button className='btn'>Modificar</Button>
            <Button className='btn'>Eliminar</Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
