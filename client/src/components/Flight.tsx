import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Comment from "./Comment";

const Flight = () => {
  const { id } = useParams();
  // console.log(id);
  
  const [data] = useFetch(`https://api.spacexdata.com/v3/launches/${id}`);

  // console.log(data.length);
  // console.log(data.mission_name);
  // console.log(mission_name);
  // console.log(typeof data);

  return (
    <>
      {data && (
        <div className="Flight">
          <div className="Main">
            <h1>{data.mission_name}</h1>

            <img src={data?.links?.mission_patch_small} alt="photo" />
            <p>{data.details}</p>
            <p>Launch Date Unit: {data.launch_date_unix}</p>
            <p>
              Link:{" "}
              <a href={data?.links?.article_link}>
                {data?.links?.article_link}
              </a>
            </p>
          </div>
          <Comment id={id} />
        </div>
      )}
    </>
  );
};

export default Flight;
