import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './Components/Layout/LayOut';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import User from './Components/User/User'
import Home from './Components/Home/Home'
import Error from './Components/Error404/Error'
import Messages from './Components/Messages/Messages'
import { useContext } from 'react';
import { TokenContext } from './Context/token';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const routes = createBrowserRouter([{
  path: "", element: <LayOut />, children: [
    { index: true, element: <Login /> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "user", element: <ProtectedRoute> <User /> </ProtectedRoute> },
    { path: "home", element: <Home /> },
    { path: "*", element: <Error /> }
  ]
},
{ path: "messages/:userID", element: <Messages /> }
])

function App() {
  let { setToken } = useContext(TokenContext)

  if (localStorage.getItem("userToken")) {
    setToken(localStorage.getItem("userToken"))
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
