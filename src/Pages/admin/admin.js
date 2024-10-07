import React, { useEffect, useState } from "react";
import { api } from "../../http/api";

const Admin = () => {
  const [admin, setAdmin] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await api.get("administration/"); // Using axios with full URL
      setAdmin(data);
      console.log(data, "data");
    } catch (error) {
      console.error("Error fetching administration data", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  return (
    <section id="admin" style={{ padding:"200px 0" }}>
      <div className="container">
        <div className="admin-general">
          <h1 className="admin-general__title">Администрация</h1>
        </div>
        {admin.length > 0 ? (
          <div className="admin-general__block">
            {admin?.map((el) => {
              return (
                <div className="admin-general__block__square" key={el.id}>
                  <div className="admin-general__block__square__img">
                    <img src={el?.image} alt="img" />
                  </div>
                  <h1>{el?.fullname}</h1>
                  <p>{el?.lesson}</p>
                  <p>{el?.position}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ marginTop: "150px", textAlign: "center" }}>
            <h2>Малымат жок</h2> {/* Display message when there's no data */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Admin;
