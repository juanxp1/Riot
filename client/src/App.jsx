import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './components/Landing';
import Home from './components/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/Home',
      element: <Home />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}


export default App
