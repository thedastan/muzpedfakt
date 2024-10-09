import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../http/api";
import "../../styles/CategoryDetails/categoryDetails.scss";
import Spiner from "../../components/main/Spiner";
import { CiSaveDown2 } from "react-icons/ci";

const ScienceDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  useEffect(() => {
    api.get(`/science/detail/${id}`)
      .then(({ data }) => {
        setData(data);  
        setLoading(false);  
      })
      .catch((error) => {
        console.error("Error fetching detail data", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div style={{ padding: "200px" }}>
        <Spiner />  
      </div>
    );
  }

  if (!data) {
    return <div style={{ padding: "200px" }}>No data found</div>;
  }

  return (
    <section id="CategoryDetail" style={{ minHeight: "80vh", padding: "150px 0" }}>
      <div className="container">
        <div className="block">
          <h1>{data.name}</h1>  

          <div className="cards">
            {data.sciences && data.sciences.length > 0 ? (
              data.sciences.map((science, index) => (
                <div className="box" key={index}>
                  <div className="card">
                    <h2>{science.name_file}</h2> 
                    <a href={science.file} style={{ color: "black" }} target="_blank" rel="noopener noreferrer">
                      PDF file
                    </a>  

                    <a className="dow" href={science.file} style={{ color: "black" }} download>
                      <CiSaveDown2 />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No files available</p>  
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceDetail;
