import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Portfolio from "../pages/Portfolio/Portfolio";
import Resume from "../pages/Resume/Resume";
import Skill from "../pages/Service/Skill";
import Hero from "../pages/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/",
        element: <About></About>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/skill",
        element: <Skill></Skill>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/hero",
        element: <Hero />,
      },
    ],
  },
]);

export default router;
