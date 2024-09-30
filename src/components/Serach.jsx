import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../slices/productSlice.js';

const Search = () => {
   const dispatch = useDispatch();
   const [searchTerm, setSearchTerm] = useState('');

   const handleSearch = (e) => {
      e.preventDefault();
      dispatch(searchProducts(searchTerm));

   };

   return (
      <form onSubmit={handleSearch}>
         <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products"
         />
         <button type="submit">Search</button>
      </form>
   );
};

export default Search;
