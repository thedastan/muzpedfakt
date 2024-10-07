import React, { useEffect, useState } from "react";
import { api } from "../../http/api";

const Curriculum = () => {
  const [science, setScience] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await api.get("/curriculum/");
      setScience(data);
      console.log(data, "data");
    } catch (error) {
      console.error("Error fetching accreditation data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section style={{padding:"200px 0"}} id="science">
      <div className="container">
        <div className="science">
          {science.map((el) => (
            <div className="">
              <h1>{el.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
