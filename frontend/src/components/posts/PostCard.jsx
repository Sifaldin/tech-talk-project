import React, { useState } from "react";
import PostUpdateForm from "./PostUpdateForm";
import Comments from "../comments/Comments";
import Api from "../../api/Api";

export default function PostCard({ post, onDeleteClick, onUpdateClick, user }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [body, setBody] = useState("");
  const [reaction, setReaction] = useState(post.reaction);

  const handleUpdateClick = () => {
    setIsUpdating(true);
  };

  const incrementLike = () => {
    const url = "/reactions/" + reaction.id + "?incrementTarget=like";
    Api.put(url, reaction).then((r) => {
      setReaction(r.data);
    });
  };

  const incrementDislike = () => {
    const url = "/reactions/" + reaction.id + "?incrementTarget=dislike";
    Api.put(url, reaction).then((r) => {
      setReaction(r.data);
    });
  };

  return isUpdating ? (
    <PostUpdateForm
      oldPost={post}
      onUpdateClick={(updatedPost) => {
        setIsUpdating(false);
        onUpdateClick(updatedPost);
      }}
    />
  ) : (
      <article className="one-post">
        {/* 1-1 Post part */}
        <section className="post">
          <h4>
            <i className="fas fa-newspaper"></i>{" "}
            {post.body.length > 55
              ? post.body.substring(0, 55) + "..."
              : post.body}
          </h4>
          <div className="poster">
            <i className="fas fa-user-alt"></i> {post.user.name}(
          <i className="fas fa-envelope"></i> {post.user.email})
        </div>
          <div className="post-text">
            <p>{post.body}</p>
          </div>
          <div className="post-menu">
            <div className="reaction">
              <button onClick={incrementLike}>
                <i className="fas fa-thumbs-up"></i> {reaction.numLike}
              </button>
              <button onClick={incrementDislike}>
                <i className="fas fa-thumbs-down"></i> {reaction.numDislike}
              </button>
            </div>

            {post.user.id === user.id ? (
              <div className="post-option">
                <button onClick={() => onDeleteClick(post)}>
                  <i className="fas fa-trash-alt"></i> Delete
              </button>

                <button onClick={handleUpdateClick}>
                  <i className="fas fa-edit"></i> Edit
              </button>
              </div>
            ) : null}
          </div>
        </section>

        <Comments post={post} />
      </article>
    );
}
