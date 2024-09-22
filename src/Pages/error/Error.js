import React from 'react';
import {Link} from "react-router-dom";
import "../../styles/Error/error.scss"
import {media} from "../../components/media";

const Error = () => {

    return (
        <div style={{minHeight: "95vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className="error">
                <div>
                    <h1 style={{marginBottom: media(40, 150), marginTop: media(80, 0), fontSize: media(14, 27)}}>мындай баракча жок</h1>
                </div>
                <div>
                    <h2 style={{fontSize: media(80, 270), marginBottom: media(50,150)}}>404</h2>
                </div>
                <div>
                    <Link to="/">
                        <button style={{padding: `${media(7,10)} ${media(20,60)}`}}>Башкы бетке</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;