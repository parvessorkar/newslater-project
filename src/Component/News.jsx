import {FaBookmark, FaEye, FaShare,} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const News = ({ news }) => {
  const { title, thumbnail_url, details, rating,author,_id } = news;
  return (
    <div className="space-y-10">
      <div className="">
        <div className="car-header flex justify-between">
          <div className="profile flex justify-center items-center gap-3">
            <img
              className="w-[40px] h-[40px] rounded-full "
              src={author.img}
              alt="Profile"
            />
            <div className="profile-info">
              <h3>John Doe</h3>
              <p>Data</p>
            </div>
          </div>

          <div className="icons flex gap-3">
            <i className="fas fa-bookmark">
              <FaBookmark></FaBookmark>
            </i>
            <i className="fas fa-share">
              <FaShare></FaShare>
            </i>
          </div>
        </div>

        <div className="car-content">
          <h1>{title}</h1>
          <img className="w-full" src={thumbnail_url} alt="Car" />
       
            {details.length > 50 ? (
              <p>
                {details.slice(0, 50)} <button className='btn btn-link'><Link to={'/newsdetail'}>Read more</Link></button>
              </p>
            ) : (
              <p>{details}</p>
            )}
         
        </div>

        <div className="flex justify-between">
          <div className="rating">
            <span>Rating</span>
          </div>
          <div className="views">
            <span>
              <FaEye></FaEye>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
