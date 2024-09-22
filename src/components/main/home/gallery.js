import React from 'react';
import img1 from './../../../images/img1.jpg'
import img2 from './../../../images/img2.webp'
import img3 from './../../../images/img3.webp'
import img4 from './../../../images/img4.jpg'
import img5 from './../../../images/img6.webp'

const Gallery = () => {
    return (
        <section id="gallery">
            <div className="container">
                <div className="gallery-general">
                    <h1 className="gallery-general__title">Факультеттин галереясы</h1>
                    <div>
                        <img src={img1} alt="img" style={{objectFit:"contain"}} className='gallery-general__img'/>
                        <span>
                        <img src={img2} alt="img" style={{objectFit:"cover"}} className='gallery-general__img2' />
                        <img src={img3} alt="img" style={{objectFit:"cover"}} className='gallery-general__img2'/>
                        </span>
                        <span>
                        <img src={img4} alt="img" style={{objectFit:"cover"}} className='gallery-general__img3' />
                        <img src={img5} alt="img" style={{objectFit:"cover"}} className='gallery-general__img3' />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;