import { useDispatch, useSelector } from "react-redux"
import IconBtn from "./IconBtn"
import { Link, useNavigate } from "react-router-dom"
import { IoMdClose } from "react-icons/io";
import { logout } from "../../services/operations/authAPI";

export default function Menu({ open,setopen }) {
    const {token} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6 flex flex-col items-center space-y-4">
      <IoMdClose color="white" fontSize={24} onClick={() => setopen(!open)} />
        <Link to={"/about"} className="text-2xl font-semibold text-richblack-5" onClick={() => setopen(!open)}>
          About
        </Link>
        <Link to={"/contact"} className="text-2xl font-semibold text-richblack-5" onClick={() => setopen(!open)}>
          Contact
        </Link>
        <Link to={token ? "/dahboard/my-profile" : "/login"} className="text-2xl font-semibold text-richblack-5" onClick={() => setopen(!open)}>
          {
            token ? "DashBoard" : "Login"
          }
        </Link>
        <div>
            {
                !token ?  (<Link to={"/signup"} className="text-2xl font-semibold text-richblack-5">
            Signup
        </Link>) : (<p  className="text-2xl font-semibold text-richblack-5"  onClick={() => {
              dispatch(logout(navigate))
              setopen(!open)
            }}>
            Logout
        </p>) 
            }
        </div>
        </div>
      </div>
  )
}