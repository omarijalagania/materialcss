import React from 'react';
import cardImg from '../../Assets/card.jpg';
import '../Cards/Cards.css';

const Cards = () => {

    return(
        <React.Fragment>
            <section className="container">
            <div className="row">
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image">
                            <img src={cardImg} alt="card" />
                            <span className="card-title">Some Title</span>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.
                            </p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image">
                            <img src={cardImg} alt="card" />
                            <span className="card-title">Some Title</span>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.
                            </p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image">
                            <img src={cardImg} alt="card" />
                            <span className="card-title">Some Title</span>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.
                            </p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </React.Fragment>
    );
}

export default Cards;