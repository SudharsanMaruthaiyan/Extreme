import { data } from "autoprefixer"
import { Search } from "lucide-react"
import { useState } from "react"
import { accordionData } from "../../assets/Api/accordionData"
import Week1 from "../Week1/Week1"
import Week2 from "../Week2/Week2"
import Week3 from "../Week2-3/Week3"
import Week6 from "../Week3-6/Week6"
import Week8 from "../Week6-8/Week8"
import Week10 from "../Week8-10/Week10"
import Display from "../Display/Display"
const Lesson = () => {
    const [open, setOpen] = useState(false)
    const toggle = (index) =>{
        if(open === index){
            return setOpen(null)
        }
        setOpen(index)
    }
   
  return (
    <>
        <div className=' max-w-[100%]'>
            <div className=''> 
                <div className=' grid grid-cols-10'>
                    <div className=' col-span-3'>
                        <div className=' flex justify-between items-center w-full p-5 bg-[#F9FAFC]'>
                            <input type="text" name="search" id="search" placeholder='Search for course content' className=' outline-none border-none text-lg '/>
                            <Search className=' w-4'/>
                        </div>
                        <div>
                            <div className=" overscroll-y-none">
                                {accordionData.map((data, index) => {
                                    if (data.type === 'week1') {
                                    return <Week1 key={index} open={index===open} title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} toggle={()=>toggle(index)}/>;
                                    }
                                    else if (data.type === 'week2') {
                                    return <Week2 key={index} open={index===open} title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} toggle={()=>toggle(index)} />
                                    }
                                    else if (data.type === 'week2-3'){
                                        return <Week3 key={index} open={index===open} title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} toggle={()=>toggle(index)} />
                                    }
                                    else if(data.type === 'week3-6'){
                                        return <Week6 key={index} open={index===open} title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} toggle={()=>toggle(index)} />
                                    }
                                    else if(data.type === 'week6-8'){
                                        return <Week8 key={index} open={index===open} title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} toggle={()=>toggle(index)} />
                                    }
                                    else if(data.type === 'week8-10'){
                                        return <Week10 key={index} open={index===open} title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} toggle={()=>toggle(index)} />
                                    }
                                })}    
                            </div>   
                        </div>
                    </div>
                    <div className=' col-span-7'>
                        <Display/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Lesson