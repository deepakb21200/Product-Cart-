
export let initialState = {
 
    allCombineData:[],
    first:"",
    setfirst:""
    
     

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


          default:
      return state
  
    }}