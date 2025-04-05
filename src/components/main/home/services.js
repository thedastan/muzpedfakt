 
import React from "react";
import "../../../styles/Services/services.scss";
import { media } from "../../media";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h3>Байланышуу үчүн :</h3>
        <div className="services__general">
          <div className="services__general--contact">
            
            <a href="https://www.instagram.com/oshmpu.muz_ped_fak?igsh=ZjVsYWFrdjVocXI=">
              <span style={{ fontSize: media(15, 20) }}>
                <i className="fab fa-instagram" />
                Музыкалык-педагогикалык факультети
              </span>
            </a>
            <a href="https://wa.me/0505011902">
              <span style={{ fontSize: media(15, 20) }}>
                <i className="fab fa-whatsapp" />  0505-01-19-02
              </span>
            </a>

            
            <button
              onClick={() => console.log('Location clicked')}
              style={{
                fontSize: media(15, 20),
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign:"start",
                marginTop:"20px"
              }}
            >
              <i className="fa-solid fa-location-dot" /> Кыргыз Республикасы
              723500, Ош обласу, Ош шаарыИсанова 73 а
            </button>
          </div>
          <div className="services__general--map">
            <iframe
              title="Map showing the location of OshSPU"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.194377963102!2d72.82567487634464!3d40.49308457142732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdaf17c407aee7%3A0xe0ca28cf65e6be55!2sOshSPU!5e0!3m2!1sen!2skg!4v1726984497442!5m2!1sen!2skg"
              style={{
                border: "none",
                height: media(280, 450),
                width: media(300, 600),
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


