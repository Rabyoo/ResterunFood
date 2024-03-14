import React, { Fragment } from "react";
import Header from "./Header";
import "../Home/Home.css";
import prideImage from "../Navs/images/header.png";
import ingredients from "../Navs/images/pngegg (18).png";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <div className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1287+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h2>6587+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2>2287+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-md-3">
              <h2>6387+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="pride">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={prideImage} alt="pride" />
              </div>
              <div className="col-md-6 private">
                <h2>Good Food choices are god investments</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,{" "}
                  <br /> ex a neque illum doloribus ut!
                </p>
                <button type="button">
                  <a href="#">Learn More</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ingredients">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                We make everything by hand with the best possible ingreadients .
              </h2>
              <p>
                hi my name is reda maher i am front end web development i use
                som languages programming like html,css,ja,react.js...
              </p>
              <ul>
                <li>HTML, CSS, Javascript, React.js, Bootstrap</li>
                <li>TailwindCSS, Next.js, node.js, express, mongoDB</li>
                <li>java, c++, python and some experaince</li>
              </ul>
              <button>
                <a href="#">Learn More</a>
              </button>
            </div>
            <div className="col-md-6">
              <img src={ingredients} />
            </div>
          </div>
        </div>
      </section>
      <div className="paralex">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>
                When a man`s stomach is full it makes no <br /> difference
                wither he is rich or poor.
              </h2>
              <p>
                Lorem lvjdkfn krjfekd jlrend kljhkrbkv ljhsajf uyhuh <br />{" "}
                jhgfbyewjgr jkdghsjerwe jkfewgfh no
              </p>
              <a href="#">Watch Our Story</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
