import React from 'react';
import "../../../styles/Services/services.scss";
import { media } from "../../media";

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <h3>Байланышуу учун :</h3>
                <div className="services__general">
                    <div className="services__general--contact">
                        <a href="https://www.instagram.com/infortechnology_">
                            <span style={{ fontSize: media(15, 20) }}>
                                <i className="fab fa-instagram" /> Математика жана Компьютердик Технологиялар факультети.
                            </span>
                        </a>
                        <a href="https://www.instagram.com/oshmpu_mjktf">
                            <span style={{ fontSize: media(15, 20) }}>
                                <i className="fab fa-instagram" /> Информатика жана жаңы маалыматтар технологиясы кафедрасы
                            </span>
                        </a>

                        <a href="https://wa.me/996772621772">
                            <span style={{ fontSize: media(15, 20) }}>
                                <i className="fab fa-whatsapp" /> 0772621772
                            </span>
                        </a>
                
                        {/* Added a valid href or changed to a button */}
                        <a href="https://goo.gl/maps/xyz"> {/* Provide a valid URL or use a button */}
                            <span style={{ fontSize: media(15, 20) }}>
                                <i className="fa-solid fa-location-dot" /> Кыргыз Республикасы 723500, Ош обласу, Ош шаары Исанова 73 а
                            </span>
                        </a>
                    </div>
                    <div className="services__general--map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.194377963102!2d72.82567487634464!3d40.49308457142732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdaf17c407aee7%3A0xe0ca28cf65e6be55!2sOshSPU!5e0!3m2!1sen!2skg!4v1726984497442!5m2!1sen!2skg"
                            title="Map of OshSPU"  // Added title for iframe
                            style={{ border: "none", height: media(280, 450), width: media(300, 600) }}
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

export default Services; // src/components/main/home/services.js
