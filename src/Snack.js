import React from 'react';

import { useState, useEffect} from 'react';

import axios from 'axios';

const Snack = props=>{
   
    return(
        <>
            <h3>Snack</h3>
            <div class = "twoCol">
            <div class="firstCol">
            <ul class="toppings">
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(5);props.handleChosenSnack("Regular Sticky Rice")}}>Regular Sticky Rice</li>
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(5);props.handleChosenSnack("Sweet Sticky Rice")}}>Sweet Sticky Rice</li>
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(5);props.handleChosenSnack("Vegetarian Sticky Rice")}}>Vegetarian Sticky Rice</li>
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(2.5);props.handleChosenSnack("Fish Ball")}}>Fish Ball</li>
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(3);props.handleChosenSnack("Split Pea Pudding")}}>Split Pea Pudding</li>
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(3);props.handleChosenSnack("Taro Paste Cake")}}>Taro Paste Cake</li>
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(3);props.handleChosenSnack("Red Bean Paste Cake")}}>Red Bean Paste Cake</li>
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(4);props.handleChosenSnack("Marinated Tofu")}}>Marinated Tofu</li>
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(5.5);props.handleChosenSnack("Radish Cake")}}>Radish Cake</li>
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(5);props.handleChosenSnack("Tofu with Fish Paste")}}>Tofu with Fish Paste</li>
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(8.5);props.handleChosenSnack("3 Color Veg")}}>3 Color Vegetarian</li>
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(10);props.handleChosenSnack("Herbal Jelly")}}>Herbal Jelly</li>
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(5.5);props.handleChosenSnack("Pot Sticker")}}>Pot Sticker</li>
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(6.5);props.handleChosenSnack("Konjac")}}>Konjac</li>
                <li class="toppingsButton"onClick={()=>{props.handleChosenSnackCost(2.5);props.handleChosenSnack("Chinese Dount")}}>Chinese Donut</li>
            </ul>
            </div> 

            {/* display add button */}
            <div class="secondCol">
                {
                    props.allSnack.length>0?
                    <>
                    <button onClick={(e)=>props.handleAddSnackButton(e)}>Add</button><br/>

                    {/* show chosen toppings for edit */}
                    <ul>
                    {
                    props.allSnack.map(item => (
                    <li key={item} id={item} onClick={(e)=>{}}>
                    {item} <button removeTopping={item} onClick={props.removeSnackHandler}>x</button>{<br/>}

                    </li>
                    ))}
                    </ul>
                    
                    </>
                    :null
                }

                
                
            </div>
            </div>
        </>
        );
};

export default Snack;