import React from "react";

const PostCards = ({ post, deletePost }) => {
  
  const { title, body } = post;
  return (
    <div className="card m-3">
      <div className="card-body">
        <div className="d-flex justify-content-end">
          <button id="delete_btn" className="btn btn-danger" onClick={(e) => deletePost(post)}>X</button>
        </div>

        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

export default PostCards;
