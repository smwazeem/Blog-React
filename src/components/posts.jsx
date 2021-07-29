import React from "react";

const Posts = ({ data, deletePost, editPost }) => {
  return (
    <div>
      {data.length === 0 ? (
        <p>Loading Posts...</p>
      ) : (
        data.map((post, index) => (
          <article key={index} class="border border-info rounded my-3 p-3">
            <h2>
              {index + 1}. {post.title}
            </h2>
            <p>{post.body}</p>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-danger btn-sm mx-1"
                onClick={() => deletePost(index)}
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-success btn-sm "
                onClick={() => editPost(index, post.title, post.body)}
              >
                Edit
              </button>
            </div>
          </article>
        ))
      )}
    </div>
  );
};

export default Posts;
