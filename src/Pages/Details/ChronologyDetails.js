import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../http/api";
import "../../styles/CategoryDetails/categoryDetails.scss";

import Spiner from "../../components/main/Spiner";

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
    <section id="CategoryDetail" style={{ padding:"200px 0"}}>
      <div className="container">
        {data ? (
          <>
            <h1>{data?.which_dep}</h1>
          </>
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
