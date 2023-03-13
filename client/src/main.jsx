import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Form from './Form'
import Home from './Home'
import User from './User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        loader: () => {
          return fetch('http://localhost:3000/')
        },
        element: <Home />
      },
      {
        path: 'add',
        element: <Form />
      },
      {
        path: 'user/:id',
        loader: ({ params }) => {
          return fetch('http://localhost:3000/' + params.id)
        },
        element: <User />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
