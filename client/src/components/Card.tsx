import { Link } from "react-router-dom";

interface propsCard {
  id: number;
  name: string;
  image: string;
}

const Card = ({ id, name, image }: propsCard) => {
  // console.log(id);
  // console.log(name);
  // console.log(image);

  return (
    <div className="Card">
      <Link to={`/${id}`}>
        <img src={image} style={{ width: "100px" }} />
        <h1>{name}</h1>
      </Link>
    </div>
  );
};

export default Card;
