import React, {useEffect, useState} from 'react';
import {api} from "../../http/api";

const ModalIns = ({modal2, setModal2, dataModal}) => {

    const [dataFill, setDataFill] = useState([])

    useEffect(() => {
        api('/files')
            .then(({data}) => {
                setDataFill(data)
            })
    }, [])
    const arr = []
    for (let i = 0; i < dataFill.length; i++) {
        for (let j = 0; j < dataModal.length; j++) {
            arr.push(dataFill[i].id === dataModal[j] && dataFill[i])
        }
    }
    const arrFil = arr.filter(el => el !== false)

    return (
        <div>
            {
                modal2 && <div className="tool-general__modal">
                    <div className="tool-general__modal__block">
                        <h1 onClick={() => setModal2(false)}>Жабуу</h1>
                        <div>
                            <ul className="tool-general__modal__block__nav">
                                {
                                    arrFil.map(el => (
                                        <li><a href={el.file} target="_blank">{el.name_file}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ModalIns;