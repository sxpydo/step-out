import React from "react";
import ChatBot from "./features/chatterbot/Chatbot";
import DashNav from "./navs/DashNav";
import homeImg from "../images/home-image.png";

const Dashboard = (props) => {
  console.log(props);

  return (
    <>
      <h1>{`Welcome ${props.user.first_name}!`}</h1>
      <div className="flexible-layout">
        <div className="image-layout">
          <p>“At work at play, let safety lead the way”</p>
          <img src={homeImg} alt="Illustration by Blush" className="home-img" />
        </div>
        <div className="chatbot">
          <ChatBot />
          <p>
            Your safety net when guardians are busy or needing guidance in using
            the Step Out app!
          </p>
        </div>
      </div>
      <DashNav />
    </>
  );
};

export default Dashboard;
