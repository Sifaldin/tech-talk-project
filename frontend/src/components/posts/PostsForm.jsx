import React, { useState } from "react";

export default function PostForm({ onCreateClick }) {
  const [body, setBody] = useState("");

  return (
    <section className="quick-post">
      <h5>Share your thoughts?</h5>
      <div>
        <textarea
          className="form-control"
          placeholder="What's on your mind?"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button
          className="btn btn-info"
          onClick={() => {
            onCreateClick({ body });
            setBody("");
          }}
        >
          <i className="fas fa-share-alt"></i> POST
        </button>
      </div>
    </section>
  );
}
