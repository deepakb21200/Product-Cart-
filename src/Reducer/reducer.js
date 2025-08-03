
export let initialState = {
    allCombineData:[],
    first:"",
    setfirst:"",
    INR:"",
    cartDetails:[]

}


export let indiarate = (text)=>{
    return{
        type:"rate",
        payload:text
    }
}


export let cart = (text)=>{
    return{
        type:"allcart",
        payload:text
    }
}







export let combinedset  = (text)=>{
    return{
        type:"ALL_DATA",
        payload:text
    }
}

export let data1  = (text)=>{
    return{
        type:"data1",
        payload:text
    }
}

export let data2  = (text)=>{
    return{
        type:"data2",
        payload:text
    }
}




export let reducerfn = (state= initialState,action)=>{
    switch(action.type){
         case "ALL_DATA":{
              return{
              ...state,
            allCombineData: action.payload
            }
        }



        case "data1":{

            // console.log("data1",action.payload);
            
              return{
              ...state,
            first: action.payload
            }
        }


        case "data2":{

            //  console.log("data2",action.payload);
              return{
              ...state,
            setfirst: action.payload
            }
        }

         case "rate":{             
              return{
              ...state,
            INR: action.payload
            }
        }

         case "allcart" :{ // iske action ka naam hai = cart
             let new_data = [...state.cartDetails,action.payload]

             console.log(new_data);
             
           
             
            return{
                ...state,
                 cartDetails:new_data
            }

        }
          default:
             return state
  
    }}