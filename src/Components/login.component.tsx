import React, { useState } from "react";
import { isEmail, validatePassword } from "../Utils/support-functions.util";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleValidation = () => {
    if (!isEmail(username)) {
      toast.error("Invalid Email");
      return;
    }

    const passwordValidation = validatePassword(password);

    if (passwordValidation !== "true") {
      toast.error(passwordValidation);
      return;
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Filter out unwanted special characters except '@'
    const filteredValue = event.target.value.replace(/[^a-zA-Z0-9@]/g, "");
    setPassword(filteredValue);
  };

  return (
    <>
      <div className="h-screen w-full bg-zinc-900 flex items-center justify-center">
        <div className="h-4/5 w-3/5 bg-gray-950 flex flex-col items-center justify-center">
          <div className="w-full h-1/3 flex items-center justify-center">
            <img src="./logo.png" alt="" className="h-5/6 w-2/3" />
          </div>
          <div className="w-2/3 h-16 p-3">
            <input
              type="text"
              placeholder="Username"
              className="w-full h-full p-3 rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-2/3 h-16 p-3">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle between text and password type
                placeholder="Password"
                className="w-full h-full p-3 rounded-lg pr-12" // Add some padding for the button
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2 12a10 10 0 1120 0 10 10 0 01-20 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="w-2/3 h-16 p-3">
            <button
              className="w-full h-full p-3 bg-green-500 flex items-center justify-center text-white rounded-lg"
              onClick={handleValidation}
            >
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