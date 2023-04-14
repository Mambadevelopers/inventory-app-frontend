import React from 'react'
import {CgSmartHomeHeat} from "react-icons/cg";
import { Link } from 'react-router-dom';
import "./Home.scss";
import heroImg from "../../assets/home-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";


const Home = () => {
  return (
    <div className='home'>
      <nav className='container --flex-between'>
        <div className='logo'>
          <CgSmartHomeHeat size={35}/>
        </div>
        <ul className='home-links'>
          <ShowOnLogout>
          <li>
          <Link to="/register">Register</Link>
          </li>
          </ShowOnLogout>
          <ShowOnLogout>
          <li>
            <button className='--btn --btn-primary'>
            <Link to="/login">Login</Link>
            </button>
          </li>
          </ShowOnLogout>
          <ShowOnLogin>
          <li>
            <button className='--btn --btn-primary'>
            <Link to="/dashboard">Dashboard</Link>
            </button>
          </li>
          </ShowOnLogin>
        </ul>
      </nav>
      
      {/**  section */}
      <section className='container hero'>
        <div className='hero-text'>
          <h2>Supply Chain & Stock Management Solution</h2>
          <p>Introducing our Supply Chain & Stock Management Solution - a 
            powerful app designed to optimize inventory levels, 
            streamline order fulfillment, and improve overall 
            supply chain efficiency for 
            businesses of all sizes.
            </p>
            <div className='hero-buttons'>
            <button className='--btn --btn-secondary'>
            <Link to="/dashboard">Free Trial for 1 month</Link>
            </button>
            </div>

            <div className='--flex-start'>
              <NumberText num="13K" text="Brand Owners"/>
              <NumberText num="24K" text="Active Users"/>
              <NumberText num="700+" text="Partners"/>
            </div>
        </div>

        <div className='hero-image'>
          <img src={heroImg} alt='Inventory'/>
        </div>
      </section>
    </div>
  )
};

const NumberText = ({num, text}) => {
  return(
    <div className='--mr'>
      <h3 className='--color-white'>{num}</h3>
      <p className='--color-white'>{text}</p>
    </div>
  )
}

export default Home
