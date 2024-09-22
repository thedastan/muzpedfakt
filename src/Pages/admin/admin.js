import React from 'react';
// import admin from "./../../images/muga.png"
import {useEffect, useState} from "react";
import {api} from "../../http/api";
import Spiner from "../../components/main/Spiner";

const Admin = () => {
    const [admin, setAdmin] = useState([])
    useEffect(() => {
        window.scrollTo(0,0)
        api("/administration")
            .then(({data}) => {
                setAdmin(data)
            })
    }, [])
    console.log(admin)
    return (
        <section id="admin" style={{minHeight: "75vh"}}>
            <div className="container">
                <div className="admin-general">
                    <h1 className="admin-general__title">Администрация</h1>
                </div>
                {
                    admin.length > 0 ?
                        <div className="admin-general__block">
                            {
                                admin?.map(el => {
                                    return (
                                        <div className="admin-general__block__square" key={el.id}>
                                            <div className="admin-general__block__square__img"><img src={el?.image}
                                                                                                    alt="img"/></div>
                                            <h1>{el?.fullname}</h1>
                                            <p>{el?.lesson}</p>
                                            <p>{el?.position}</p>
                                        </div>
                                    )
                                })}
                        </div>
                        :
                        <div style={{marginTop: "150px"}}>
                            <Spiner/>
                        </div>
                }
            </div>
        </section>
    );
};

export default Admin;