import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { useContext } from "react";
import { authContext } from "./Provider/Provider";

const Login = () => {
 const {signIn}=useContext(authContext)
  const handelLogin = (e) => {
    e.preventDefault()
     const form = new FormData(e.currentTarget);
     
     const email = form.get('email');
     const password = form.get('password');
  
    console.log(email, password);
    signIn(email, password)
      .then(result => console.log(result.user))
    .catch(error=>console.error(error))
  }

  return (
    <div>
      <Navbar></Navbar>

      <div className="hero min-h-screen bg-base-200">
        <div className="w-1/3 mx-auto">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <h1>please <Link to={'/register'}><button className="btn btn-link">Register</button></Link></h1>
        </div>
      </div>
    </div>
  );
};

export default Login;