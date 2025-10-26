import React from "react";
import "../../../../styles/DevlogPostContent.css"

const Oct2525: React.FC = () => {
  return(
    <div>
        <p className="paragraph">I added a couple of filtering features to the existing functionality. Now, you can specify a start time, min time, and minimum confidence. All times are in seconds.</p>
            <ul>
            <li>start_time : Beginning of audio/video transcription
                <ul>
                <li>default = 0</li>
                </ul>
            </li>
            <li>min_time : End of audio/video transcription<br />
                <ul>
                <li>default = -1</li>
                <li>possible values
                    <ul>
                    <li>-1 = use time of slate clap (first clipping instance)</li>
                    <li>-2 = use full length</li>
                    <li>&gt;0 = use slate claps &gt; end_time or end_time</li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>minimum_confidence : Min confidence in transcription required to rename file</li>
            </ul>
        <p className="paragraph">After looking at some real footage, I realized that there is a lot of variation in slate calls. Some didn't clap the slate, so using the time of clipping wouldn't work. But I also don't want to have to look through the entire clip as that will add processing time. So I decided to give the user more control over where we're looking in clips.</p>
        <p className="paragraph">I had the use of a minimum confidence in mind since I started the project. However, I haddn't added actually checking it yet. So I decided to implement it now so I don't have to worry about it later.</p>
        <p className="paragraph">I just need to add documentation, fix up the error handling, and add some logging for files that are unable to be renamed. Then, I can move on to adding the BRAW python wrapper.</p>
    </div>
  );
};

export default Oct2525;