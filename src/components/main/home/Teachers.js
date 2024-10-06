import React, { useEffect, useState } from "react";
import { api } from "../../../http/api";

const Teachers = () => {
  

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(
          "news/"
        );
        setDatas(data);
        console.log(data, "data");
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="teachers">
      <div className="container">
        <h3 onClick={() => alert(JSON.stringify(datas))}>Жаңылыктар</h3>
        <div className="teachers__sliders">
          {/* <Slider {...settings}> */}
            {datas.map((el, index) => (
              <div key={index} className="teachers__sliders--items">
                <img
                  src={el.image}
                  alt=""
                  style={{ width: "254px", height: "250px" }}
                />
                <h5>{el.title}</h5>
                <p>{el.lesson}</p>
              </div>
            ))}
          {/* </Slider> */}
        </div>
        
      </div>
    </section>
  );
};

export default Teachers;