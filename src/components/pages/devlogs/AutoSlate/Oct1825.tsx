import React from "react";
import "../../../../styles/DevlogPostContent.css"

const Oct1825: React.FC = () => {
  return(
    <div>
      <p className="paragraph">This devlog is comming really late. I started the project in August and finished implementing renaming from MP4 audio on September 15. I don't quite remember everything. But I still wanted to have an initial devlog.</p>
      <p className="paragraph">I came up with this idea through my film experience. We had assistant editors spend a decent amount of time just renaming files before moving to a rough cut. Yes, some cameras allow for slates within the meta data, but sets are often too hectic to keep adjusting that.</p>
      <p>Ideal features:</p>
      <ul>
        <li>Pull slate data from audio + video</li>
        <li>Works with MP4 + BRAW</li>
        <li>Mac, Windows, Linux support</li>
        <li>Completely offline</li>
        <li>Perameters like only rename above a certain "confidence"</li>
      </ul>
      <p>The processing would look something like this:</p>
      <ul>
        <li>Get audio from video</li>
        <li>Find the timestamp of the slate clap</li>
        <li>Transcribe audio prior to clap to get slate info</li>
        <li>Use timestamp to get frame</li>
        <li>Transcribe frame to get slate info again</li>
        <li>Compare the two and their "confidence"</li>
        <li>Rename video file</li>
      </ul>
      <p className="paragraph">Most of the film people I know use Black Magic Cameras, which record in BRAW. There is no python library readily available for BRAW, so I would need to create a python wrapper for the C++ SDK. I knew that would be a massive process, so I wanted to get the basic processing down first. That's why I started with MP4s.</p>
      <p>My techstack looks something like this:</p>
      <ul>
        <li>FFmpeg to convert MP4 to numpy buffer</li>
        <li>Refine the audio buffer and find clipping timestamp using Numpy filters, Noisereduce, and Scipy.signal</li>
        <li>Transcribe audio buffer using Whisper</li>
        <li>Grab and process frame data using OpenCV</li>
        <li>Trasncribe frame using Tesseract</li>
      </ul>
      <p className="paragraph">After a couple days, I was able to rename a MP4 file based on audio information. So, I began working on getting slate data visually. This did not work as expected. The transcriptions were wildly inaccurate. I think this is because I had to use a small offline whisper model. Perhaps, if I connect to a online model, the transcription will improve? This is a big what if, so I decided to focus on getting the audio transcription working for both MP4 and BRAW files first.</p>
    </div>  
  );
};

export default Oct1825;