import useFetch from "../hooks/useFetch";
import Card from "./Card";


const Home = () => {
  const [data] = useFetch("https://api.spacexdata.com/v3/launches");

  //console.log(data);
  return (
    <div className="Home">
      {data.length !== 0 ? (
        data.map((item: any, index: number) => {
          return (
            <Card
              key={index}
              id={item.flight_number}
              name={item.mission_name}
              image={item.links.mission_patch_small}
            />
          );
        })
      ) : (
        <img
          className="spinner"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
        />
      )}
    </div>
  );
};

export default Home;
