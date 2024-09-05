import { EnrolementCardApi } from "../../assets/Api/EnrolementCardApi"
import EnrolementCard from "../EnrolementCard/EnrolementCard"

const Display = () => {
  return (
    <>
        <div className=" overflow-hidden">
            <div className=" py-[33.5px] bg-[#F9FAFC] border-b-2 ">

            </div>

            {/* <div className=" p-5 md:p-10 md:px-32">
                <h1 className=" font-[poppins] font-bold text-[42px]"> Introduction </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ducimus autem repellendus ratione amet reprehenderit voluptas atque omnis, dicta ullam molestias expedita corporis tenetur eveniet quibusdam pariatur, hic laudantium aperiam!</p>
            </div> */}
            {
              EnrolementCardApi.map((e,index)=>(
                <>
                  <div key={index}>
                    <EnrolementCard store={e.store} course={e.course} flowchart={e.flowchart} des={e.des} price={e.price} 
                    valid={e.valid} change={e.change} buy={e.buy} enroll={e.enroll} purchase={e.purchase} signin={e.signin}
                    />
                  </div>
                </>
              ))
            }
        </div>
    </>
  )
}

export default Display