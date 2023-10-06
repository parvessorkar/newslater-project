import moment from 'moment/moment';
import logo from '../../public/assets/logo.png'
import BakingNews from './BakingNews';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='text-center my-6'>
     <div className='flex justify-center'> <img  src={logo} alt="" /></div>
      <p className="font-semibold">Journalism Without Fear or Favour</p>
      <p>{moment().format('LLLL')}</p>
      <BakingNews></BakingNews>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;