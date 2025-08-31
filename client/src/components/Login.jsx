import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/v1/signin", {
        username,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);

        setToast({ message: "Login successful!", type: "success" });
        setTimeout(() => {
          setToast(null);
          navigate("/dashboard");
        }, 2000);
      }
    } catch (error) {
      setToast({
        message: error.response?.data?.message || "Login failed!",
        type: "error",
      });
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-primary w-[70%] h-3/4 p-6 flex items-center justify-between rounded-lg shadow-2xl">
        <div className="w-full h-full rounded-lg flex items-center justify-around">
          <h1>
            <span className="text-5xl text-base-900">it</span>
            <br />
            <span className="text-3xl text-accent">all </span>
            <span className="text-6xl text-black">starts</span>
            <br />
            <span className="text-9xl font-semibold">HERE!</span>
          </h1>
        </div>
        <div className="card card-lg w-[70%] h-[70%] bg-base-100 mr-16 rounded-xl shadow-xl">
          <div className="card-body flex flex-col gap-6">
            <h2 className="card-title text-2xl ">Login to your BRAIN!</h2>
            <fieldset className="fieldset ">
              <form onSubmit={handleLogin}>
                <legend className="fieldset-legend text-xl">Username</legend>
                <input
                  type="text"
                  className="input input-lg input-accent mt-2 w-full"
                  placeholder="e.g. John Doe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <legend className="fieldset-legend text-xl mt-6">
                  Password
                </legend>
                <input
                  type="password"
                  className="input input-accent input-lg mt-2 w-full"
                  placeholder="**********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="card-actions">
                  <button
                    type="submit"
                    className="btn btn-xl btn-primary hover:btn-accent w-full mt-10 text-2xl"
                  >
                    Login
                  </button>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>

      {toast && (
        <div className="toast toast-center  toast-end">
          <div
            className={`alert ${
              toast.type === "success" ? "alert-success" : "alert-error"
            }`}
          >
            <span className="text-2xl">{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
