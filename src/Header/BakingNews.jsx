import Marquee from 'react-fast-marquee';

const BakingNews = () => {
  return (
    <div className='flex'>
      <button className="btn btn-secondary">Latest</button>
      <Marquee speed={200} pauseOnHover={true}>this the way to shine so you have to good at any thing what you are doing </Marquee>
    </div>
  );
};

export default BakingNews;
