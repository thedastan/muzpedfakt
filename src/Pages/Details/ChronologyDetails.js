import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../http/api";
import "../../styles/CategoryDetails/categoryDetails.scss";

import { media } from "../../components/media";
import Spiner from "../../components/main/Spiner";
import { CiSaveDown2 } from "react-icons/ci";

const ChronologyDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    api.get(`/department/detail/${id}`).then(({ data }) => {
      setData(data);
    });
  }, [data]);

  console.log(data, "categoryDatail");
  return (
    <section id="CategoryDetail" style={{ minHeight: "80vh", padding:"150px 0" }}>
      <div className="container">
        {data ? (
          <div className="block">
            <h1>{data.which_dep}</h1>

             
            <div className="cards">
             
              {data.departments.map((department, index) => (
                 <div className="box">
                 <div key={index} className="card">
                  <h2>{department.name_file}</h2>
                  <a href={department.file} style={{color:"black"}} target={"_blank"}>PDF file</a>

                  <a className="dow" href="/path/to/file.pdf" style={{color: "black"}} download><CiSaveDown2 /></a>

                </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ marginTop: "120px" }}>
            <Spiner />
          </div>
        )}
      </div>
    </section>
  );
};

export default ChronologyDetails;