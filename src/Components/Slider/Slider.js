import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/jquery/dist/jquery';
import '../../../node_modules/materialize-css/dist/js/materialize';
import '../../../node_modules/materialize-css/dist/css/materialize.css';
import carouselOne from '../../Assets/carousel_1.jpg';
import carouselTwo from '../../Assets/carousel_2.jpg';
import carouselThree from '../../Assets/carousel_3.jpeg';
import '../Slider/Slider.css';
const Slider = () => {
    return(
        <section className="slider" i="home">
            <ul className="slides">
                <li>
                    <img src={carouselOne} alt="image1"/>
                    <div className="caption center-align">
                        <h2>Traver in Mountains</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi tenetur neque, veniam!
                        </h5>
                        <Link to="!#" className="btn btn-large red">learn More</Link>
                    </div>
                </li>
                <li>
                    <img src={carouselTwo} alt="image2"/>
                    <div className="caption center-align">
                        <h2>Traver in Mountains</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi tenetur neque, veniam!
                        </h5>
                        <Link to="!#" className="btn btn-large red">learn More</Link>
                    </div>
                </li>
                <li>
                    <img src={carouselThree} alt="image3"/>
                    <div className="caption center-align">
                        <h2>Traver in Mountains</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi tenetur neque, veniam!
                        </h5>
                        <Link to="!#" className="btn btn-large red">learn More</Link>
                    </div>
                </li>
            </ul>
        </section>
    );
}


export default Slider;