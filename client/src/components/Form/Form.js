import React from "react";
import { format } from "morgan";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form
        id="mesSender"
        style={{ display: this.props.showForm ? "block" : "none" }}
        onSubmit={this.addComment}
      >
        <textarea id="newMessage"></textarea>
        <br />
        <button type="submit">Post to Twitter</button>
      </form>
    );
  }
  addComment = (event) => {
    event.preventDefault();
    let newTweetComment = {
      comment: document.getElementById("newMessage").value,
    };
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/comment/", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
      if (xhr.readyState != 4 || xhr.status != 200) return;
      console.log(xhr.responseText);
    };
    xhr.send(JSON.stringify(newTweetComment));
    document.getElementById("newMessage").value = "";
    alert("Tweet Posted");
  };
}

export default Form;
