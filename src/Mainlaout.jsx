import { Outlet } from "react-router-dom";


const Mainlaout = () => {
  return (
    <div className="w-5/6 mx-auto">      
      <Outlet></Outlet>
    </div>
  );
};

export default Mainlaout;