import React from 'react'
import HighlightText from '../HomePage/HighlightText'
import CTAButton from "../HomePage/Button"
import Ai from "../../../assets/Images/Interview.png"

const Interview = () => {
  return (
    <div>
        <div className="text-center text-5xl font-semibold text-white">
        Land Your Dream Job with Studynotion AI – 
          <br/>
          <HighlightText text={"NotionHire"} />
        </div>
        <div className="mt-3 w-[100%] text-center text-lg font-bold text-richblack-300">
        NotionHire is an advanced AI-powered interview preparation platform by StudyNotion EdTech, designed to help you practice, improve, and succeed in job interviews. Get real-time AI mock interviews, expert feedback, and role-specific questions to sharpen your skills and boost your confidence. Elevate your interview game and take the next step toward your dream career with NotionHire! 🚀💼
        </div>
        <div className="mt-6 flex flex-row justify-center">
          <CTAButton active={true} linkto={"https://mock-interview-rose.vercel.app/"} target="_blank">
            Crack Your Interview
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
    src={Ai}
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

export default Interview