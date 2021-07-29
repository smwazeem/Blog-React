import React from "react";
import axios from "axios";
import Form from "./components/form";
import Posts from "./components/posts";

class App extends React.Component {
  state = {
    id: "",
    title: "",
    body: "",
    data: [],
  };

  changeId = (e) => {
    let id = e.target.value;
    this.setState({ id });
  };

  changeTitle = (e) => {
    let title = e.target.value;
    this.setState({ title });
  };

  changeBody = (e) => {
    let body = e.target.value;
    this.setState({ body });
  };

  editPost = (postIndex, title, body) => {
    this.setState({
      id: postIndex + 1,
      title,
      body,
    });
  };

  addOrUpdatePost = (e) => {
    const { id, title, body, data } = this.state;
    e.preventDefault();

    if (data[id - 1] !== undefined) {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`, {
          id: id,
          title: title,
          body: body,
        })
        .then((res) => {
          let updatedData = [...data];
          updatedData[id - 1] = res.data;
          this.setState({
            id: updatedData.length + 1,
            title: "",
            body: "",
            data: updatedData,
          });
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          id: id + 1,
          title: title,
          body: body,
        })
        .then((res) => {
          let newPost = res.data;
          let newData = [...data, newPost];
          this.setState({
            id: id + 1,
            title: "",
            body: "",
            data: newData,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  deletePost = (postIndex) => {
    const { data } = this.state;
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postIndex}`)
      .then((res) => {
        let newData = [...data];
        newData.splice(postIndex, 1);
        this.setState({
          id: newData.length + 1,
          title: "",
          body: "",
          data: newData,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        let newData = res.data;
        this.setState({
          id: newData[newData.length - 1].id + 1,
          data: newData,
        });
      })
      .catch((err) => console.log("Couldn't fetch data. Error: " + err));
  }

  render() {
    const { id, body, title, data } = this.state;
    return (
      <div style={{ backgroundColor: "lightgrey" }} className="container col-6">
        <h1 className="text-center py-3">Blog App</h1>
        <h5 className="text-center m-3">Share your knowledge</h5>

        <Form
          id={id}
          body={body}
          title={title}
          changeId={this.changeId}
          changeBody={this.changeBody}
          changeTitle={this.changeTitle}
          addOrUpdatePost={this.addOrUpdatePost}
        />
        <Posts
          data={data}
          deletePost={this.deletePost}
          editPost={this.editPost}
        />
      </div>
    );
  }
}

export default App;
