import "./App.css";
import React from "react";
import { useEffect } from "react";
import {Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./pages/Error"
import Settings from "./components/core/Dashboard/Settings";
import { useDispatch, useSelector } from "react-redux";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart";
import { ACCOUNT_TYPE } from "./utils/constants";
import AddCourse from "./components/core/Dashboard/AddCourse";
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import Instructor from "./components/core/Dashboard/InstructorDashboard/Instructor";
import { useState } from "react";
import Menu from "./components/common/Menu";
import env from "react-dotenv";
import TestCard from "./components/common/TestCard";
import ide from "./components/core/Dashboard/Editor";
import Editor from "./components/core/Dashboard/Editor";
import Mock from "./components/core/Dashboard/Mock";
import Help from "./components/core/Dashboard/Help";
import ComingSoon from "./components/common/ComingSoon";
import Interview from "./components/core/Dashboard/Interview";
import ChatAi from "./components/core/Dashboard/ChatAi";
//import Input from "./components/core/Dashboard/Resume-Builder/Components/Input";
//import Selecttheme from "./components/core/Dashboard/Resume-Builder/Components/Selecttheme";

function LegacyRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // Open legacy app in new tab
    window.open("/ide/", "_blank");

    // Go back to /editor in the current tab
    navigate("/dashboard/Editor");
  }, [navigate]);

  return null;
}

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.profile)
  const[open,setopen] = useState(false);

  const app3 = process.env.REACT_APP_BASE_URL;
  console.log("razorpay",process.env.REACT_APP_RAZORPAY_KEY)
  console.log("url",app3);
  // console.log("key",env.RAZORPAY_KEY);


  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar open={open} setopen={setopen}/>
    {
      open && <Menu open={open} setopen={setopen}/>
    }
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="catalog/:catalogName" element={<Catalog/>} />
      <Route path="courses/:courseId" element={<CourseDetails/>} />
      <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

    <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />  

      <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />  

    <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />  

    <Route
          path="/about"
          element={
              <About />
          }
        />
    <Route path="/contact" element={<Contact />} />

    <Route 
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    >
      <Route path="dashboard/my-profile" element={<MyProfile />} />
      <Route path="dashboard/Settings" element={<Settings />} />
      <Route path="dashboard/help" element={<Help />} />

      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="dashboard/cart" element={<Cart />} />
          <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
          <Route path="dashboard/Editor" element={<Editor />} />
          {/* <Route path="dashboard/Mocks" element={<Mock />} /> */}
          <Route path="dashboard/Practice" element={<ChatAi />} />
          <Route path="dashboard/Interview" element={<Interview/>} />
          <Route path="/Ide" element={<LegacyRedirect />}/>
          
          </>
        )
      }
      {
      user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
          <Route path="dashboard/add-course" element={<AddCourse />} />
          <Route path="dashboard/instructor" element={<Instructor />} />
          <Route path="dashboard/my-courses" element={<MyCourses />} />
          <Route path="dashboard/edit-course/:courseId" element={<EditCourse/>} />
          </>
        )
      }


    </Route>

    <Route element={
      <PrivateRoute>
         <ViewCourse/>
      </PrivateRoute>
    }>
      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
            <Route path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId" element={<VideoDetails/>}/>
          </>
        )
      }
    </Route>

    

    <Route path="*" element={<Error />} />


    </Routes>

   </div>
  );
}

export default App;
