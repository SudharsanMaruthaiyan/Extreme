import { data } from "autoprefixer"
import { Search,ArrowRight, X  } from "lucide-react"
import { useState } from "react"
import { accordionData } from "../../../assets/Api/accordionData"
import Week1 from "../../Week1/Week1"
import Week2 from "../../Week2/Week2"
import Week3 from "../../Week2-3/Week3"
import Week6 from "../../Week3-6/Week6"
import Week8 from "../../Week6-8/Week8"
import Week10 from "../../Week8-10/Week10"
import UsageVideo from "../../Week1VideoComponents/UsageVideo/UsageVideo"
import LmsNav from "../../LmsNav/LmsNav"

const Usage = () => {
    const [open, setOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
  return (
    <>
        <div className=' max-w-[100%]'>
            <div className=''> 
                <div>
                    <LmsNav/>
                </div>
                <div className={` absolute top-20 ${open?' md:block hidden' : ' hidden'}`}>
                    <div className="flex justify-start" onClick={()=>setOpen(!open)}>
                        <div 
                            className="flex items-center bg-transparent border-2 border-[#] hover:bg-[#151A30] text-white p-3 rounded-r-md cursor-pointer transition-all duration-300 ease-in-out"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span className={`overflow-hidden text-nowrap transition-all duration-300 ease-in-out ${isHovered ? 'w-32 opacity-100' : 'w-0 opacity-0'} ${open?'' : ' '}`}>
                            Syllabus
                            </span>
                            <ArrowRight className="w-6 h-6"/>
                        </div>
                    </div>
                </div>
                

                <div className=' grid grid-cols-10'>
                    <div className={`order-2 md:order-1 ${open?'fixed ml-[-600px] transition duration-300 ease-in-out ' : ' ml-[0px] transition-all duration-300 ease-in-out md:col-span-3 col-span-10 '}`}>
                        <div >
                            {/* <input type="text" name="search" id="search" placeholder='Search for course content' className=' outline-none border-none text-lg bg-transparent'/>
                            <Search className=' w-4'/> */}
                            <div className={` flex justify-between items-center w-full px-5 py-3 `}>
                                <h1 className=" text-lg font-bold font-[poppins] flex justify-between w-full items-center">Syllabus </h1>
                                <X className=" cursor-pointer" onClick={()=>setOpen(!open)}/>
                            </div>
                        </div>
                        <div>
                            <div className="overflow-y-auto h-[700px]" id="open">
                                {accordionData.map((data, index) => {
                                    if (data.type === 'week1') {
                                    return <Week1 key={index}  title={data.title} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)}/>;
                                    }
                                    else if (data.type === 'week2') {
                                    return <Week2 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} option6={data.option6} toggle={()=>toggle(index)} />
                                    }
                                    else if (data.type === 'week2-3') {
                                    return <Week3 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                    option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)} />
                                    }
                                    else if (data.type === 'week3-6') {
                                    return <Week6 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                    option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)} />
                                    }
                                    else if (data.type === 'week6-8') {
                                    return <Week8 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                    option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} toggle={()=>toggle(index)} />
                                    }
                                    else if (data.type === 'week8-10') {
                                    return <Week10 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                    option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} toggle={()=>toggle(index)} />
                                    }
                                })}    
                            </div>   
                        </div>
                    </div>
                    
                    <div className={` order-1 md:order-2 ${open?'col-span-10' : '  md:col-span-7 col-span-10'}`}>
                        <UsageVideo/>
                        <div className={`${open?'block' : 'hidden'}`}>
                        <h1 className=" text-lg font-bold font-[poppins] flex justify-between w-full items-center p-5">Syllabus </h1>
                            <div className="overflow-y-auto h-[700px]" id="open">
                                {accordionData.map((data, index) => {
                                    if (data.type === 'week1') {
                                    return <Week1 key={index}  title={data.title} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)}/>;
                                    }
                                    else if (data.type === 'week2') {
                                    return <Week2 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} option6={data.option6} toggle={()=>toggle(index)} />
                                    }
                                    else if (data.type === 'week2-3') {
                                    return <Week3 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                    option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)} />
                                    }
                                    else if (data.type === 'week3-6') {
                                    return <Week6 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                    option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)} />
                                    }
                                    else if (data.type === 'week6-8') {
                                    return <Week8 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                    option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} toggle={()=>toggle(index)} />
                                    }
                                    else if (data.type === 'week8-10') {
                                    return <Week10 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                    option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} toggle={()=>toggle(index)} />
                                    }
                                })}    
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Usage