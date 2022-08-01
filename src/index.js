//import react
import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import './style/App.css'
//get root
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

//Const/ Variables
const randomName = faker.name.findName();
const ava = faker.image.avatar();

//function
function App() {
  return (
    <div className="ui container comments">
      
      <ApprovalCard>
        <div>
          <h3>Warning!</h3>
        </div>
        Are you sure you want to do this?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jordan"
          timeAgo="Today @ 6:45AM"
          content="love the detail in this post."
          avatar={ava}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Ashlee"
          timeAgo="Today @ 6:30AM"
          content="loving the super useful content this month"
          avatar={ava}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Brooke"
          timeAgo="Today @ 9:15AM"
          content="I've been following since 2019!"
          avatar={ava}
        />
      </ApprovalCard>
    
    </div>
  );
}

//render
root.render(<App />);
