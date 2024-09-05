import { data } from "autoprefixer"
import { Search } from "lucide-react"
import { useState } from "react"
import { accordionData } from "../../../assets/Api/accordionData"
import Week1 from "../../Week1/Week1"
import Week2 from "../../Week2/Week2"
import Week3 from "../../Week2-3/Week3"
import Week6 from "../../Week3-6/Week6"
import Week8 from "../../Week6-8/Week8"
import Week10 from "../../Week8-10/Week10"

const Usage = () => {
  return (
    <>
        <div className=' max-w-[100%]'>
            <div className=''> 
                <div className=' grid md:grid-cols-10'>
                    <div className=' md:col-span-3 col-span-6'>
                        <div className=' flex justify-between items-center w-full p-5 bg-[#F9FAFC]'>
                            {/* <input type="text" name="search" id="search" placeholder='Search for course content' className=' outline-none border-none text-lg bg-transparent'/>
                            <Search className=' w-4'/> */}
                            <h1 className=" text-2xl font-bold font-[poppins]">Syllabus</h1>
                        </div>
                        <div>
                            <div className="overflow-y-auto h-[700px]">
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
                    <div className=' md:col-span-7 col-span-4'>
                        <div className=" overflow-hidden">
                            <div className=" py-[33.5px] bg-[#F9FAFC] border-b-2 ">

                            </div>
                            <div className=" md:p-10 md:px-32 p-5">
                                <h1 className=" font-[poppins] font-bold text-[42px]"> Usage </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ducimus autem repellendus ratione amet reprehenderit voluptas atque omnis, dicta ullam molestias expedita corporis tenetur eveniet quibusdam pariatur, hic laudantium aperiam!</p>
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