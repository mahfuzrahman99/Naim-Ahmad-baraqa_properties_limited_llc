/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import loginImg from "@/assets/login.jpg";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userCredentials = {
      email: email,
      password: password,
    };
    try {
      const data = await signInUser(userCredentials);
      console.log(data);
      setIsLoading(false);
      if (data && data._id) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate.push("/");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to login!",
      });
    }
  };

  return (
    <div
      className="bg-black bg-opacity-60 h-[100vh] flex items-center "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${loginImg.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" flex flex-col bg-[#a9a3cf] bg-opacity-30 p-4 rounded-xl  md:w-[450px] mx-auto">
        <h1 className="text-2xl font-bold text-center py-4 text-white">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
          <div className="flex flex-col mt-2 col-span-2">
            <label htmlFor="email" className="text-white">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="p-2 rounded-md bg-white text-black"
              placeholder="Input your valid email here"
            />
          </div>
          <div className="flex flex-col mt-2 col-span-2">
            <label htmlFor="password" className="text-white">
              Password:
            </label>
            <input
              type="text"
              name="password"
              className="p-2 rounded-md bg-white text-black"
              placeholder="Input your password here"
            />
          </div>
          <div className="flex justify-center w-2/4 mx-auto mt-2 col-span-2">
            <button
              disabled={isLoading}
              type="submit"
              className="btn btn-ghost bg-white p-2 rounded-md w-full text-xl font-bold uppercase text-[#a9a3cf] hover:text-white  flex gap-2 items-center disabled:text-white"
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-md text-white"></span>
              ) : null}
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
