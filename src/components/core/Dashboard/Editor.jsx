import React from 'react'
import HighlightText from '../HomePage/HighlightText'
import CTAButton from "../HomePage/Button"
import CodeEditor from "../../../assets/Images/image.png"

const Editor = () => {
  return (
    <div>
        <div className="text-center text-5xl font-semibold text-white">
          Become a creator with Studynotion AI 
          <br/>
          <HighlightText text={"Code Editor"} />
        </div>
        <div className="mt-3 w-[100%] text-center text-lg font-bold text-richblack-300">
        StudyNotion AI-Powered Code Editor – Elevate your coding experience with intelligent assistance! 🚀 Write, debug, and optimize code effortlessly with real-time AI suggestions, smart auto-completions, and error detection. Whether you're a beginner or a pro, StudyNotion’s AI-driven editor enhances productivity and creativity, making coding smoother and smarter than ever! 💡💻
        </div>
        <div className="mt-6 flex flex-row justify-center">
          <CTAButton active={true} linkto={"/Ide"}>
            Start Building Now
          </CTAButton>
        </div>
        <div
  style={{
    borderRadius: "12px",
    maxHeight: "585px",
    background: "linear-gradient(to left, #84D3F7, #A860F6, #B6F09C)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    position: "relative",
    marginTop: "1rem"
  }}
>
  <img
    src={CodeEditor}
    alt="Features"
    style={{
      width: "95%",
      maxHeight: "550px",
      borderRadius: "12px",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      objectFit: "contain",
    }}
  />
</div>

        </div>
  )
}

export default Editor