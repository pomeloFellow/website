import React from "react";
import "../../../../styles/DevlogPostContent.css"

const Feb1926: React.FC = () => {
  return(
    <div>
      <p className="paragraph">For the past month, I've been working on the UI of AutoSlate. I'm using tkinter to create it. My brain was wired for React UI creation, so it took a bit of getting used to to rewire it for tkinter. But, the set up itself was pretty simple.</p>
      <p className="paragraph">My initial design has 4 pages; a main page, an advanced settings page, a progress page, and a results page. At first, I was unsure of how to give users access to the min_time, end_time, and confidence perameters of the program. But then I remembered something Tantacrul, the lead UI designer of Audacity and MuseScore, said. He emphasized the importance of new users and ensuring they understood where to find things. So, I decided for my main page to contain the default processing settings for the program. That way, users can get a feel for how the program works. Once they're used to using the default settings, they can change things in the advanced settings page.</p>
      <p className="paragraph">The progress page took a lot more work. I wanted to add a progress bar and text informing users what stage it was in. This required me to add to my core code. I created a ProgressReport class to hold the information. My core code would now update the progress report. To seperate the relabeling process from the UI, I created a worker thread. When the progress is updated, the core code calls a callback that updates the application's UI. This is the first time I worked with python callbacks and UI, so it took a lot of redoing to get they system to work in a way I understood. Now it works as expected! As the process progresses through each stage, the progress bar updates the corresponding amount.</p>
      <p className="paragraph">Now, I have to add the results page. My current plan for it is to show what files have been renamed to and the reason why any files were unable to be renamed. To do this, I'm thinking of adding a dictionary to the ProgressReport, the old name being the key and the new name being the value.</p>
      <p className="paragraph">I also have an idea to make the results page like an editor. So the user can check the new names and edit them before actually applying the changes. However, this would require a LOT of changes, so I'll save it for a future update.</p>
    </div>
  );
};

export default Feb1926;