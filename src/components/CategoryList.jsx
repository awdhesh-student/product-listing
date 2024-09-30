import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, selectCategory } from '../slices/categorySlice.js';

const CategoryList = () => {
   const dispatch = useDispatch();
   const categories = useSelector(state => state.categories.list);
   const selectedCategory = useSelector(state => state.categories.selectedCategory);

   useEffect(() => {
      dispatch(fetchCategories());
   }, [dispatch]);

   return (
      <select
         value={selectedCategory || ''}
         onChange={(e) => dispatch(selectCategory(e.target.value))}
      >
         <option value="">All Categories</option>
         {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
               {category.name}
            </option>
         ))}
      </select>
   );
};

export default CategoryList;
