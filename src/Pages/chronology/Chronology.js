import React, { useEffect, useState } from "react";
import "../../styles/Chronology/chronology.scss";
import { media } from "../../components/media";
import { api } from "../../http/api";
import Spiner from "../../components/main/Spiner";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const Chronology = () => {
  const [dataCh, setDataCh] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await api.get("/department"); // Using axios with full URL
      setDataCh(data);
      console.log(data, "data");
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
        <h1>Кафедра</h1>
        <div className="chronology__general">
          {dataCh.length > 0 ? (
            dataCh?.map((el) => (
              <div className="chronology__general--datas">
                <div className="chronology__general--datas--data">
                  <div>
                    {el.url_video ? (
                      <div
                        style={{
                          width: media(280, 200),
                          height: media(150, 300),
                        }}
                        className="player"
                      >
                        <ReactPlayer
                          url={el.url_video}
                          style={{
                            width: media(280, 200),
                            height: media(150, 300),
                          }}
                        />
                      </div>
                    ) : (
                      <img
                        src={el.image}
                        alt="img"
                        style={{
                          width: media(280, 500),
                          height: media(150, 300),
                        }}
                      />
                    )}
                  </div>

                  <div
                    className="chronology__general--datas--data__titles"
                    style={{ width: media(300, 510) }}
                  >
                    <Link to={`/Details/${el.id}`}>
                      <h3>{el.which_dep}</h3>
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

export default Chronology;
