import styled from "@emotion/styled";
import React from "react";

function CommentsList({ postid, id, name, email, body }) {
  // js 자리
  const CommentsCard = styled.div`
    position: relative;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    border: 1px solid #128dffb3;
    margin: 20px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
      color: #c05f1e;
    }
  `;
  const CommentsName = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const CommentsBody = styled.div`
    font-size: 18px;
  `;
  const CommentsEmail = styled.div`
    font-size: 13px;
    padding-top: 15px;
    color: #a3a3a3;
  `;
  const CommentsPostId = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    color: #c05f1e;
  `;
  // jsx 자리
  return (
    <CommentsCard>
      <CommentsName>
        {id}.{name}
      </CommentsName>
      <CommentsPostId>{postid}</CommentsPostId>
      <CommentsBody>{body}</CommentsBody>
      <CommentsEmail>Email:{email}</CommentsEmail>
    </CommentsCard>
  );
}

export default CommentsList;
