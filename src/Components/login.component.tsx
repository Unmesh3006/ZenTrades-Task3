import React from "react";

const Login = () => {
     return (
    <>
      <div className="h-screen w-full bg-gray-900 flex items-center justify-center">
        <div className="h-4/5 w-3/5 bg-gray-950 flex flex-col items-center justify-center">
          <div className="w-full h-1/3 flex items-center justify-center">
            <img src="./logo.png" alt="" className="h-5/6 w-2/3" />
          </div>
          <div className="w-2/3 h-16 p-3">
            <input
              type="text"
              placeholder="Username"
              className="w-full h-full p-3 rounded-lg"
            />
          </div>
          <div className="w-2/3 h-16 p-3">
            <input
              type="text"
              placeholder="Password"
              className="w-full h-full p-3 rounded-lg"
            />
          </div>
          <div className="w-2/3 h-16 p-3">
            <button className="w-full h-full p-3 bg-green-500 flex items-center justify-center text-white rounded-lg">
              Login
            </button>
          </div>
          <div className="w-full h-16 flex items-center justify-center text-gray-400">
            <button className="underline">Forgot Your Password?</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;