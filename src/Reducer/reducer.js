
export let initialState = {
    allCombineData:[],
    first:"",

    INR:"", //iska use maine nhi kiya hai isko app avoid hi kijiye
    cartDetails:[],
    grandTotal :0

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



export let deleteSpecific  = (text)=>{
    return{
        type:"deleteS",
        payload:text
    }
}


export let total  = (text)=>{
    return{
        type:"Total",
        payload:text
    }
}




export let reducerfn = (state= initialState,action)=>{
    switch(action.type){
         case "ALL_DATA":{ //iska action creator hia = combinedset aur ye home component me use kara useeffect me 
              return{
              ...state,
            allCombineData: action.payload
            }
        }



        case "data1":{

              return{
              ...state,
            first: action.payload
            }
        }


        case "data2":{

     
              return{
              ...state,
            setfirst: action.payload
            }
        }

         case "rate":{      // iske aap ignore kardiijye iskoi use ni kara ahi       
              return{
              ...state,
            INR: action.payload
            }
        }

         case "allcart" :{ // iske action ka naam hai = cart aur ye product_ceach component me use kara.
             let new_data = [...state.cartDetails,action.payload]

             console.log(new_data);
             
           
             
            return{
                ...state,
                 cartDetails:new_data
            }  

        }


            case "deleteS" :{  // iska action creator hai = deleteSpecific aur ye eachcart component me use karahi.
                console.log(action.payload);
                
                let new_cartDetails = [...state.cartDetails]
                let new_data = state.grandTotal - action.payload[1]
             new_cartDetails.splice(action.payload[0], 1)
       
            return{
                ...state,
                 cartDetails:new_cartDetails,
                 grandTotal:new_data
            }  

        }


           case "Total" :{// iska action createor hia = total aur ye each cart component me use kara
             let new_data
              if(action.payload[0]){
                 new_data = state.grandTotal + action.payload[1]
              }else{
                 new_data = state.grandTotal - action.payload[1]
              }
            return{
                ...state,
                 grandTotal:new_data
            }  

        }







          default:
             return state
  
    }}