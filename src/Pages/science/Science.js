import React, { useEffect, useState } from "react";
import "../../styles/Chronology/chronology.scss";
import { media } from "../../components/media";
import { api } from "../../http/api";
import Spiner from "../../components/main/Spiner";
import { Link } from "react-router-dom";

const Science = () => {
  const [dataCh, setDataCh] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await api.get("/science/");  
      setDataCh(data);
      console.log(data, "datascience");
    } catch (error) {
      console.error("Error fetching accreditation data", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  return (
    <section id="chronology" style={{  padding:"200px 0" }}>
      <div className="container">
        <h1>Илимий иштер</h1>
        <div className="chronology__general">
          {dataCh.length > 0 ? (
            dataCh?.map((el) => (
              <div className="chronology__general--datas">
                <div className="chronology__general--datas--data">
                  
                  <div
                    className="chronology__general--datas--data__titles"
                    style={{ width: media(300, 510) }}
                  >
                    <Link to={`/DetailsSc/${el.id}`}>
                      <h3>{el.name}</h3>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ marginTop: "150px" }}>
              <Spiner />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Science;

