import React from 'react'
import HighlightText from '../HomePage/HighlightText'
import TestCard from '../../common/TestCard'
import CardData from "../../../data/CardData.json"

const Mock = () => {
  return (
    <div>
        <div className="text-center text-5xl font-semibold text-white">
            Ace Your Exams with StudyNotion
          <br/>
          <HighlightText text={"Mock Tests"} />
        </div>
        <div className="mt-3 w-[100%] text-center text-lg font-bold text-richblack-300">
        Prepare smarter with StudyNotion's AI-powered mock tests, designed to mimic real exam conditions. Get instant feedback, detailed solutions, and time-bound challenges to track your progress. With adaptive testing and unlimited practice, boost your confidence and accuracy. The more you test, the better you get! 🚀🔥
        </div>
        <div className='flex flex-wrap gap-4'>
            {
                CardData.map((ele,i) =>{
                    return(
                        <TestCard key={i} heading={ele.heading} para={ele.para} s1={ele.s1} s2={ele.s2} s3={ele.s3}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Mock