import { useState, useEffect } from "react";
import Axios from "axios";
import useFetch from "../hooks/useFetch";

const Comment = () => {
  const [comment, setComment] = useState("");

  const [data] = useFetch("http://localhost:3001/read");

  // console.log(data);

  const addComment = () => {
    // console.log(comment);

    Axios.post(`http://localhost:3001/insert`, {
      comment: comment,
    });
    
    setComment("");
    
  };

  return (
    <div className="Comment">
      
      <label>Comment: </label>
      <input
        type="text"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
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
