import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About/About";
import Resume from "../pages/Resume/Resume";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <div>error</div>,
      children: [
        {
            path: '/',
            element: <About></About>
        },
        {
            path: '/resume',
            element: <Resume></Resume>
        }
      ]
    },
    
  ]);



export default router;