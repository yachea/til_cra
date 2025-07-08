import React, { useState } from "react";
import CommentsList from "../components/comments/CommentsList";

function Comments() {
  // js 자리
  const [commentsData, setCommentsData] = useState([]);
  async function getComments() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const result = await res.json();
      setCommentsData(result);
    } catch (error) {
      console.log(error);
    }
  }

  function resetList() {
    setCommentsData([]);
  }
  // getComments();
  // jsx 자리
  return (
    <div>
      <h1>
        Comments 목록 <button onClick={getComments}>목록가져오기</button>
        <button onClick={resetList}>목록초기화</button>
      </h1>
      <div>
        {commentsData.map(function (item, index) {
          return (
            <CommentsList
              postid={item.postId}
              id={item.id}
              name={item.name}
              email={item.email}
              body={item.body}
              key={index}
            ></CommentsList>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
