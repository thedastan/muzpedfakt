import React, { useEffect, useState } from "react";
import { api } from "../../http/api";

const Science = () => {
  const [science, setScience] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await api.get("/science/");
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
    <section id="science" style={{padding:"200px 0"}}>
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

export default Science;
