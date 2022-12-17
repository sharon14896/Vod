import React from 'react';
import Header from '../../Layout/Header/Header';
import Home from '../home/Home';
import "./Carrousel.css";


const Carrousel = () => {
  return (
    <section className="home bg-dark">
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-controls">
            <div className="carousel-indicators ">
              <button
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="0"
                className="active lg-mt-5"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
          </div>
       
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{
                backgroundImage:
                  "url('https://images.hdqwalls.com/download/fast-9-imax-5k-g0-1920x1024.jpg')",
              }}
            >
              <div className="container ">
                <h2> comedy to all family</h2>
                <div className="form mx-auto mb-sm-8">
                  <input
                    className="input"
                    placeholder="Type your text"
                    required=""
                    type="text"
                  />
                  <span className="input-border"></span>
                </div>
              </div>
            </div>
            <div
              className="carousel-item active"
              style={{
                backgroundImage:
                  "url('https://images.hdqwalls.com/download/tom-and-jerry-2021-10k-uu-1920x1024.jpg')",
              }}
            >
              <div className="container ">
                <h2> comedy to all family</h2>
                <div className="form mx-auto mb-sm-8">
                  <input
                    className="input"
                    placeholder="Type your text"
                    required=""
                    type="text"
                  />
                  <span className="input-border"></span>
                </div>
              </div>
            </div>
            <div
              className="carousel-item "
              style={{
                backgroundImage:
                  "url('https://images.hdqwalls.com/download/zack-synders-justice-leagues-98-1920x1024.jpg')",
              }}
            >
              <div className="container">
                <h2> the only good one </h2>
                <div className="form mx-auto mb-sm-8">
                  <input
                    className="input"
                    placeholder="Type your text"
                    required=""
                    type="text"
                  />
                  <span className="input-border"></span>
                </div>
              </div>
            </div>
            <div
              className="carousel-item "
              style={{
                backgroundImage:
                  "url('https://images.hdqwalls.com/download/sonic-the-hedgehogart-ma-1920x1024.jpg')",
              }}
            >
              <div className="container">
                <h2> the only good one </h2>
                <div className="form mx-auto mb-sm-8">
                  <input
                    className="input"
                    placeholder="Type your text"
                    required=""
                    type="text"
                  />
                  <span className="input-border"></span>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage:
                  "url('https://images.hdqwalls.com/download/birds-of-prey-movie-4k-e7-1920x1024.jpg')",
              }}
            >
              <div className="container">
                <h2> tell me why?</h2>
                <div className="form mx-auto mb-sm-8">
                  <input
                    className="input"
                    placeholder="Type your text"
                    required=""
                    type="text"
                  />
                  <span className="input-border"></span>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          <Header/>
        </div>
          <div>
          <Home/>
        </div>
      </section>
  )
}

export default Carrousel