import React from "react";
import Topbar from "../../../TopBar";
import DevlogPost from "../../../DevlogPost";
import "../../../../styles/AutoSlateDevlog.css"

import Oct1825 from "./Oct1825";
import Oct2525 from "./Oct2525";
import Jan2226 from "./Jan2226";

const AutoSlateDevlog: React.FC = () => {
  return (
    <div>
      <Topbar />
      <div className="post_section">
      <DevlogPost post_name="Translating Audio from MP4s" post_date="10/18/2025" ContentComponent={Oct1825}/>
      <DevlogPost post_name="Adding Filters" post_date="10/25/2025" ContentComponent={Oct2525}/>
      <DevlogPost post_name="Translating Audio from BRAW" post_date="1/22/2026" ContentComponent={Jan2226}/>
      </div>
    </div>
  );
};

export default AutoSlateDevlog;