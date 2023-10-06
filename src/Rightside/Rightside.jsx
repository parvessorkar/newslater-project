import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import qzone1 from '../../public/assets/qZone1.png'
import qzone2 from '../../public/assets/qZone2.png'
import qzone3 from '../../public/assets/qZone3.png'

const Rightside = () => {
  return (
    <div>
      <div className="space-y-3 mb-9">
        <h1 className="text-2xl font-bold">Login With</h1>
        <button className="flex justify-center items-center py-2 px-10 rounded-lg border btn-outline">
          <FaGoogle></FaGoogle>
          <span>Login with Google</span>
        </button>
        <button className="flex justify-center items-center py-2 px-11 rounded-lg border btn-outline">
          <FaGithub></FaGithub>Login with Github
        </button>
      </div>

      {/* find section */}

      <div>
        <h1 className="text-2xl font-bold">Find us On</h1>
        <div className="rounded-lg my-5">
          <a
            className="flex gap-3 border py-3 px-10 items-center rounded-t-lg"
            href=""
          >
            <FaFacebook></FaFacebook>
            <span>Facebook</span>
          </a>
          <a className="flex gap-3 border-x py-3 px-10 items-center" href="">
            <FaTwitter></FaTwitter>
            <span>twitter</span>
          </a>
          <a
            className="flex gap-3 border py-3 px-10 items-center rounded-b-lg"
            href=""
          >
            <FaInstagram></FaInstagram>
            <span>instagram</span>
          </a>
        </div>
      </div>

      {/* Q-Zone */}
      <div>
        <h1 className='text-xl font-bold my-4'>Q-Zone</h1>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div> 
      
    </div>
  );
};

export default Rightside;
