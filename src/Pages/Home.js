import React from 'react';
import Navbar from '../components/Navbar';
import VoiceInput from '../components/VoiceInput';
import "../styles/home.css";
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Home() {

    const history = useNavigate();

    return ( 
        <div className='home'>
            <Navbar/>   

            {/* BANNER   */}
            <div className='home__banner'>
                <div className='home__banner__text'>
                    <p>Get Better</p>
                    <p className='home__banner__text__quicker'>Quicker</p>
                    <p>With Us.</p>
                </div>
                <div className='home__banner__voiceinput'>
                    <VoiceInput/>
                </div>
            </div>

            <div className='line'></div>

            {/* HEALTH ASPECTS  */}
            <div className='health__aspects'>
                <div className='health__aspects__header'>Factors Affecting Fitness</div>
                <div className='health__factors'>
                    <div>
                        <h2>Exercise</h2>
                        <div>fsdlkfjslf sldfjsdf lsf dflsjdflsdf jsdlfjs flsf sdf</div>
                        <Button onClick={() => {history("/exercise")}}>Know More</Button>
                    </div>
                    <div>
                        <h2>Sleep</h2>
                        <div>fsdlkfjslf sldfjsdf lsf dflsjdflsdf jsdlfjs flsf sdf</div>
                        <Button onClick={() => {history("/sleep")}}>Know More</Button>
                    </div>
                    <div>
                        <h2>Food</h2>
                        <div>fsdlkfjslf sldfjsdf lsf dflsjdflsdf jsdlfjs flsf sdf</div>
                        <Button onClick={() => {history("/food")}}>Know More</Button>
                    </div>
                    <div>
                        <h2>Goals</h2>
                        <div>fsdlkfjslf sldfjsdf lsf dflsjdflsdf jsdlfjs flsf sdf</div>
                        <Button onClick={() => {history("/")}}>Know More</Button>
                    </div>
                    <div>
                        <h2>Connections</h2>
                        <div>fsdlkfjslf sldfjsdf lsf dflsjdflsdf jsdlfjs flsf sdf</div>
                        <Button onClick={() => {history("/")}}>Know More</Button>
                    </div>
                </div>
            </div>
            
        </div>
     );
}

export default Home;