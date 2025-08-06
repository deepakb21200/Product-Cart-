import React, { useEffect, useRef, useState } from 'react'
import Product_Each from './Product_Each';
import { categories } from '../Categories/categories';
import { useDispatch, useSelector} from 'react-redux';
import { combinedset, data1, data2, indiarate } from '../Reducer/reducer';
import Header from '../Components/Header'


function Home() {
 let dispatch = useDispatch()
 useSelector((state) => state.allCombineData)

 


 
let arr = []

const [first, setfirst] = useState([])




     useEffect(() => {

    const fetchAllCategoriesData = async () => {
      try {
        // let res2 = await fetch("https://v6.exchangerate-api.com/v6/1549cab85e4125398dcd8dfe/latest/USD")
        // let new_res2 = await res2.json()
        // console.log(new_res2.conversion_rates.INR)

        // dispatch(indiarate(new_res2.conversion_rates.INR))


        const promises = categories.map(async (category) => {
         var res = await fetch(
            `https://dummyjson.com/products/category/${category}`
          );
          return await res.json();
        });

        
        var allCategoryData = await Promise.all(promises)
        // console.log(allCategoryData,"main")
        dispatch(data1(allCategoryData))

        // console.log(...allCategoryData,"alls");
        
        allCategoryData.map((element)=>{
               arr.push(...element.products)     
        })
        // console.log(arr);
      setfirst(arr)
      dispatch(combinedset(arr))
     
      dispatch(data2(setfirst))

      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchAllCategoriesData()
  }, []);

  return (
  <>
  <Header data = {first} data2={setfirst}/>
   {first.length === 0 ? (<h2>No products found</h2>) : (
        <div  className='xl:w-[88vw] mx-auto flex flex-wrap xl:gap-[2vw] w-[90vw] 
        xl:justify-start gap-[4vw] lg:gap-[1vw]'>   
          
          {first.map((element, index) => ( 
            <Product_Each key={index} data={element} />
          ))}
        </div>
      )}
 </>
  )
}

export default Home