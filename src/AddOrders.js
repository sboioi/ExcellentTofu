import React from 'react';

import { useState, useEffect} from 'react';

import axios from 'axios';
import App from './App';
import Tofu from './Tofu';
import SoyMilk from './SoyMilk';
import Snack from './Snack';


const AddOrders = props =>{
    const [backToHome, setBackToHome] = useState(false);
    const [orderType, setOrderType] = useState();

    return (
        <>
            {backToHome?
            <App />
            :
            <div class = "addOrders">
                {/* back to home button */}
                <div class="backButton" onClick = {()=>setBackToHome(!backToHome)}>Back</div>
                <h2>Table {props.chosenTable}</h2>
                {/* pudding or soy milk or snack */}
                <ul class= "addOrdersChoices">
                    <li class="toppingsButton" onClick = {()=>setOrderType('tofu')}>Soy Pudding</li>
                    <li class="toppingsButton" onClick = {()=>setOrderType('soyMilk')}>Soy Milk</li>
                    <li class="toppingsButton" onClick = {()=>setOrderType('snack')}>Snack</li>
                </ul>

                {/* display menu */}
                {orderType=='soyMilk'?<SoyMilk chosenTable={props.chosenTable} handleAddSoyMilkButton={props.handleAddSoyMilkButton} removeToppingHandler={props.removeToppingHandler} handleSetTemp={props.handleSetTemp} handleSetToppings={props.handleSetToppings} temp={props.temp} topping={props.topping} toppingList={props.toppingList} handleSetBean={props.handleSetBean} chosenBean={props.chosenBean} handleSetSweetness={props.handleSetSweetness} sweetness={props.sweetness} handleSetSize={props.handleSetSize} size={props.size} handleGetAllTableSoyMilkOreders={props.handleGetAllTableSoyMilkOreders}/>:
                        orderType=='snack'?<Snack chosenTable={props.chosenTable} removeSnackHandler={props.removeSnackHandler} handleAddSnackButton={props.handleAddSnackButton} handleChosenSnack={props.handleChosenSnack} handleChosenSnackCost={props.handleChosenSnackCost} chosenSnack={props.chosenSnack} allSnack={props.allSnack}/>:
                        <Tofu chosenTable={props.chosenTable} handleAddSoyPuddingButton={props.handleAddSoyPuddingButton} removeToppingHandler={props.removeToppingHandler} handleSetTemp={props.handleSetTemp} handleSetToppings={props.handleSetToppings} temp={props.temp} topping={props.topping} toppingList={props.toppingList}/>
                }               
               
            </div>
            }
        </>
    );
}

export default AddOrders;