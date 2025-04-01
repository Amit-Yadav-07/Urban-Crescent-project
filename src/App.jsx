
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeLayout, Error, Home, Portfolio, Contact, About, Studio } from './Components/index'
import { ThemeProvider } from './ThemeContext'

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
      ]
    }
  ])

  return (
    <>

      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
