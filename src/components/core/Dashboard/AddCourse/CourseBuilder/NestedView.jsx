import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxDropdownMenu } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { BiDownArrow } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import SubSectionModal from './SubSectionModal';
import ConfirmationModal from '../../../../common/ConfirmationModal';
import { deleteSection, deleteSubSection } from '../../../../../services/operations/courseDetailsAPI';
import { setCourse } from '../../../../../slices/courseSlice';
const NestedView = ({handleChangeEditSectionName}) => {
    const {course} = useSelector((state) => state.course);
    const {token} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const[addsub,setaddsub] = useState(null);
    const[editsub,seteditsub] = useState(null);
    const[viewsub,setviewsub] = useState(null);

    console.log("Course Is",course);

    const handleDeleteSection = async (sectionId) => {
        const result = await deleteSection({
          sectionId,
          courseId: course._id,
          token,
        })
        if (result) {
          dispatch(setCourse(result))
        }
        setconfirmation(null)
      }
     const handleDeleteSubSection =  async (subsectionId , sectionId) => {
        console.log("SectionId",sectionId);
        console.log("subsectionId",subsectionId);
        console.log("token",token);
        const result = await deleteSubSection({subsectionId,sectionId,token})
        if (result){
            const updatedContent = course.courseContent.map((section) => section._id === sectionId ? result : section);
            const updatedCourse = {...course,courseContent:updatedContent};
            dispatch(setCourse(updatedCourse))
        }
        setconfirmation(null);
     }


    const [confirmation,setconfirmation] = useState(null);
  return (
    <div>
        <div className='rounded-lg bg-richblack-700 p-6 px-8 mt-10'>
            {course?.courseContent?.map((section) =>(
                <details key={section._id} open>
                    <summary className=' flex items-center justify-between gap-x-3 border-b-2'>
                        <div className=' flex gap-x-3 items-center'>
                            <RxDropdownMenu />
                            <p>{section.sectionName}</p>
                        </div>
                        <div className='flex items-center '>
                            <button onClick={() => {handleChangeEditSectionName(section._id,section.sectionName)}}>
                                <MdModeEditOutline/>
                            </button>
                            <button onClick={() => {
                                setconfirmation({
                                    text1: "Delete this Section",
                                    text2: "All the lectures in this section will be deleted",
                                    btn1Text: "Delete",
                                    btn2Text: "Cancel",
                                    btn1Handler : () => handleDeleteSection(section._id),
                                    btn2Handler : () => setconfirmation(null),
                                })
                            }}>
                                <AiFillDelete />
                            </button>
                            <span>|</span>
                            <BiDownArrow className={''} />
                        </div>
                    </summary>
                    <div>
                        {
                            section.subSection.map((data) => (
                                <div key={data?._id}
                                onClick={() => setviewsub(data)}
                                className=' flex items-center justify-between gap-x-3 border-b-2'
                                >
                                    <div
                                     className=' flex gap-x-3 items-center'>
                                        <RxDropdownMenu />
                                        <p>{data.title}</p>
                                    </div>

                                    <div
                                    onClick={(e) => e.stopPropagation()}
                                     className='flex items-center gap-x-3'>
                                        <button onClick={() => seteditsub({...data,sectionID:section.
                                        _id})}>
                                            <MdModeEditOutline/>
                                        </button>
                                        <button onClick={() => {
                                            setconfirmation({
                                            text1: "Delete this Sub Section",
                                            text2: "Selected lecture  will be deleted",
                                            btn1Text: "Delete",
                                            btn2Text: "Cancel",
                                            btn1Handler : () => handleDeleteSubSection(data._id,section._id),
                                            btn2Handler : () => setconfirmation(null),
                                        })
                                        }}>
                                                <AiFillDelete />
                                        </button>

                                    </div>
                                    </div>
                            ))
                        }
                        <button onClick={() => setaddsub(section._id)} 
                        className='mt-4 flex items-center gap-x-2 text-yellow-50'
                        >
                            <FaPlus />
                            <p>Add Lecture</p>
                        </button>
                    </div>
                </details>
            ) )}
        </div>
        {addsub ? (<SubSectionModal
            modalData={addsub}
            setModalData={setaddsub}
            add={true}
        />)
         : viewsub ? (<SubSectionModal
            modalData={viewsub}
            setModalData={setviewsub}
            view={true}
         />)
        :editsub ? (<SubSectionModal
            modalData={editsub}
            setModalData={seteditsub}
            edit={true}
        />) :
         (<div></div>) }

    {
        confirmation ? (<ConfirmationModal modalData={confirmation}/>) : (<div></div>)
    }
    </div>
  )
}

export default NestedView