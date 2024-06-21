import React from "react";
import {Navbar} from './Navigator'
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
    return(
        <section>
            <Navbar/>
            <div className="home-container">
                <div className="home1">
                    <h1>Hello there, I'm</h1>
                    <h2>Roger Ando</h2>
                </div>
            </div>
        </section>
    )
}
    

export default Home;