'use client'
import React, { useState } from 'react';
import RestaurantSignup from '../_components/RestaurantSignUp';
import RestaurantLogin from '../_components/RestaurantLogin';
import RestaurantHeader from '../_components/RestaurantHeader';
import RestaurantFooter from '../_components/RestaurantFooter';
import './style.css';


const Restaurant = () => {
    const [login, setLogin] = useState(true);
    return (
        <>
            <div className='container'>
                <RestaurantHeader />

                < h1> Restaurants </h1>
                {
                    login ? <RestaurantLogin /> : <RestaurantSignup />
                }
                <div>
                    <button className='button-link' onClick={() => setLogin(!login)}>
                        {login ? "Not registered? SignUp Here" : "Already registerd? Login here"}
                    </button>
                </div>
            </div>
            <RestaurantFooter />
        </>
    )
}

export default Restaurant;