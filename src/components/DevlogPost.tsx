import React from "react";
import "../styles/DevlogPost.css"

type DevlogPostProps = {
  post_name: string;
  post_date: string;
  ContentComponent: React.FC;
}

const DevlogPost: React.FC<DevlogPostProps> = ({post_name, post_date, ContentComponent}) => {
  return (
    <div className="post_container">
      <div className="inner_post_container">
        <div className="header">
          <span className="post_name">{post_name}</span>
          <span className="post_date">{post_date}</span>
        </div>
        <div className="content">
          <ContentComponent/>
        </div>
      </div>
    </div>
  );
};

export default DevlogPost;