

import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Layout from './component/Layout/Layout';
import Contact from './component/contact/Contact';
import Artist from './component/artist/Artist';
import About from './component/About/About';
import Gallary from './component/Gallary/Gallary';
import Notfound from './component/Notfound/Notfound';






const routes = createBrowserRouter([{
  path:"",element:<Layout/>,children:[{
    path:"Contact",element:<Contact/>
  },
{path:"Artist",element:<Artist/>},
{path:"About",element:<About/>},
{path:"Gallary",element:<Gallary/>},
{path:"*",element:<Notfound/>},{
  index:true,element:<Home/>
}]
}])


function App() {
  return (
<RouterProvider router={routes}>

</RouterProvider>







  
  );
}

export default App;
