import React, { useEffect, useState } from "react";
import { api } from "../../../http/api";
import { Link } from "react-router-dom";

const Teachers = () => {
  

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get("/news/"); // Using api.get with the baseURL
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
          {datas.map((el, index) => (
            <div key={index} className="teachers__sliders--items" >
              <div style={{ width: "254px", height: "250px",  justifyContent: "center",alignItems: "center", overflow: "hidden" }}> 
              <Link to={`/DetailsNew/${el.id}`}> 
                <img
                src={el.image}
                alt=""
                style={{width:"100%",height:"100%", objectFit:"cover",borderRadius:"10px"}}
              />
              </Link>
              </div>
              <h4 style={{fontSize:"14px" , fontWeight:600,textAlign:"center", marginTop:"10px"}}>{el.title}</h4>
              {/* <p>{el.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
