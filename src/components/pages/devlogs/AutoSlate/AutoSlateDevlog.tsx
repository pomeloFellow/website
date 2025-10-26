import React from "react";
import Topbar from "../../../TopBar";
import DevlogPost from "../../../DevlogPost";
import "../../../../styles/AutoSlateDevlog.css"

import Oct1825 from "./Oct1825";
import Oct2525 from "./Oct2525";

const AutoSlateDevlog: React.FC = () => {
  return (
    <div>
      <Topbar />
      <div className="post_container">
      <DevlogPost post_name="Translating Audio from MP4s" post_date="10/18/2025" ContentComponent={Oct1825}/>
      <DevlogPost post_name="Adding Filters" post_date="10/25/2025" ContentComponent={Oct2525}/>
      </div>
    </div>
  );
};

export default AutoSlateDevlog;