import Lesson from './Components/Lesson/Lesson'
import React from 'react'
import ReactDOM from 'react-dom';
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Display from './Components/Display/Display';
import Introducion from './Components/Week1Component/Introduction/Introducion';
import Features from './Components/Week1Component/Features/Features';
import Usage from './Components/Week1Component/Usage/Usage';
import Interaction from './Components/Week1Component/Interaction/Interaction';
import Preparation from './Components/Week1Component/Preparation/Preparation';
import Week1quiz from './Components/Week1Component/Week1quiz/Week1quiz';
const Applayout = ()=>{
  return(
    <>
      <Lesson/>
    </>
  )
}


const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>
  },
  {
    path:"/introduction",
    element:<Introducion/>
  },
  {
    path:"/features",
    element:<Features/>
  },
  {
    path:"/usage",
    element:<Usage/>
  },
  {
    path:"/interaction",
    element:<Interaction/>
  },
  {
    path:"/preparation",
    element:<Preparation/>
  },
  {
    path:"/week-1-quiz",
    element:<Week1quiz/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter}/>)