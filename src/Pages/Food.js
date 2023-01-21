import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FoodCard from '../components/FoodCard';
import { Grid } from '@mui/material';
import img from '../utils/images/food-image.png';
import "../styles/Food.css"
import Navbar from '../components/Navbar';

function Food() {

    const [food, setFood] = useState(null);

    const getData = async () => {
        try{
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`);
            console.log(response);
            setFood(response.data.results);
        }catch(error){
            console.log(error);
        }
    }


    useEffect(() => {
        getData();
    },[]);

    return ( 
        <>
        <Navbar/>
        {/* BANNER */}
        <div className='food__banner'>
            <div className='food__banner__text'>
                GOOD FOOD GOOD MOOD
            </div>
            <div>
                <img src={img}/>
            </div>
        </div>

        {/* ALL FOOD  */}
            {food &&
                (<Grid container spacing={2}>
                    {(food).map(foodItem => (
                        <FoodCard key={foodItem.id} image={foodItem.image} title={foodItem.title} />
                    ))}
                </Grid>
                )
            }
            {!food && <div>Loading..</div>}

        </>

     );
}

export default Food;