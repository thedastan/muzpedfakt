import React, {useState, useEffect} from 'react';
import {api} from "../../http/api";
import ModalProgramm from "../../components/main/modalProgramm";
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
    const fill = data?.filter((el) => el.which_accred === "Программалык")

    const click = (el) => {
        setDataModal(el.files)
        setModal2(true)
    }

    return (
        <section id="program" style={{minHeight: "75vh"}}>
            <ModalProgramm setModal2={setModal2} modal2={modal2} dataModal={dataModal}/>
            <div className="container">
                <div className="program-general">
                    <h1 className="program-general__title">Программалык акккредитация</h1>

                    <div className="program-general__block">
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