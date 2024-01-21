import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import App from './App.jsx'
import Login from './pages/Login.jsx'
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path:'/login',
        element: <Login/>
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)