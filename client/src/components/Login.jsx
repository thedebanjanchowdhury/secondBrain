import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      const response = axios.post("http://localhost:3000/api/v1/signin", {
        username,
        password,
      });
      console.log(response);
    } catch (error) {
      alert(error.response.data.message);
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
          <div className="card-body flex flex-col gap-8">
            <h2 className="card-title text-2xl ">Login to your BRAIN!</h2>
            <fieldset className="fieldset mt-5">
              <form onSubmit={handleLogin} >
                <legend className="fieldset-legend text-xl">Username</legend>
                <input
                  type="text"
                  className="input input-accent mt-2"
                  placeholder="e.g. John Doe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <legend className="fieldset-legend text-xl mt-6">Password</legend>
                <input
                  type="password"
                  className="input input-accent"
                  placeholder="**********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>
            </fieldset>
            <div className="card-actions">
              <button className="btn btn-primary hover:btn-accent w-full mt-4 text-xl">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
