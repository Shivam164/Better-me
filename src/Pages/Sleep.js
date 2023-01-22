import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/sleep.css";
import img from "../utils/images/sleep-image.png";
import Plotly from 'plotly.js-dist-min'
import FormControl from '@mui/material/FormControl';
import { FormHelperText, Input, InputLabel } from "@mui/material";
import InputSlider from "../components/InputSlider";
import { Client, Databases } from "appwrite";

export default function Sleep() {

  const client = new Client();
  
  const databases = new Databases(client);

  const [change, setChange] = useState(0);

  client
        .setEndpoint('http://localhost:5000/v1') // Your API Endpoint
        .setProject(`${process.env.REACT_APP_PROJECT_ID}`) // Your project ID
  ;


  const getGraph = () => {
    const promise = databases.listDocuments(`${process.env.REACT_APP_SLEEP_DATABASE}`, `${process.env.REACT_APP_SLEEP_COLLECTION}`);
  
    promise.then(function (response) {
        var a = [];
        for(let value in response.documents){
          console.log(value);
          a.push(response.documents[value].SleepQuality);
        }
        console.log(a);
        {Plotly.newPlot(
          "gd",
          {
            data: [{ y:a }],
            layout: { width: 600, height: 400 },
          }
        )}
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });

    
  }

  useEffect(() => {
    getGraph();
  },[change]);

  return (
    <>
    <Navbar/>
    <div className="sleep">
      <div className="tips">
        <div className="header">
          <div className="heading">
            <h2>Invest in</h2>
            <h2 className="rest">Rest.</h2>
          </div>
          <div className="sleep__image">
            <img src={img} />
          </div>
        </div>

          {/* FORM  */}

        <div className="sleep__quality">
          <InputSlider change = {change} setChange = {setChange} />
        </div>

        <div className="takecare">Don't let your sleep quality to go lower than 60 for more than 2 consectutive days.</div>

      {/* GRAPH  */}
        <div id="gd"></div>
      
        {/* TIPS */}
        <div className="all__tips">
          <div className="tip2 tips">
            <p>
              Make sure your bedroom is quiet, dark, relaxing, and at a
              comfortable temperature.
            </p>
          </div>
          <div className="tip1 tips">
            <p>Be consistent.</p>
            <p>Get some exercise.</p>
          </div>
          <div className="tip3 tips">
            <p>Avoid large meals, caffeine, and alcohol before bedtime.</p>
          </div>
          <div className="tip4 tips">
            <p>
              Remove electronic devices, such as TVs, computers, and smart
              phones, from the bedroom.
            </p>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}
