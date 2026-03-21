import { createBrowserRouter, RouterProvider } from "react-router-dom"
import GlobalStyle from "./styles"
import Home from "./pages/Home"
import Perfil from "./pages/Perfil"

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/flavors',
    element: <Perfil />
  }
])

function App() {

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
