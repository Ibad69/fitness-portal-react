import React, { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../../api";
import axios from "axios";

import CardImage from "../../assets/images/cardImage.jpg";
type Props = {};

const Login = (props: Props) => {
  const [isFetching, setIsFetching] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false);
  // const handleLoginButton = (
  //   e: React.ChangeEventHandler<HTMLInputElement> | undefined
  // ) => {
  //   console.log(e);
  // };

  const handleSubmit = (e: any) => {
    setError(false)
    e.preventDefault()
    instance.post('user/signIn', {
        email,
        password
    })
    .then(res => {
        if (res.data.success === true)
        {
            localStorage.setItem('token', res.data.data.successResult)
            localStorage.setItem('isLoggedIn', 'true')
            window.location.reload()
        }
    })
    .catch(err => {
        if (err.response.data.success === false)
        {
            setError(true)
        }
    })
  }
  
  return (
    <div>
      <div>
        <section className="min-h-screen flex items-stretch text-white ">
          <div
            className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
            style={{ backgroundImage: `url(${CardImage})` }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0" />
          </div>
          <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-custom-theme">
            <div
              className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
              style={{ backgroundImage: `url(${CardImage})` }}
            >
              <div className="absolute bg-black opacity-60 inset-0 z-0" />
            </div>
            <div className="w-full py-6 z-20">
              <p className="text-gray-100 text-4xl tracking-widest">LOGIN</p>
              <p>
                Don't have an account, click here to{" "}
                <Link to="/register">Register</Link>
              </p>
              <form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                <div className="text-gray-700">
                  <div className="pb-2 pt-4">
                    <input
                      type="email"
                      required
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="block w-full p-4 text-lg rounded-xl "
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="pb-2 pt-4">
                    <input
                      className="block w-full p-4 text-lg rounded-xl "
                      type="password"
                      required
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && (
                        <p className="px-2 text-white py-4 bg-red-500 rounded-xl mt-4">
                        Email or Password is Incorrect!
                        </p>
                    )}
                </div>

                <div className="px-4 pb-2 pt-4">
                  <button
                    disabled={isFetching}
                    className="uppercase block w-full p-4 text-lg rounded-full bg-green-500 hover:bg-green-600 focus:outline-none"
                    onClick={(e) => handleSubmit(e)}
                  >
                    {isFetching ? "Loading" : "Sign In"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
