 
import { createStore } from "redux";
import reducer from "../Reducer/reducer";
 
 

export let store = createStore(reducer)




  {/* <Header data = {first} data2={setfirst}/>
   {first.length === 0 ?  <Loader/> : (
        <div  className='xl:w-[88vw] mx-auto flex flex-wrap xl:gap-[2vw] w-[90vw] 
        xl:justify-start gap-[4vw] lg:gap-[1vw]'>   
          
          {first.map((element, index) => ( 
            <Product_Each key={index} data={element} />
          ))}
        </div>
      )} */}