import { Link, Outlet } from 'react-router-dom'
import './styles/App.css'

function App () {
  return (
    <>
      <nav>
        <Link to='.'>Home</Link>
        <Link to='add'>Add</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App
