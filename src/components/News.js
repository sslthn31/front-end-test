import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
const News = () => {
  return (
    <div className="news">
      <div className="back-to-login">
        <Link to="/">
          <IoIosArrowRoundBack className="icon" />
        </Link>
      </div>
      <h2>City News</h2>
      <div className="cards-container">
        <div className="card">
          <img src="./mountain.png" alt="" />
          <div className="card-desc">
            <div className="card-profile">
              <div className="profile-icon">
                <CgProfile className="icon" />
              </div>
              <div className="profile-desc">
                <h6>16 nov</h6>
                <h4>Sulthan</h4>
              </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptatem.</p>
          </div>
        </div>
        <div className="card">
          <img src="./mountain.png" alt="" />
          <div className="card-desc">
            <div className="card-profile">
              <div className="profile-icon">
                <CgProfile className="icon" />
              </div>
              <div className="profile-desc">
                <h6>16 nov</h6>
                <h4>Sulthan</h4>
              </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptatem.</p>
          </div>
        </div>
        <div className="card">
          <img src="./mountain.png" alt="" />
          <div className="card-desc">
            <div className="card-profile">
              <div className="profile-icon">
                <CgProfile className="icon" />
              </div>
              <div className="profile-desc">
                <h6>16 nov</h6>
                <h4>Sulthan</h4>
              </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptatem.</p>
          </div>
        </div>
        <div className="card">
          <img src="./mountain.png" alt="" />
          <div className="card-desc">
            <div className="card-profile">
              <div className="profile-icon">
                <CgProfile className="icon" />
              </div>
              <div className="profile-desc">
                <h6>16 nov</h6>
                <h4>Sulthan</h4>
              </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptatem.</p>
          </div>
        </div>
        <div className="card">
          <img src="./mountain.png" alt="" />
          <div className="card-desc">
            <div className="card-profile">
              <div className="profile-icon">
                <CgProfile className="icon" />
              </div>
              <div className="profile-desc">
                <h6>16 nov</h6>
                <h4>Sulthan</h4>
              </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptatem.</p>
          </div>
        </div>
      </div>
      <div className="button">
        <button>Post News</button>
      </div>
    </div>
  );
};

export default News;
