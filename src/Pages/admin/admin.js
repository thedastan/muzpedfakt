import React, { useEffect, useState } from "react";
import { api } from "../../http/api";
import { media } from "../../components/media";
import { Link } from "react-router-dom";

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

  console.log(admin,"admin");
  

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  return (
     <>
     {/* <section id="admin" style={{ padding:"200px 0" }}>
      <div className="container">
        <div className="admin-general">
          <h1 className="admin-general__title">Факультет</h1>
        </div>
        {admin.length > 0 ? (
          <div className="admin-general__block">
            {admin?.map((el) => {
              return (
                <div className="admin-general__block__square" key={el.id}>
                  <div className="admin-general__block__square__img">
                    <img src={el?.image} alt="img" />
                  </div>
                  <div style={{display:"flex",flexDirection:"column", alignItems:"center",textAlign:'center'}}> 
                  <h1>{el?.fullname}</h1>
                  <p>{el?.lesson}</p>
                  <p>{el?.position}</p> 
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ marginTop: "150px", textAlign: "center" }}>
            <h2>Малымат жок</h2>  
          </div>
        )}
      </div>
    </section> */}
     <section id="chronology" style={{  padding:"200px 0" }}>
      <div className="container">
        {/* <h1>Илимий-изилдөө иштери</h1> */}
        <div className="chronology__general">
          {admin.length > 0 ? (
            admin?.map((el) => (
              <div className="chronology__general--datas">
                <div className="chronology__general--datas--data">
                  
                  <div
                    className="chronology__general--datas--data__titles"
                    style={{ width: media(300, 510) }}
                  >
                    <Link to={`/adminDetails/${el.id}`}>
                      <h3>{el.fullname}</h3>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ marginTop: "150px", textAlign: "center" }}>
            <h2>Малымат жок</h2>  
          </div>
          )}
        </div>
      </div>
    </section>
     </>
  );
};

export default Admin;
