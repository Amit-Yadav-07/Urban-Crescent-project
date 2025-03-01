
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeLayout, Error, Home, Portfolio, Contact, About } from './Components/index'

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/portfolio',
          element: <Portfolio />
        },
        {
          path: '/studio',
          element: <h1>Studio page</h1>
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
