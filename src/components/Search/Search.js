import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css"

let tempProducts = [
  "Blonde Espresso Roast",
  "Veranda Blend",
  "Starbucks Frappuccino",
  "Starbucks House Blend",
  "Hibiscus Tea",
  "Youthberry Tea",
  "Starbucks Seri Desenli",
  "Coffee Press",
  "Coffee Press V2",
  "Starbucks Klasik Seri",
  "Starbucks 50. Yıl",
];

const Search = () => {
  const [searchKey, setSearhKey] = useState("");
  const [productList, setProductList] = useState(tempProducts);
  const findProducts = () => {
    let filteredProducts = tempProducts.filter((p) =>
      p.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())
    );
    setProductList(filteredProducts);

  };

  return (
    <>
      <div className="arama">
        <input
          className="aramaInput"
          placeholder="  Aradığınız ürünü yazınız"
          onKeyUp={(e) => {
            setSearhKey(e.target.value);
            if (searchKey.length > 2) {
              findProducts();
            }
          }}
        />

    {productList.length > 0 && searchKey.length > 2 ? (
      <ul>
        {productList.map((item) => (
          <li key={item.id}>{item}</li>
        ))}
      </ul>
    ) : null}

      </div>
      <button className="searchButton">
        <FaSearch className="searchIcon" />
      </button>
    </>
  );
};

export default Search;
