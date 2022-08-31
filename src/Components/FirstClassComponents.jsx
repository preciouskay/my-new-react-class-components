 import React, { Component } from "react";
import { Card } from "./card";
import { Rows } from "./ThirdSection";
import { Footer } from "./FourthSection";
import './Presh.css'
export default class FirstClassComponents extends Component {
  render() {
    return (
      <div className="bg-dark " style={{ fontFamily: "monospace" }}>
        <h2 className="text-center text-white pt-3 ">Welcome To New App </h2>
        <div className="container mt-5">
          <div className="row justify-content-center ">
            <div className="col-lg-6 col-md-12 col-sm-12  my-auto  text-center text-light">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                maxime! Maxime quos quas laboriosam eum non quibusdam recusandae
                quia incidunt! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Iure ipsam reprehenderit dolorem aspernatur
                veniam hic tempore laudantium, rem cumque odio molestiae,
                maiores debitis quo eum? Odit esse voluptates quas molestias.
              </p>
            </div>
            <div className="col-lg-3 col-md-5   headerimg py-3 ">
              <Card img="https://images.unsplash.com/photo-1596205521983-9c372fb3d4f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
            </div>
            <div className="col-lg-3 col-md-5   headerimg py-3 ">
              <Card img="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
            </div>
          </div>
        </div>
        {/* secondcomponents */}

        <div className="bg-info py-3">
          <div className="container">
            <div className="row py-4">
              <div>
                <p className="text-center col ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate deserunt non molestias. Officiis rem voluptatibus
                  iste, velit minima pariatur sit sint perspiciatis tempore
                  voluptatem quae corporis nihil iusto fugit error modi facilis
                  cumque maiores animi et adipisci. Vel sunt nesciunt ut id
                  necessitatibus. Facere corrupti soluta quo, minus quidem et!
                </p>
              </div>
              <div className="  text-center  pt-3 ">
                <button className="bg-dark text-white ms-5 px-3 py-2 border-0 rounded-pill ">
                  Click Here
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* thirdcomponents */}
        <div className="container py-4">
          <h2 className="text-white text-center">App Screeenshots</h2>
          <p className="text-center text-white ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            aperiam officia aliquam natus eum praesentium sunt qui sed assumenda
            maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nulla, esse.
          </p>
          <div className="row py-4  ">
            <div className="col-lg-3  col-md-6 mb-3">
              <Rows />
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <Rows />
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <Rows />
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <Rows />
            </div>
          </div>
        </div>
        {/* fourthsection */}
        <div className="bg-primary">
          <div className="container py-3">
            <h2 className="text-white text-center py-4">App Pricing</h2>

            <div className="row ">
              <div className="col-lg-4 mb-3">
                <Footer amount="$50" />
              </div>
              <div className="col-lg-4 mb-3">
                <Footer amount="$120" />
              </div>
              <div className="col-lg-4 mb-3">
                <Footer amount="$200" />
              </div>
            </div>
          </div>
        </div>
         

         <div className="container">

         </div>
      </div>
    );
  }
}
