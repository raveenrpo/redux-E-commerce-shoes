import React from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Signin = () => {
  const navigate = useNavigate();
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");
  const handlesignin = async (e) => {
    e.preventDefault();
    try {
      const valid = await fetch("http://localhost:4000/users");
      const users = await valid.json();
      const user = users.find(
        (user) => user.email === mail && user.password === pass
      );
      if (mail == "admin@123" && pass == 12345) {
        navigate("/adminhome");
        alert("Admin logind successfully");
        return;
      }
      if (user.blockStatus == true) {
        alert(
          "You cannot login with this account.There is an error in this account,use another one"
        );
        navigate("/login");
        return;
      }
      // console.log(user);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      } else {
        alert("Faild to login.Enter valid details or please register");
        navigate("/login");
      }
    } catch (error) {
      alert("faild to login.Please try again");
    }
  };
  return (
    <div>
      <div>
        <form className="flex flex-col items-center sm:max-w-96 m-auto mt-14 gap-4 text-gray-600">
          <div className="inline-flex items-center gap-2 mb-2 mt-10">
            <p className="text-3xl">Login</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
          </div>
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
          <p>Dont have an account</p>
          <Link to={"/login"}>
            <p>Register</p>
          </Link>
          <button
            className="bg-black text-white py-1 px-2"
            type="submit"
            onClick={handlesignin}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
