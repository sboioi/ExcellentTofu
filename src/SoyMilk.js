import React from 'react';

import { useState, useEffect} from 'react';

import axios from 'axios';


const SoyMilk = props=>{
   
    return(
        <>
            <h3>Soy Milk</h3>
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
                <ul>
                    <li class="sizeButton"onClick={()=>{props.handleSetSize("M")}}>M</li>
                    <li class="sizeButton"onClick={()=>{props.handleSetSize("L")}}>L</li>
                    <li class="beanButton"onClick={()=>{props.handleSetBean("Black Bean")}}>Black bean</li>
                    <li class="beanButton"onClick={()=>{props.handleSetBean("Yellow Bean")}}>Yellow bean</li>
                    <li class="sweetnessButton"onClick={()=>{props.handleSetSweetness("Sweeten")}}>Sweeten</li>
                    <li class="sweetnessButton"onClick={()=>{props.handleSetSweetness("Unsweeten")}}>Unsweeten</li>
                </ul>
                </div> 
                :null}

                {props.size?
                <div>
                <ul class="toppings">
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Shanghai Style")}}>32. Shanghai Style</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Red Bean")}}>33. Red Bean</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Green Bean")}}>34. Green Bean</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Tapioca")}}>35. Tapioca</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Barley")}}>36. Barley</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Grass Jelly")}}>37. Grass Jelly</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Basil Seed")}}>38. Basil Seed</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Young Coconut Meat")}}>39. Young Coconut Meat</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Sesame")}}>Sesame</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Soy Pudding")}}>Soy Pudding</li>
                    <li class="toppingsButton"onClick={()=>{props.handleSetToppings("Others")}}>Others</li>
                </ul>
                </div> 
                :null}
                

                
                </div>
                {/* display add button */}
                <div class="secondCol">
                    {
                        props.temp?
                        <><button onClick={(e)=>props.handleAddSoyMilkButton(e)}>Add</button><br/>
                        <h4>{props.temp} </h4></>
                        :null
                    }

                    <ul>
                        {/* show chosen toppings for edit */}
                        {props.chosenBean || props.sweetness || props.size?
                        <>
                        <li>{props.size} {props.chosenBean}, {props.sweetness}</li>
                        </>                        
                        :
                        null
                        }

                        {props.toppingList?

                        props.toppingList.map(item => (
                        <li class="toppingsButton"key={item} id={item} onClick={(e)=>{}}>
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

export default SoyMilk;