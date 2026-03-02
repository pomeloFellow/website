import React from "react";
import "../../../../styles/DevlogPostContent.css"

const Feb2326: React.FC = () => {
  return(
    <div>
        <p className="paragraph" >I finished the main use cases for AutoSlate! I implemented the Advanced Settings page which has controls for the start time, end time, and minimum confidence. I realized a nice setting to have would be buttons for "simple", "strict", "loose" or something similar, but I'll save that for a future version.&nbsp;</p>
        <p className="paragraph">Implementing the advanced settings was a LOT hard than I thought it would be. Either on the same difficulty as implementing the progress bar or more. I didn't realize how many widgets would be involved. I created a reusable component that holds the setting name and its options. That definitly helped. If I didn't do this, my code would be such a mess. There are so many widgets related to just one setting, that I had to group each into their own files so that my advanced settings code wasn't insanely long.</p>
        <p className="paragraph">Thankfully, that was the main source of difficulty. Since I already figured out how to process and show the results, I didn't have to figure that out again.&nbsp;</p>
        <p className="paragraph">Now, I have to address the edge cases where something goes wrong.</p>
        <p className="paragraph">Things I'll Address:</p>
        <ul>
        <li>No file/folder selected</li>
        <li>No videos files (.mp3/.braw)</li>
        <li>Issues in process
        <ul>
        <li>New file name exists already</li>
        <li>Unable to get all slate information/ audio buffer empty</li>
        <li>End time earlier than start time</li>
        <li>Old file name doesn't exist</li>
        </ul>
        </li>
        <li>Adding the logo!</li>
        </ul>
        <p className="paragraph">I haven't solidified how I'm going to address all of these yet. But I will soon.</p>
    </div>
  );
};

export default Feb2326;