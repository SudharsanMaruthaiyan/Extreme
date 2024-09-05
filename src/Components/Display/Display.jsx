import { EnrolementCardApi } from "../../assets/Api/EnrolementCardApi"
import EnrolementCard from "../EnrolementCard/EnrolementCard"

const Display = () => {
  return (
    <>
        <div className=" overflow-hidden">
            <div className=" py-[35px] bg-[#F9FAFC] border-b-2 ">
            </div>
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