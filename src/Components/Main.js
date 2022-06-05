import React, { useRef, useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";


export default function Main(props){

    return(
        <main>
        <img src={require("../Resources/Intro.jpg")} id="intro" />
        <div className="text-intro">
        <div class="first-text">
          <span className="first-line">
            Support <span className="or">or</span> Create
          </span>{" "}
          <br />
          <span className="start-up-word">start-ups</span>
        </div>
        {!props.currentUser?.user_username && <Link class="reg-button" to='/register'> Sing up </Link>}

        {props.currentUser?.user_username ? <Link class="create-button" to='/createStartUp' style={{right: '38%'}}>Create start-up</Link> : <Link class="create-button" to='/register'>Create start-up</Link>}
        <div>
          <button class="down">Click Me!</button>
        </div>
        </div>
        <div className="first-parag">
          <div>
          <h3>Contribute to idea you like</h3>
          <p>Choose among thousands of new start-ups. Support the one you'd like to. Help new breathtaking ideas to be brought to life.
            Track what happens to what you donated easily, be sure your money are used the best way 
          </p>
          </div>
          <div className="carcar">
          <Carousel interval={null}>
  <Carousel.Item>
    <img
      className="d-block w-100 carim"
      src={require("../Resources/RocketLaunch.jfif")}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carim"
      src={require("../Resources/Scientists.jpg")}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carim"
      src={require("../Resources/Programmer.jpg")}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>
         </div>

         <div className="second-parag">
         <div className="carcar1">
          <Carousel interval={null}>
  <Carousel.Item>
    <img
      className="d-block w-100 carim"
      src={require("../Resources/Business1.jpg")}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carim"
      src={require("../Resources/Business2.jpeg")}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carim"
      src={require("../Resources/Business3.jpg")}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>
          <div>
          <h3>Share your idea with others</h3>
          <p>Sharing your idea is the best way to get financial support for your business.
             According to statistics you can start business within a month with the help of such fund raising organizations.
          </p>
          </div>
         </div>
        </main>
    )
}