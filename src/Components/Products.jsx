import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSetProducts, Allid, Allset, combinedset, storingCurrency } from "../actions";
// import Fetchitems from "./Fetchitems";
import { categories } from "../categories";
import Fetchitems from "./Fetchitems";
import '../App.css'

 
  function Products() {
  let counting = useRef([]);

  let allProducts = useSelector((state) => state.allProducts);
  let allCategoryData = useSelector((state) => state.allCategoryData);
  useSelector((state) => state.allCombineData);

  let iid = useSelector((state) => state.iid);
  let dispatch = useDispatch();
let indiaR =useSelector((state) => state.indiaR)
  let arr = [];
  let arr2 = [];


 useEffect(() => {

    const fetchAllCategoriesData = async () => {
      try {
        let res2 = await fetch("https://v6.exchangerate-api.com/v6/1549cab85e4125398dcd8dfe/latest/USD")
        let new_res2 = await res2.json()
        console.log(new_res2.conversion_rates.INR)
        dispatch(storingCurrency(new_res2.conversion_rates.INR))
        

        
        const promises = categories.map(async (category) => {
          const res = await fetch(
            `https://dummyjson.com/products/category/${category}`
          );
          return await res.json();
        });
        console.log(promises);

        const allCategoryData = await Promise.all(promises);

       dispatch(combinedset(allCategoryData))////1
     allCategoryData.map((element)=>{
               arr.push(...element.products)   
               
          
        })


            dispatch(addSetProducts(arr)) /////2
            dispatch(Allset(arr))//////3
          
       
         console.log(arr,"first time");
        arr.map((ele)=>{
arr2.push(ele.id)
         })
           console.log(arr2);
         dispatch(Allid(arr2))

        
    
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchAllCategoriesData();



  }, []);


  





// useEffect(() => {
//   console.log("Redux allProducts:", allProducts, allCategoryData ,"iid",iid);
// }, [allProducts]);

// useEffect(() => {
//   console.log("counting", counting);
// }, [counting]);






// useEffect(()=>{
//    arr.map((ele)=>{
// arr2.push(ele.id)
//          })
//            console.log(arr2);
//          dispatch(Allid(arr2))
// },[iid])














  return (
    <>
      {allProducts.length === 0 ? (
        <h2>No products found</h2>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
            width: "100%",
            marginTop: "50px",
          }}
        >
          {allProducts.map((element, index) => (
            // <Fetchitems key={index} element={element} />
            // <Fetchitems key={index} element={element}/>

            <Fetchitems  key={index} element={element}/>
          ))}
        </div>
      )}
    </>
  );
}
export default React.memo(Products)