import { calculateGrandTotal } from "./GrandTotal"

export let data1  = (text)=>{
    return{
        type:"data1",
        payload:text
    }
}


export let all_products  = (text)=>{
    return{
        type:"ALL_DATA",
        payload:text
    }
}



export let total  = (text)=>{
    return{
        type:"Total",
        payload:text
    }
}




export let addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}



export let delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}


let savedCart = localStorage.getItem("cartDetails")
  ? JSON.parse(localStorage.getItem("cartDetails"))
  : [];

export let initialState = {
  combinedData: [],
  first: "",
  cartDetails: savedCart,
  grandTotal: calculateGrandTotal(savedCart)
};



export default function reducer(state = initialState, action) {
  switch (action.type) {
   case "ADDTOCART": {
      let product = action.payload
    
        let updatedCart = [
          ...state.cartDetails,
          {
            ...product,
            qty: 1,
            subtotal: product.price,
            isclicked: true
          },
        ]

        let g = [...state.combinedData]
        const addedProduct = updatedCart[updatedCart.length - 1];

        for (let i = 0; i < g.length; i++) {
          if (g[i].id === addedProduct.id) {
            g[i].isclicked = true;
            break;
          }
        }
      
      let newGrandTotal = calculateGrandTotal(updatedCart);

      let updatedState = {
        ...state,
        cartDetails: updatedCart,
        grandTotal: newGrandTotal,
      };

       
      localStorage.setItem("cartDetails", JSON.stringify(updatedCart));

      return updatedState;
    }


    case "DELETEPRODUCT": {
      let updatedCart = state.cartDetails.filter(
        (p) => p.id !== action.payload
      );
      let newGrandTotal = calculateGrandTotal(updatedCart);

      let g = [...state.combinedData];
      for (let i = 0; i < g.length; i++) {
        if (g[i].id === action.payload) {
          g[i].isclicked = false;
          break;
        }
      }

      let updatedState = {
        ...state,
        cartDetails: updatedCart,
        grandTotal: newGrandTotal,
      };

      localStorage.setItem("cartDetails", JSON.stringify(updatedCart));

      return updatedState;
    }

     case "UPDATEQTY": {
      let { id, qty } = action.payload;
      let updatedCart = state.cartDetails.map((p) =>
        p.id === id
          ? {
              ...p,
              qty,
              subtotal: qty * p.price,
            }
          : p
      );

      

      let newGrandTotal = calculateGrandTotal(updatedCart);

      let updatedState = {
        ...state,
        cartDetails: updatedCart,
        grandTotal: newGrandTotal,
      };

      localStorage.setItem("cartDetails", JSON.stringify(updatedCart));

      return updatedState;
    }


  
         case "ALL_DATA":{
              return{
              ...state,
            combinedData: action.payload
            }
        }



        case "data1":{
              return{
              ...state,
            first: action.payload
            }
        }

    

    default:
      return state;
  }
}
