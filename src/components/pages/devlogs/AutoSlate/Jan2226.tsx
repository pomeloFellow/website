import React from "react";
import "../../../../styles/DevlogPostContent.css"

const Jan2226: React.FC = () => {
  return(
    <div>
        <p className="paragraph">It's been a while since my last update. But I've got the BRAW python wrapper working now! It took me a while to figure out. I didn't really understand how to work with pybind11 or use the BRAW SDK.</p>
<p className="paragraph">Thankfully, the SDK files come with an example on how to convert a .braw into a .wav. I used this as a basis for my code. In order to get the audio buffer, I needed to create these things:<br /><br />BlackmagicRawFactory &gt; codec &gt; clip &gt;&nbsp;BlackmagicRawClipAudio</p>
<p className="paragraph">Then, while converting the audio data into a buffer, I turn it from stereo to mono automatically. This might be an issue later because I'm not sure if .braw files can have other channel formats. However, my test uses stereo, so its okay for now. I mainly want to ensure I can actually make the python module and have it run.</p>
<p className="paragraph">Then, I resample it to make it match the needed format for the next steps in the audio pipeline.</p>
<p className="paragraph">So, that's how the actual cpp code works. Now, onto figuring out how to build the module. Since I'm trying to make Autoslate work on windows, macos, and linux, I need different sdk and makefiles. Right now, I'm using WSL on Windows, so I'm focusing on completing the project for linux first. I have a makefile in my root to select a makefile for the correct platform and run it.</p>
<p className="paragraph">Something I forgot to mention is that the Blackmagic SDK has a dispatcher I have to compile first. So, I do that in my makefile and compile the python module.</p>
<p className="paragraph">This whole thing was a LOT easier than I expected. I thought it would take forever to debug since there are a lot of moving pieces. But I got it to work! Using a folder with a .braw and .mp4, I ran the program and it renamed both files correctly!!! I was worried that my cpp code would take a lot of debugging, but it didn't take too much!<br /><br /></p>
<p className="paragraph">Now, I'm working on making a GUI and turning this into an actual executable.</p>
    </div>
  );
};

export default Jan2226;