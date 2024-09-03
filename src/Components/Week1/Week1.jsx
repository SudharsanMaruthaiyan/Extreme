import { QuestionAnswer, QuestionMark } from '@mui/icons-material'
import { Plus, ChevronDown, Book, Lock, ChevronUp } from 'lucide-react'
import { Collapse } from 'react-collapse'
import { Link } from 'react-router-dom'

const Week1 = ({title ,quizDuration,quizQuesion,quiz, duration , open, toggle, option1, option2, option3, option4, option5}) => {
  return (
    <>
        <div className="my-0 bg-[#FFFFFF] shadow-lg accodion "> 
            <button onClick={toggle} className={`flex border py-5 sticky top-0 bg-white border-b-green-400 focus:outline-none w-full justify-between items-center px-4 ${open? ' transition ' :''}`}>
                <span className={`py-5 font-[poppins] font-bold text-xl text-start ${open ? ' ' : ''}`}>{title}</span> 
                <div className={`${open ? ' ' : ''}`}>
                    {
                        open ?<ChevronUp className=' w-4'/>   :  <ChevronDown className=' w-4'/> 
                    }
                </div>
            </button>
            <Collapse isOpened={open} className={`transition-all duration-300 ease-in-out text-slate-600 text-sm  ${open? 'transition ease-in-out duration-300':''} `} >
                <div className=' '>
                    <div className=" overflow-hidden px-2 transition">

                        {/* {
                            options.map((option, index)=>{
                                return(
                                    <>
                                        <div key={index}>
                                            <div className='group flex justify-between w-full items-center px-2 py-5 bg-[#F9FAFC] border-b-white border-b-2'>
                                                <div className=' flex items-start gap-4 '>
                                                    <Book className=' w-5 mt-1 stroke-[#1039C5]'/>
                                                    <div className=' flex flex-col'>
                                                        <p className=' font-bold font-[poppins] group-hover:text-[#6BE69B]'>{option}</p>
                                                        <p>{duration}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Lock className=' w-5 stroke-[#1039C5]'/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </>
                                )
                            })
                        } */}
                        <Link to={"/introduction"}>
                            <div className=' flex items-center w-full justify-between p-5 group bg-[#F9FAFC] border-b-white border-b-2 px-2'>
                                <div className=' flex items-start gap-2'>
                                    <Book className='w-5 mt-1 stroke-[#1039C5]'/>
                                    <div className=' flex flex-col items-start text-start'>
                                        <p className=' font-bold font-[poppins] group-hover:text-[#6BE69B]'>{option1}</p>
                                        <p>{duration}</p>
                                    </div>
                                </div>
                                <div >
                                    <Lock className=' w-5 stroke-[#1039C5]'/>
                                </div>
                            </div>
                        </Link>

                        <Link to={"/features"}>
                            <div className=' flex items-center w-full justify-between p-5 group bg-[#F9FAFC] border-b-white border-b-2 px-2'>
                                <div className=' flex items-start gap-2'>
                                    <Book className='w-5 mt-1 stroke-[#1039C5]'/>
                                    <div className=' flex flex-col items-start text-start'>
                                        <p className=' font-bold font-[poppins] group-hover:text-[#6BE69B]'>{option2}</p>
                                        <p>{duration}</p>
                                    </div>
                                </div>
                                <div >
                                    <Lock className=' w-5 stroke-[#1039C5]'/>
                                </div>
                            </div>
                        </Link>

                        <Link to={"/usage"}>
                            <div className=' flex items-center w-full justify-between p-5 group bg-[#F9FAFC] border-b-white border-b-2 px-2'>
                                <div className=' flex items-start gap-2'>
                                    <Book className='w-5 mt-1 stroke-[#1039C5]'/>
                                    <div className=' flex flex-col items-start text-start'>
                                        <p className=' font-bold font-[poppins] group-hover:text-[#6BE69B]'>{option3}</p>
                                        <p>{duration}</p>
                                    </div>
                                </div>
                                <div >
                                    <Lock className=' w-5 stroke-[#1039C5]'/>
                                </div>
                            </div>
                        </Link>

                        <Link to={"/interaction"}>
                            <div className=' flex items-center w-full justify-between p-5 group bg-[#F9FAFC] border-b-white border-b-2 px-2'>
                                <div className=' flex items-start gap-2'>
                                    <Book className='w-5 mt-1 stroke-[#1039C5]'/>
                                    <div className=' flex flex-col items-start text-start'>
                                        <p className=' font-bold font-[poppins] group-hover:text-[#6BE69B]'>{option4}</p>
                                        <p>{duration}</p>
                                    </div>
                                </div>
                                <div >
                                    <Lock className=' w-5 stroke-[#1039C5]'/>
                                </div>
                            </div>
                        </Link>
                        
                        <Link to={"/preparation"}>
                            <div className=' flex items-center w-full justify-between p-5 group bg-[#F9FAFC] border-b-white border-b-2 px-2'>
                                <div className=' flex items-start gap-2'>
                                    <Book className='w-5 mt-1 stroke-[#1039C5]'/>
                                    <div className=' flex flex-col items-start text-start'>
                                        <p className=' font-bold font-[poppins] group-hover:text-[#6BE69B]'>{option5}</p>
                                        <p>{duration}</p>
                                    </div>
                                </div>
                                <div >
                                    <Lock className=' w-5 stroke-[#1039C5]'/>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/week-1-quiz"}>
                            <div>
                                <div className='group flex justify-between w-full items-center py-5 bg-[#F9FAFC] border-b-white border-b-2 px-2'>
                                    <div className=' flex items-start gap-4 '>
                                        <QuestionMark className=' w-4 mt-1 stroke-[#1039C5]'/>
                                        <div className=' flex flex-col'>
                                            <p className=' font-bold font-[poppins] group-hover:text-[#6BE69B]'>{quiz}</p>
                                            <div className=' flex items-center gap-3'>
                                                <p>{quizDuration}</p>
                                                <p>{quizQuesion}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Lock className=' w-5 stroke-[#1039C5]'/>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Collapse>
        </div>
    </>
  )
}

export default Week1