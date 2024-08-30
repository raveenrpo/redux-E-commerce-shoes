import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [mail, setmail] = useState("");
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const validate = async (e) => {
    e.preventDefault();

    const isvalid =
      mail.includes("@") && pass.length > 4 && pass === confirmpassword;
    if (!isvalid) {
      alert("Enter valid email or password");
      return;
    }
    try {
      const response = await fetch(`http://localhost:4000/users?email=${mail}`);
      const users = await response.json();
      if (users.length > 1) {
        alert("User already exists");
        navigate("/signin");
        return;
      }

      const newuser = { name: name, email: mail, password: pass, cart: [] };
      await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newuser),
      });

      alert("Registration successfull");
      navigate("/signin");
    } catch (error) {
      console.error("Error:", error);
      alert("Faild to register.Please try again");
    }
  };
  return (
    <div>
      <form className="flex flex-col items-center sm:max-w-96 m-auto mt-14 gap-4 text-gray-600">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="text-3xl">REGISTER</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Enter your name"
          required
        ></input>
        <input
          type="email"
          id="email"
          value={mail}
          onChange={(e) => setmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Enter your email"
          required
        ></input>
        <input
          type="Password"
          id="password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Enter your password"
          required
        ></input>
        <input
          type="Password"
          id="cofirmpassword"
          value={confirmpassword}
          onChange={(e) => setconfirmpassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Conform password"
          required
        ></input>
        <button
          className="bg-black text-white py-1 px-2"
          type="submit"
          onClick={validate}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
