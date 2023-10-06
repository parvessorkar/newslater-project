import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { useContext } from "react";
import { authContext } from "./Provider/Provider";



const Register = () => {
  const {creatUser} = useContext(authContext);
  const handelRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const photo = form.get('photo');
   
    creatUser(email, password)
      .then(result => console.log(result.user))
      .catch(error => console.error(error))
    console.log(name, photo, email, password);
    
   }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="w-1/3 mx-auto">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="photo"
                placeholder="photo URL"
                className="input input-bordered"
                name="photo"
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <h1>
            You have already a accout please
            <Link to={'/login'}>
              <button className="btn btn-link">Login</button>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;