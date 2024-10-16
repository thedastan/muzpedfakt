import { useEffect, useState } from "react";
import { api } from "../../../http/api";


import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Gallery = () => {

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get("/gallery/"); // Using api.get with the baseURL
        setDatas(data);
        console.log(data, "dataGalarea");
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="teachers">
      <div className="container">
        <h3 onClick={() => alert(JSON.stringify(datas))}>Факультеттин галереясы</h3>
        <div style={{display:"flex",flexWrap:"wrap"}} className="teachers__sliders">
          {datas.map((el, index) => (
            <div key={index} className="teachers__sliders--items" >
              <div style={{ width: "250px", height: "100%",  justifyContent: "center",alignItems: "center", overflow: "hidden" }}> 
                <Zoom> 
                <img
                src={el.image}
                alt=""
                style={{width:"100%",height:"100%", objectFit:"cover",borderRadius:"10px"}}
              />
              </Zoom>
              
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

export default Gallery;
 