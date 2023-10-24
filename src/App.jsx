import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './Components/Layout/LayOut';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import User from './Components/User/User'
import Home from './Components/Home/Home'
import Error from './Components/Error404/Error'
const routes = createBrowserRouter([{
  path: "", element: <LayOut />, children: [
    { index : true, element: <Login /> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "user", element: <User /> },
    { path: "home", element: <Home /> },
    { path: "*", element: <Error /> }
  ]
}])

function App() {
  return (
    <>
       <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
