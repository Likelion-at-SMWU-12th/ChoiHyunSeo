import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CatList.css";

const CatList = () => {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/cats")
      .then((response) => {
        setCats(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCats = cats.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>🐾 사지 말고, 입양하세요! 🐾</h1>
      <h3 className="subtitle">귀여운 고양이들의 매력에 푹 빠져보세요!</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="고양이 이름 검색..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <ul>
        {filteredCats.map((cat) => (
          <li key={cat.id} className="cat-item">
            <div className="cat-info">
              <h2>{cat.name}</h2>
              <p>추정 나이: {cat.age}</p>
              <p>등록 날짜: {cat.when}</p>
              <p>설명: {cat.scripts}</p>
              <p>입양 여부: {cat.adopt}</p>
            </div>
            <img src={cat.imageUrl} alt={cat.name} className="cat-image" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatList;
