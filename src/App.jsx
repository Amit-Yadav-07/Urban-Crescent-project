
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeLayout, Error, Home, Portfolio, Contact, About, Studio } from './Components/index'
import Example from './Components/Example'


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
          element: <Studio />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/example',
          element: <Example />
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
