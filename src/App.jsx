
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/login'
import Browser from './components/Browser'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
      path:'/browser',
      element: <Browser/>
    }
  ])

  return <>
      <div>
          <RouterProvider router={appRouter}/>
      </div>

    </>
  
}

export default App
