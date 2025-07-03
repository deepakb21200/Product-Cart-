import { all_data, all_ids, all_total, carts, combined_data, deletingcarts, first_api, india_rate } from "./constants"

export let addSetProducts  = (text)=>{
    return{
        type:first_api,
        payload:text
    }
}
export let combinedset  = (text)=>{
    return{
        type:combined_data,
        payload:text
    }

}


   export let Allset  = (text)=>{
    return{
        type:all_data,
        payload:text
    }
   }




   export let Allid = (text)=>{
      return{
        type:all_ids,
        payload:text
      }

   }


   export let allcart = (text) =>{
 return{
        type:carts,
        payload:text
    }

}

  export let allcart_delete = (text) =>{
 return{
        type:deletingcarts,
        payload:text
    }
}



export let storingCurrency = (text)=>{
    return{
        type:india_rate,
        payload:text
    }
}



export let storingTotal = (text)=>{
    return{
        type:all_total,
        payload:text
    }
}



export let sub_storingTotal = (text)=>{

    return{
        type:all_total,
        payload:text
    }
}