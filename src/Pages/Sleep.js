import React from "react";
import "../styles/sleep.css";
import img from "../utils/images/sleep-image.jpg";

export default function Sleep() {
  return (
    <div className="sleep">
        <div className="tips">
            <div className="header">
                <h2>Tips for better sleep</h2>
                <img src={img} alt="sleeping lady" />
            </div>

            <ul className="tips-list">
                <li>Be consistent.</li>
                <li>Make sure your bedroom is quiet, dark, relaxing, and at a comfortable temperature.</li>
                <li>Remove electronic devices, such as TVs, computers, and smart phones, from the bedroom.</li>
                <li>Avoid large meals, caffeine, and alcohol before bedtime.</li>
                <li>Get some exercise.</li>
            </ul>
        </div>

        <form>
            <h2>Please enter the following details</h2>
            <div className="number-of-hours">
                <label htmlFor="number-of-hours">No of hours you slept yesterday</label>
                <input type="number" id="number-of-hours" name="numberofhours"/>
            </div>
            
            <div className="sleep-rating">
                <label htmlFor="sleep-rating">How would you rate your sleep (from 1-5)</label>
                <input type="number" id="sleep-rating" name="sleeprating" max={5} min={1} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}
