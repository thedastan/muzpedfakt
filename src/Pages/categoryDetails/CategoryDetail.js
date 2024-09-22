import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {api} from "../../http/api";
import "../../styles/CategoryDetails/categoryDetails.scss"
import {media} from "../../components/media";
import Spiner from "../../components/main/Spiner";

const CategoryDetail = () => {
    const {id} = useParams()
    const [data, setData] = useState(false)
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    useEffect(() => {
        api.get(`/category/detail/${id}`)
            .then(({data}) => {
                setData(data)
            })
    }, [data])

    console.log(data, "categoryDatail")
    return (
        <section id="CategoryDetail" style={{minHeight: "75vh"}}>
            <div className="container">
                {
                    data ? <>
                        <h1>{data?.name}</h1>
                        <iframe src={data?.file} style={{width: "100%", height: media(200, 600)}}/>
                    </> : <div style={{marginTop: "120px"}}><Spiner/></div>
                }

                {/*<iframe jsname="L5Fo6c" jscontroller="usmiIb" jsaction="rcuQ6b:WYd;"*/}
                {/*        className="YMEQtf L6cTce-purZT L6cTce-pSzOP KfXz0b"*/}
                {/*        sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-modals"*/}
                {/*        frameBorder="0" aria-label="Document, Документ Google" allowFullScreen=""*/}
                {/*        src="https://docs.google.com/document/d/1NcDnTDCUH9KHnvpldh2bX2246-L2tRNE/preview"/>*/}
            </div>
        </section>
    );
};

export default CategoryDetail;