import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../http/api";
import "../../styles/CategoryDetails/categoryDetails.scss";
import Spiner from "../../components/main/Spiner";

const TeachersDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    api.get(`/news/detail/${id}`)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
        console.log(data);  // Check the structure of `data`
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
          <img src={data.image} alt={data.title} style={{ maxWidth: "100%", height: "auto" }} />
          <h1>{data.title}</h1>

          <p style={{width:"80%"}}>{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default TeachersDetails;
