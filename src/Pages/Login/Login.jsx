import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import gif from '../../../src/assets/images/logsin.jpg'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';

const Login = () => {
  
    const { signIn, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    const [showPassword, setShowPassword] = useState(false);
  
    const from = location.state?.from?.pathname || "/";
  
  
    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      signIn(email, password).then((result) => {
        const user = result.user;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logging successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      });
    };
    const handeleGoogleSignIn = () => {
      googleSignIn().then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          photo: result.user?.photoURL,
          role: "Guest",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        });
      });
    };
    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };
  
    return (
      <div
        className="bg-transparent"
      
      >
        <div className="md:flex flex-1 ">
          <div className="md:py-12 md:ml-52 mt-10" data-aos="fade-right">
            <div
             
            >
              <div className="">
                <form
                  onSubmit={handleLogin}
                  className="card-body bg-transparent relative z-10"
                >
                  <h3 className="text-3xl font-bold">Login</h3>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered bg-transparent border-2 border-blue-900"
                      required
                    />
                  </div>
  
                  <div className="form-control relative">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered bg-transparent border-2 border-blue-900 pr-10" // Extra padding on the right
                      required
                    />
                    <div
                      className="absolute inset-y-16 right-0 pr-3 flex items-center cursor-pointer text-blue-900"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FaRegEyeSlash className="text-xl text-white" />
                      ) : (
                        <FaRegEye className="text-xl text-white" />
                      )}
                    </div>
                  </div>
  
                  <button type="submit" className=" mt-5 ">
                    <span className="text-white btn w-full bg-green-600 hover:bg-black font-bold">Login </span>
                   
                  </button>
                </form>
                <div className="flex animate-pulse m-auto gap-2 justify-center">
                  <button
                    onClick={handeleGoogleSignIn}
                    className="btn rounded-full btn-circle text-3xl bg-black text-blue-600 hover:bg-white hover:pl-4 flex p-2 hover:flex-1 items-center justify-center group transition-all duration-300"
                  >
                    <BsGoogle />
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl ">
                      Google
                    </span>
                  </button>
                 
                </div>
  
                <p className="text-center mt-0 text-black py-8 ">
                  <small> Don't have an account?</small>{" "}
                  <Link to="/signUp">
                    <span className="text-blue-600  font-bold">Sign Up</span>
                  </Link>
                </p>
  
                <span className="absolute top-0 left-0 w-[15px] h-[2px] bg-white"></span>
                <span className="absolute top-0 left-0 w-[2px] h-[15px] bg-white"></span>
                <span className="absolute top-0 right-0 w-[15px] h-[2px] bg-white"></span>
                <span className="absolute top-0 right-0 w-[2px] h-[15px] bg-white"></span>
                <span className="absolute bottom-0 right-0 w-[15px] h-[2px] bg-blue-600"></span>
                <span className="absolute bottom-0 right-0 w-[2px] h-[15px] bg-blue-600"></span>
                <span className="absolute bottom-0 left-0 w-[15px] h-[2px] bg-blue-600"></span>
                <span className="absolute bottom-0 left-0 w-[2px] h-[15px] bg-blue-600"></span>
              </div>
            </div>
          </div>
  
          <div className="m-auto">
            <img className="h-[500px]    md:mr-40" src={gif} alt="" />
          </div>
        </div>
      </div>
    );
  };

export default Login;