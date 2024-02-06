import { RouterProvider, createBrowserRouter } from "react-router-dom"
import User from "./Layout/User"
import Home from "./Pages/Home"
import DoctorProfile from "./Pages/DoctorProfile"
import About from "./Pages/About"
import Cabins from "./Pages/Cabins"
import PremiumCabin from "./Pages/PremiumCabin"
import StandardCabin from "./Pages/StandardCabin"
import ICU from "./Pages/ICU"
import OperationCabin from "./Pages/OperationCabin"
import Register from "./components/Register"
import Login from "./components/Login"
import Appointment from "./components/Appointment"
import Root from "./Layout/Root"
import Dashboard from "./Layout/Dashboard"
import AddDoctor from "./Pages/AddDoctor"
import Department from "./components/Department"
import Certification from "./components/Certification"
import Position from "./components/Position"
import DoctorPage from "./Pages/DoctorPage"
import UploadReport from "./components/UploadReport"
import ErrorPage from "./Pages/ErrorPage"
import DashBoardHome from "./components/DashBoardHome"
import DashBoardAppointment from "./components/DashBoardAppointment"
import CabinForm from "./components/CabinForm"
import ShowReport from "./components/ShowReport"
import CabinAppointment from "./components/CabinAppointment"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <User />,
          children: [
            {
              path: "/",
              element: <Home />
            },
            {
              path: "/doctors",
              element: <DoctorPage />
            },
            {
              path: "/doctors/:_id",
              element: <DoctorProfile />
            },
            {
              path:"/appointment",
              element: <Appointment/>
            },
            {
              path:"/appointment/:_id",
              element: <Appointment/>
            },
            {
              path: "about",
              element: <About />
            },
            {
              path:"upload-report",
              element:<UploadReport/>
            },
            {
              path:"show-report",
              element:<ShowReport/>
            },
            {
              path: "cabins",
              element: <Cabins />,
              children: [
                {
                  path: "",
                  element: <PremiumCabin />
                },
                {
                  path: "standard",
                  element: <StandardCabin />
                },
                {
                  path: "icu",
                  element: <ICU />
                },
                {
                  path: "ot",
                  element: <OperationCabin />
                },
              ]
            },
            {
              path:"cabin/appointment/:_id",
              element:<CabinAppointment/>
            },
            {
              path: "/register",
              element: <Register />
            },
            {
              path: "/login",
              element: <Login />
            }
          ]
        },
        {
          path:"/dashboard",
          element:<Dashboard/>,
          children:[
            {
              path:"",
              element: <DashBoardHome/>
            },
            {
              path:"add-doctor",
              element:<AddDoctor/>
            },
            {
              path:"add-department",
              element:<Department/>
            },
            {
              path:"add-certification",
              element:<Certification/>
            },
            {
              path:"add-position",
              element:<Position/>
            },
            {
              path:"appointment",
              element:<DashBoardAppointment/>
            },
            {
              path:"appointment/pending",
            },
            {
              path:"appointment/approved",
            },
            {
              path:"cabin",
              element:<CabinForm/>
            }
          ]
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
