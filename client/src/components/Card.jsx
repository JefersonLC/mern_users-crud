import { Link } from 'react-router-dom'
import Button from './Button'

export default function Card ({ user, remove }) {
  return (
    <div className='card'>
      <div className='card-header'>
        <span className='avatar' style={{ backgroundColor: '#F33' }}>
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
        <Link to={'user/' + user.id} className='btn btn-modify'>Modify</Link>
        <Button className='btn btn-delete' action={remove} id={user.id}>Delete</Button>
      </div>
    </div>
  )
}
