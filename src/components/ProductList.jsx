import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../slices/productSlice';
import '../App.css';

const ProductList = () => {
   const dispatch = useDispatch();
   const products = useSelector(state => state.products.list);
   const selectedCategory = useSelector(state => state.categories.selectedCategory);
   const [page, setPage] = useState(1);
   const pageSize = 10;

   useEffect(() => {
      dispatch(fetchProducts({ category: selectedCategory, page, size: pageSize }));
   }, [selectedCategory, page, dispatch]);

   const handleLoadMore = () => {
      setPage(page + 1);
   };

   return (<>
      <div className="product-list">
         {products.map((product, id) => (
            <div className="product-card" key={id}>
               <img src={product.thumbnail} alt={product.title} />
               <h3>{product.title}</h3>
               <p>{product.description}</p>
            </div>
         ))}
      </div>
      <button onClick={handleLoadMore} className="load-more">Load More</button>
   </>
   );
};

export default ProductList;
