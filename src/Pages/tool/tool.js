import React, {useEffect, useState} from 'react';
import {api} from "../../http/api";
import ModalIns from "../../components/main/modalIns";
import Spiner from "../../components/main/Spiner";

const Tool = () => {
    const [modal2, setModal2] = useState(false)
    const [data, setData] = useState([])
    const [dataModal, setDataModal] = useState({})
    useEffect(() => {
        window.scrollTo(0, 0)
        api("/accreditation")
            .then(({data}) => {
                setData(data)
            })
    }, [])
    const fill = data?.filter((el) => el.which_accred === "Институционалдык")

    const click = (el) => {
        setDataModal(el.files)
        setModal2(true)
    }

    return (
        <section id="tool" style={{minHeight: "75vh"}}>
            <ModalIns setModal2={setModal2} modal2={modal2} dataModal={dataModal}/>
            <div className="container">
                <div className="tool-general">
                    <h1 className="tool-general__title">Институционалдык акккредитация</h1>
                    <div className="tool-general__block">
                        {
                            fill.length > 0 ? fill.map(el => (
                                <button onClick={() => click(el)}>{el.name}</button>
                            )) : <Spiner/>
                        }

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Tool;