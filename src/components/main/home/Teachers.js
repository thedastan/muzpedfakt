import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import {data} from "./dataTeachers";
import {api} from "../../../http/api"

const Teachers = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        speed: 500,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    dots: false,
                    centerMode: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false

                }
            }
        ]

    };
    const [datas, setDatas] = useState([])
    useEffect(() => {
        api.get("/teacher/")
            .then(({data}) => {
                setDatas(data)
            })
    }, [])
    const res = datas.filter(el => el.show_main_page === true)

    return (
        <section id="teachers">
            <div className="container">
                <h3 onClick={() => alert(JSON.stringify(datas))}>Жаңылыктар</h3>
                <div className="teachers__sliders">
                    <Slider {...settings}>
                        {res.map(el => (
                            <div className="teachers__sliders--items">
                                <img src={el.image} alt="" style={{width: "254px", height: "250px"}}/>
                                <h5>{el.full_name}</h5>
                                <p>{el.lesson}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/*<div className="teachers__contents">*/}
                {/*    <h5>Мектеп миссиясы:</h5>*/}
                {/*    <p>“К.Эшенкулов атындагы Тору-Айгыр жалпы орто билим берүү мектеби- жалпы орто билим берүүчү мекеме*/}
                {/*        болуу менен бирге, башталгыч, негизги жана жалпы билим берүүгө багытталат. Ата-энелер, коомчулук*/}
                {/*        менен тыгыз байланышта иштөө менен азыркы коомдо натыйжалуу иштөөгө жөндөмдүү, жашоодо өз ордун*/}
                {/*        таба билген, ар тараптан өнүккөн инсанды тарбиялоо”</p>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default Teachers;