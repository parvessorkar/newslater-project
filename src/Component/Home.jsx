import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Left from "../Left/Left";
import Rightside from "../Rightside/Rightside";
import News from "./News";


const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="border">
          <Left></Left>
        </div>
        <div className="border col-span-2">
          <h1>dragon news home</h1>
          {
            news.map(anews=><News key={anews.id} news={anews}></News>)
          }
        </div>
        <div className="border">
          <Rightside></Rightside>
        </div>
      </div>
    </div>
  );
};

export default Home;