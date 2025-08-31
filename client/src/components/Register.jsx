import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/v1/signup", {
        username,
        password,
      });

      console.log("Response:", response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error(error);
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-accent-content w-[70%] h-3/4 p-6 flex items-center justify-between rounded-lg shadow-2xl">
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
          <div className="card-body">
            <h2 className="card-title text-2xl">SignUp to your new BRAIN!</h2>
            <form onSubmit={handleRegister} className="mt-6">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl">Username</legend>
                <input
                  type="text"
                  className="input input-lg input-base-100 text-xl"
                  placeholder="e.g. John Doe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <legend className="fieldset-legend text-xl mt-4">
                  Password
                </legend>
                <input
                  type="password"
                  className="input input-lg input-base-100 text-xl"
                  placeholder="**********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </fieldset>
              <div className="card-actions">
                <button
                  type="submit"
                  className="btn btn-accent hover:btn-primary w-full mt-12 text-2xl"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
