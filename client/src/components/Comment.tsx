import { useState, useEffect } from "react";
import Axios from "axios";

const Comment = ({ id }: any) => {
  const [comment, setComment] = useState("");
  const [data, setData] = useState([]);

  const getData = () => {
    const options = {
      method: "GET",
      url: "http://localhost:3001/read",
      params: { number: +id },
    };

    Axios.request(options)
      .then((response) => {
        // console.log(response.data)
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  getData();

  const addComment = () => {
    Axios.post(`http://localhost:3001/insert`, {
      number: +id,
      comment: comment,
    });

    getData();

    setComment("");
  };

  const handleKeyPress = (e:any) =>{
    if(e.keyCode == 13){
      addComment();
    }
  }

  return (
    <div className="Comment">

      <label>Comment: </label>

      <input
        type="text"
        value={comment}
        onKeyDown={handleKeyPress}
        onChange={(e) => setComment(e.target.value)}
      />

      <button onClick={addComment}>Add</button>

      <h1>Comments</h1>

      {data.map((item: any, index: number) => {
        return <p key={index}>{item.comment}</p>;
      })}
      
    </div>
  );
};

export default Comment;

