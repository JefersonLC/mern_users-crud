import Button from './Button'
import useColor from '../hooks/useColor'

export default function Card ({ user }) {
  const { randomColor } = useColor(['#F00', '#0F0', '#00F'])

  return (
    <div className='card'>
      <div className='card-header'>
        <span className='avatar' style={{ backgroundColor: randomColor }}>
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
      <div className='card-footer'>
        <Button className='btn btn-modify'>Modificar</Button>
        <Button className='btn btn-delete'>Eliminar</Button>
      </div>
    </div>
  )
}
