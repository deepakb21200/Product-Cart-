import { sub_storingTotal } from "./actions";
import { all_data, all_ids, all_total, carts, combined_data, deletingcarts, first_api, india_rate, sub_all_total } from "./constants";
import { initialState } from "./initialState";



export let reducerfn = (state= initialState,action)=>{
    switch(action.type){
        case first_api:return{
            ...state,
            allProducts: action.payload 
        }

         case combined_data:return{
            ...state,
            allCategoryData: action.payload

        }

        case all_data:return{
            ...state,
             allCombineData: action.payload

        }

        case all_ids :return{
             ...state,
             iid:action.payload

        }



        case carts :{ ///allcart ka action creator
             let new_data = [...state.all_cart_data,action.payload]
           
             
            return{
                ...state,
                 all_cart_data:new_data
            }

        }









        case deletingcarts :return{           /// ye action creators hai
                                        //deletingcarts ye constant hai 
                ...state,
                 all_cart_data:action.payload
          

        }





        case india_rate :return{
            ...state,
            indiaR:action.payload
        }




        case all_total: {               //storingTotal is case ka action creater
             let new_data = state.grandTotal + action.payload
console.log(new_data);

// console.log("typeof action.payload",typeof action.payload,             "typeof state.grandtotal",                     
//     typeof state.grandTotal,"value of action.paylaod",               action.payload);

//              console.log(new_data,typeof new_data, "new_data value from reducer");
             

              return{
                ...state,
                 grandTotal:new_data
            }
            
        }



        case sub_all_total:{               //sub_storingTotal is case ka action creater
console.log("before applyng actionload on deltetting button", state.grandTotal);

let new_data = state.grandTotal - action.payload

console.log("after applyng actionload on deltetting button",new_data,"new_data jo return karega");

              return{
                ...state,
                 grandTotal:new_data
            }


        }

// case carts :return{
              
  
            
//                 ...state,
//                  all_cart_data:action.payload
           

//         }













     default : return state
    }
}

{/* 
  case delete_todo:{
            let newTodo = [...state.todos]
            newTodo.splice(action.payload,1)
            return {
                ...state,
                todos: newTodo
            }
        } */}




        // let a = "2"
        // let b = "2"

        // console.log(a-b);
        