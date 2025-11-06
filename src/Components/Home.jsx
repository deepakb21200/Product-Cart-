import React, { useEffect, useState } from 'react'
import Product_Each from './Product_Each';
import { categories } from '../Categories/categories';
import { useDispatch, useSelector} from 'react-redux';
import { all_products,  data1} from '../Reducer/reducer';
import Header from '../Components/Header'

import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';

function Home() {
 let dispatch = useDispatch()
  let [allProducts, setAllProducts] = useState([])  
  let [hasMore, setHasMore] = useState(true);
 
  let [visibleProducts, setVisibleProducts] = useState([]); 

let [savedState] = useState(() => {
  let cartState = localStorage.getItem("cartDetails");
  if (cartState) {
    let parsed = JSON.parse(cartState);
    
    return parsed || [];
  }

  
  return [];
})

 
     useEffect(() => {

    let fetchAllCategoriesData = async () => {
      try {
        let promises = categories.map(async (category) => {
         let res = await fetch(`https://dummyjson.com/products/category/${category}`);
          return await res.json();
        })
        let allCategoryData = await Promise.all(promises)     
        let arr = []
        dispatch(data1(allCategoryData))
       

   

allCategoryData.forEach((element) => {
  element.products.forEach((product) => {
 
    //by default clicked value false
    let alreadyClickedProduct = savedState.find(p => p.id === product.id);
 
    

    arr.push({
      ...product,
      isclicked: alreadyClickedProduct ? alreadyClickedProduct.isclicked : false,
      price: Math.floor(product.price*85)
    });
  });
});


// console.log(arr);

          setAllProducts(arr)       
 
          
      dispatch(all_products(arr))
 

      } catch (error) {
        console.error("Error fetching category data:", error.message);
      }
    };

    fetchAllCategoriesData()
  }, []);
  

useEffect(() => {

  if (allProducts.length > 0) {
  setVisibleProducts(allProducts.slice(0, 10));
  setHasMore(allProducts.length > 10);
 
       

    }

}, [allProducts]);


let fetchMoreData = () => {
  let nextProducts = allProducts.slice(visibleProducts.length, visibleProducts.length + 10);
  setVisibleProducts([...visibleProducts, ...nextProducts]);
  setHasMore(visibleProducts.length + nextProducts.length < allProducts.length);
};


  return (
  <>

       <Header data={allProducts} data2={setAllProducts} />
      {allProducts.length === 0 ?   <Loader/>: (
        <InfiniteScroll dataLength={visibleProducts.length} next={fetchMoreData}
         hasMore={hasMore}  scrollThreshold="250px" 
          loader={<div className="w-full text-center py-4" >
            <span>Loading...</span>
            </div>}>

            <div className="w-[90vw]  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                gap-[5px] lg:justify-start xl:flex xl:flex-wrap  xl:gap-[6vw] place-items-center 
                items-stretch 2xl:gap-[1vw]  ">

            {visibleProducts.map((element, index) => (
              <Product_Each key={index} data={element} />
            ))}
          </div>
        </InfiniteScroll>
      )}

 </>
  )
}

export default Home