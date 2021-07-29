import React from "react";

const Form = ({
  id,
  body,
  title,
  changeId,
  changeBody,
  changeTitle,
  addOrUpdatePost,
}) => {
  return (
    <form>
      <div className="col">
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Id :
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              onChange={changeId}
              className="form-control"
              value={id}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Title :
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={changeTitle}
              className="form-control"
              value={title}
              placeholder="Type your title"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Body :
          </label>
          <div className="col-sm-10">
            <textarea
              onChange={changeBody}
              className="form-control"
              value={body}
              placeholder="Type your message"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col d-flex justify-content-end ">
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-block"
              onClick={addOrUpdatePost}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
