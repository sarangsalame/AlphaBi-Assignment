import './styles/App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/Home"

export default function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
  ])

  return (<RouterProvider router={router} />);
}
