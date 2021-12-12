import React, { useEffect, useState } from "react";
import axios from "axios";
import "./elements.css";
import Category from "./Category";
const Elements = () => {
  const [categorys, setCategorys] = useState([]);
  const [id, setId] = useState("flexSwitchCheckChecked");
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://619b61042782760017445573.mockapi.io/api/v1/getBanner/1"
      );
      setCategorys(response.data.accordian);
    }
    fetchData();
  }, []);

  return (
    <div className="contain">
      <div className="elements">
        {categorys.map((category) => (
          <Category category={category} />
        ))}
      </div>
    </div>
  );
};

export default Elements;
