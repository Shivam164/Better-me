import React from "react";
import "../styles/sleep.css";
import img from "../utils/images/sleep-image.png";
// import Plotly from "plotly.js";

export default function Sleep() {
  return (
    <div className="sleep">
      <div className="tips">
        <div className="header">
          <div className="heading">
            <h2>Tips for</h2>
            <h2>better</h2>
            <h2>sleep</h2>
          </div>
          <img src={img} alt="sleeping lady" />
        </div>
        <div>
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

      <form>
        <h2>Please enter the following details</h2>
        <div className="number-of-hours">
          <label htmlFor="number-of-hours">
            No of hours you slept yesterday
          </label>
          <input type="number" id="number-of-hours" name="numberofhours" />
        </div>

        <div className="sleep-rating">
          <label htmlFor="sleep-rating">
            How would you rate your sleep (from 1-5)
          </label>
          <input
            type="number"
            id="sleep-rating"
            name="sleeprating"
            max={5}
            min={1}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {/* {Plotly.newPlot(
          "gd",
          {
            data: [{ y: [1, 2, 3] }],
            layout: { width: 600, height: 400 },
          }
        )} */}
      </div>
    </div>
  );
}
