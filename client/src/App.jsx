import { Link, Outlet } from 'react-router-dom'
import './styles/App.css'

function App () {
  return (
    <>
      <nav className='nav'>
        <Link className='link' to='.'>Home</Link>
        <Link className='link' to='add'>Add</Link>
      </nav>
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}

export default App
