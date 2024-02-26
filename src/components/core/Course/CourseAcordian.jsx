import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDown } from "react-icons/ai"
import SubSectionAcordian from './SubSectionAcordian';

const CourseAcordian = ({ course, isActive, handleActive }) => {
    const [isActiveState, setIsActiveState] = useState(false);

    const heightAcc = useRef(null);

    useEffect(() => {
        setIsActiveState(isActive?.includes(course._id));
    }, [isActive]);

    const[SubSecHeight,setSubSecHeight] = useState(0);

    useEffect(() => {
        setSubSecHeight(isActiveState ? heightAcc.current.scrollHeight : 0)
    },[isActiveState])

    return (
        <div className=' overflow-hidden border border-solid border-richblack-600 rounded-md bg-richblack-700 text-richblack-5 last:mb-0'>
            <div onClick={() => handleActive(course._id)} className=' flex justify-between cursor-pointer items-start bg-opacity-20 px-7 py-6 transition-[0.3s]'>
                <div className=' flex gap-2 items-center'>
                    <i className={isActiveState ? "rotate-180" : "rotate-0"}>
                        <AiOutlineDown />
                    </i>
                    <p>{course?.sectionName}</p>
                </div>
                <div className='space-x-4'>
                    <span className=' text-yellow-25'>{`${course.subSection.length || 0} lectures(s)`} </span>
                </div>
            </div>
            <div ref={heightAcc} style={{
                height:SubSecHeight
            }} className=' relative transition-[height] h-0 overflow-hidden bg-richblack-900 duration-[0.35s] ease-[ease]'>
                <div className=' text-textHead flex flex-col gap-2 px-7 py-6 semibold'>
                    {
                        course?.subSection.map((sub,i) => {
                            return <SubSectionAcordian sub={sub} key={i}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default CourseAcordian;
