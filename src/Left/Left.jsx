import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Left = () => {
  const [categories, setcategories] = useState([])
  useEffect(() => {
    fetch('../../public/data/categories.json')
      .then(res => res.json())
    .then(data=>setcategories(data))
  },[])
  return (
    <div>
      {/* category section */}
      <div>
        <h3 className="text-2xl font-bold my-3">ALL Category</h3>
        <div className="space-y-4">
          {categories.map(category => (
            <NavLink
              to={`/categories/${category.id}`}
              className="text-xl block ml-4"
              key={category.id}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
       
      {/* CARD SECTION */}
      <div>
        
    </div>

    </div>
  );
};

export default Left;