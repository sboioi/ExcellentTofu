import React from 'react';

import { useState, useEffect} from 'react';

const Tofu = props=>{

   
    return(
        <>
            <h3>Soy Pudding</h3>

            <div class = "twoCol">
                <div class="firstCol">
                {/* temperature choice for tofu */}
                <ul>
                    <li class="toppingsButton"onClick={()=>{props.handleSetTemp('warm')}}>Warm</li>
                    <li class="toppingsButton"onClick={()=>props.handleSetTemp('cold')}>Cold</li>
                </ul>

                {/* display toppings list */}
                {props.temp?
                <div>
                <ul class="toppings">
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Black Sweet Rice")}}>Black Sweet Rice</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Sesame Paste")}}>Sesame Paste</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Red Bean")}}>Red Bean</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Green Bean")}}>Green Bean</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Grass Jelly")}}>Grass Jelly</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Basil Seed")}}>Basil Seed</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Barley")}}>Barley</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Tapioca")}}>Tapioca</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Taro")}}>Taro</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Penuts")}}>Penuts</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Mixed Fruit")}}>Mixed Fruit</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Coconut Milk")}}>Coconut Milk</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Evaporated Milk")}}>Evaporated Milk</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Almond Syrup")}}>Almond Syrup</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Mango")}}>Mango</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Honeydew")}}>Honeydew</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Strawberry")}}>Strawberry</li>
                </ul>
                </div> 
                :null}
                

                
                </div>
                {/* display add button */}
                <div class="secondCol">
                    {
                        props.temp?
                        <><button onClick={(e)=>props.handleAddSoyPuddingButton(e)}>Add</button><br/>
                        <h4>{props.temp} </h4></>
                        :null
                    }

                    <ul>
                        {/* show chosen toppings for edit */}
                        {props.toppingList?

                        props.toppingList.map(item => (
                        <li key={item} id={item} onClick={(e)=>{}}>
                        {item} <button removeTopping={item} onClick={props.removeToppingHandler}>x</button>{<br/>}

                        </li>
                        ))
                        :
                        null
                        }
                    </ul>
                    
                </div>
            </div>
                
        </>
    );
};

export default Tofu;