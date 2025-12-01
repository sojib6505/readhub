import { createBrowserRouter } from "react-router"
import Root from "../Root/Root"
import Home from "../Pages/Home/Home"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Books from "../Componenets/Books/Books"
export const router = createBrowserRouter([
  {
    path: '/',
   Component: Root,
   errorElement: <ErrorPage/>,
   children: [
    {path:'/',
       loader:() => fetch('booksData.json'),
        Component: Home
    },
    {path:'books',
      Component: Books
    }
   ]
  }
])