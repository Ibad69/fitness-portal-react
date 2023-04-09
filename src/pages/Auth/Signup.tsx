import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../api";
import { toast } from "react-toastify";
import CardImage from "../../assets/images/cardImage.jpg";
type Props = {};

const Signup = (props: Props) => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    toast.configure();

    const handleSubmit = (e: any) => {
        setError('')
        e.preventDefault()
        instance.post('user/signUp', {
            name: name,
            email: email,
            password: password
        })
        .then(res => {
            if (res.data.success === true)
            {
                navigate('/login')
            }
        })
        .catch(err => {
            if (err.response.data.data.errorResult)
            {
                setError(err.response.data.data.errorResult)
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
              <p className="text-gray-100 text-4xl tracking-widest">Register</p>
              <p>
                Already have an account, click here to{" "}
                <Link to="/login">Login</Link>
              </p>
              <form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                <div className="text-gray-700">
                  <div className="pb-2 pt-4">
                    <input
                      type="text"
                      required
                      name="text"
                      id="text"
                      placeholder="Name"
                      className="block w-full p-4 text-lg rounded-xl "
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
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
                </div>
                {error && (
                    <p className="px-2 py-4 bg-red-500 rounded-xl mt-4">{error}</p>
                )}
                <div className="px-4 pb-2 pt-4">
                  <button
                    disabled={isFetching}
                    className="uppercase block w-full p-4 text-lg rounded-full bg-green-500 hover:bg-green-600 focus:outline-none"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    {isFetching ? "Loading" : "Signup"}
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

export default Signup;
