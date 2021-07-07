import React, {useState} from 'react';
import "./styles.css";
import SelectSearch, {fuzzySearch} from "react-select-search";
import { useRef } from "react";
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import {
    setCategories
  } from '../../redux/actions/productActions';

const Search = (props) => {

    const dispatch = useDispatch(); 

    const items = [
        { name: "Cloths" },
        { name: "Home Decor" },
        { name: "Car" },
        { name: "Accessories" },
        { name: "Shoes" },
        { name: "Electronics" },
        { name: "Books"},
        { name: "Makeup" }
    ];

    const categoryItems = [
        { name: "Clothes" },
        { name: "Shoes" },
        { name: "Electronics" },
    ];

    const history = useHistory();
    const onSubmit = (e) => {
        console.log(e);
        history.push(`?s=${props.searchQuery}`);
        e.preventDefault();
    };  

    const [categoriesMenu, toggleCategoriesMenu] = useState([false]);

    const toggleCategories = () => {
      toggleCategoriesMenu(!categoriesMenu)
    };

    return(
        <form action="/" method="get" className="filtered-search" onSubmit={onSubmit}>
            <div className="input-button-search">
                <div>
                    <button onClick={() => toggleCategories()}> Dropdown </button>
                    <input
                        className="search-input"
                        value={props.searchQuery}
                        onChange={e => props.setSearchQuery(e.target.value)}
                        type="text"
                        id="header-search"
                        placeholder="Search for products"
                        autoComplete="off"
                        name="s" 
                    />
                    <button type="submit">Search</button>
                </div>
                {categoriesMenu == false ? 
                    <ul className="categories">
                        {categoryItems.map((item, index) => (
                    <li key={index}> 
                        {
                            item.name
                        }
                    </li>
                    ))}
                    </ul> 
                    : null}
            </div>
        </form>
    );
};

function mapStateToProps(state) {
  return { categories: state.productReducer.categories };
}

export default connect(mapStateToProps)(Search);

/*

<SelectSearch
        options={options}
        search
        filterOptions={fuzzySearch}
        placeholder="Search for products"
    />



const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };
    
const SearchBar = ({ searchQuery, setSearchQuery }) => {

    const history = useHistory();
    const onSubmit = e => {
        history.push(`?s=${searchQuery}`)
        e.preventDefault()
    };

    return(
        <form action="/" method="get">
            <input
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search for products"
                name="s" 
            />
            <button type="submit" onSubmit={onSubmit}>Search</button>
        </form>
    );
};

export default SearchBar;
  const handleFilter = (items) => {
    return (searchValue) => {
      if (searchValue.length === 0) {
        return options;
      }
      const updatedItems = items.map((list) => {
        const newItems = list.items.filter((item) => {
          return item.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        return { ...list, items: newItems };
      });
      return updatedItems;
    };
  };

  return (
    <div className="App">
      <SelectSearch
        ref={searchInput}
        options={options}
        filterOptions={handleFilter}
        value=""
        name="Product"
        placeholder="Search Product"
        search
        onChange={handleChange}
      />
    </div>
  );
}
*/
