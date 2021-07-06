import "./styles.css";
import SelectSearch from "react-select-search";
import { useRef } from "react";

export default function Search() {
  const searchInput = useRef();
  const options = [
    {
      type: "group",
      name: "Category",
      items: [
        { name: "Cloths", value: "1" },
        { name: "Home Decor", value: "2" },
        { name: "Car", value: "3" },
        { name: "Accessories", value: "4" },
        { name: "Shoes", value: "5" },
        { name: "Electronics", value: "6" },
        { name: "Books", value: "7" },
        { name: "Makeup", value: "8" }
      ]
    }
  ];

  const handleChange = (...args) => {
  
    console.log("ARGS:", args);

    console.log("CHANGE:");
  };


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