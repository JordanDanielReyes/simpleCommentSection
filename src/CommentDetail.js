import React from "react";
import { faker } from "@faker-js/faker";

// const randomName = faker.name.findName();
const ava = faker.image.avatar();
// const date = faker.date.recent();

function CommentDetail(props) {
  //console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
}

export default CommentDetail;

//faker.seed(234567);
//after the imports(change num to anything). it will not randomize the content, but leave it static.
