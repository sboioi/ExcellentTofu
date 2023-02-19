// line 377
import React from 'react';

import { useState, useEffect} from 'react';

import axios from 'axios';

import Orders from './Orders.js';
import Snack from './Snack.js';
import SoyMilk from './SoyMilk.js';
import Tofu from './Tofu.js';
import SubTotal from './Subtotal.js';
import AddOrders from './AddOrders';

const App = props=>{
   
    const [singleTables, setSingleTables] = useState(['Table 1','Table 2','Table 3','Table 4']);
    const [barTables, setBarTables] = useState(['Bar1','Bar2','Bar3','Bar4','Bar5','Bar6','Bar7','Bar8']);
    const [chosenTable, setChosenTable] = useState();
    const [addOrder, setAddOrder] = useState();
    const [addToppingsBtn, setAddToppingsBtn] = useState(false);
    const [temp, setTemp] = useState();
    const [toppingList, setToppingList] = useState([]);
    const [topping, setTopping] = useState("");
    const [chosenItem, setChosenItem] = useState();
    const [reset, setReset] = useState(false);
    const [addedNewItem,setAddedNewItem] = useState(false);
    const [soyPuddingCost, setSoyPuddingCost] = useState(0);
    const [soyMilkCost, setSoyMilkCost] = useState(0);
    const [snackCost,setSnackCost] = useState(0);
    const [deleteTableRecords, setDeleteTableRecords] = useState();
    const [tableOrders, setTableOrders] = useState([]);
    const [tableSoyMilkOrders,setTableSoyMilkOrders] = useState([]);
    const [tableSnackOrders, setTableSnackOrders] = useState([]);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [chosenBean, setChosenBean] = useState("Yellow Bean");
    const [sweetness, setSweetness] = useState("Sweeten");
    const [size, setSize] = useState('M');
    const [chosenSnack, setChosenSnack] = useState("");
    const [chosenSnackCost, setChosenSnackCost] = useState(0);
    const [chosenSnackCostList, setChosenSnackCostList] = useState([]);
    const [allSnack, setAllSnack] = useState([]);

    
    useEffect(function handleAddToppings(){
        
        setToppingList(toppingList.concat(topping));
        
    },[topping]);

    useEffect(function handleClearRecord(){

        setAddToppingsBtn(false);
        setTemp();
        setToppingList([]);
        setTopping("");
        setChosenItem();
        setReset(false);        
        setChosenBean("Yellow Bean");
        setSweetness("Sweeten");
        setSize("M");
        setChosenSnackCost(0);
        setSnackCost(0);
        setChosenSnackCostList([]);
        setChosenSnack("");
        setAllSnack([])
        
    },[reset]);

    //load total cost
    useEffect(function loadCost(){
        handleCalculateSoyPudding(chosenTable);
        handleCalculateSoyMilk(chosenTable);
        handleCalculateSnack(chosenTable);
    },[chosenTable]);

    //delete soy pudding
    useEffect(function handleDeleteTableRecordsSoyPudding(){
        axios.delete(`/orders/${deleteTableRecords}/soyPudding`)
        .then(res =>{setConfirmDelete(false);setChosenTable()})
        .catch(error => {
            console.error('There was an error!');
        })

    },[deleteTableRecords])

    //delete soy milk
    useEffect(function handleDeleteTableRecordsSoyMilk(){
        axios.delete(`/orders/${deleteTableRecords}/soyMilk`)
        .then(res =>{setConfirmDelete(false);setChosenTable()})
        .catch(error => {
            console.error('There was an error!');
        })

    },[deleteTableRecords])

    //delete snack
    useEffect(function handleDeleteTableRecordsSnack(){
        axios.delete(`/orders/${deleteTableRecords}/snack`)
        .then(res =>{setConfirmDelete(false);setChosenTable()})
        .catch(error => {
            console.error('There was an error!');
        })

    },[deleteTableRecords])

    //post soy puddings
    const handleAddSoyPuddingButton=(e)=>{
        
        let orderForSoyPudding = {
            tableNumber: chosenTable,
            temperature: temp, 
            toppings:toppingList,
            costs: 4.5 + toppingList.length
        }

        // post soy puddings
        axios.post(`/orders/${chosenTable}/soyPudding`,orderForSoyPudding)
        .then(res=>{
            setReset(true); //reset all
        })
        .then(setAddedNewItem(true))
        .catch(err=>{console.log('err on patch, App.js line 97')})
    }
    //post soy milk
    const handleAddSoyMilkButton=(e)=>{

        function calCost(){
            if(toppingList.length==0 && chosenBean == "Yellow Bean" && size =='M'){
                return 2;
            }else if(toppingList.length==0 && chosenBean == "Black Bean"  && size =='M'|| toppingList.length==0 && chosenBean == "Yellow Bean" && size =='L'){
                return 2.5;
            }else if(toppingList.length==0 && chosenBean == "Black Bean" && size =='L'){
                return 3;
            }else{
                return (4.5 + toppingList.length);
            }
        }

        let orderForSoyMilk = {
            tableNumber: chosenTable,
            temperature: temp,
            beanChoice: chosenBean,
            sweetness: sweetness,
            soyMilkSize: size,
            toppings:toppingList,
            costs: calCost()
        }

        // post soy milk
        axios.post(`/orders/${chosenTable}/soyMilk`,orderForSoyMilk)
        .then(res=>{
            setReset(true); //reset all
        })
        .then(setAddedNewItem(true))
        .catch(err=>{console.log('err on post, App.js line 130')})
    }
    //post snack
    const handleAddSnackButton=(e)=>{

        let orderForSnack = {
            tableNumber: chosenTable,
            snackItem: allSnack,
            costs: chosenSnackCostList
        }

        console.log(orderForSnack)

        // post snack
        axios.post(`/orders/${chosenTable}/snack`,orderForSnack)
        .then(res=>{
            setReset(true); //reset all
        })
        .then(setAddedNewItem(true))
        .catch(err=>{console.log('err on post, App.js line 175')})
    }
    const handleSetTemp = (chosenTemp)=>{
        setTemp(chosenTemp);
    }
    const handleSetToppings = (chosenTopping)=>{
        setTopping(chosenTopping);
    }
    const handleSetBean = (chosenBean)=>{
        setChosenBean(chosenBean);
    }
    const handleSetSweetness = (sweetness)=>{
        setSweetness(sweetness);
    }
    const handleSetSize=(size) =>{
        setSize(size);
    }
    // remove toppings choice
    const removeToppingHandler = (e) =>{
        let removeItem = e.target.getAttribute("removeTopping")
                                        //setToppingList(toppingList.filter(items=>items!=removeItem));

        //get the index
        let i = toppingList.indexOf(removeItem);
        //new topping list the item
        setToppingList(toppingList.slice(0, i).concat(toppingList.slice(i + 1)))    
    }
    // remove snack choice
    const removeSnackHandler = (e) =>{
        let removeItem = e.target.getAttribute("removeTopping")
        //get the index
        let i = allSnack.indexOf(removeItem);
        //new all snack list the item
        setAllSnack(allSnack.slice(0, i).concat(allSnack.slice(i + 1)));

        //new all snack cost list the item
        setChosenSnackCostList(chosenSnackCostList.slice(0, i).concat(allSnack.slice(i + 1)));

    }
    //chosen Snack
    const handleChosenSnackCost = (chosenSnackCost)=>{
        setChosenSnackCost(chosenSnackCost);
        setChosenSnackCostList(chosenSnackCostList.concat(chosenSnackCost));
        setChosenSnackCost(0);
    }
    const handleChosenSnack = (chosenSnack)=>{
        setChosenSnack(chosenSnack);
        setAllSnack(allSnack.concat(chosenSnack));
        setChosenSnack(0);
    }
    //cal soy pudding cost
    const handleCalculateSoyPudding = (tbl)=>{

        let total = 0;
        
        axios.get(`/orders/${tbl}/soyPudding`)
        .then(res=>{
                let sum = 0;

                res.data.forEach(item => {
                  sum += item.costs;
                })
                total = sum;//sum of soyPudding for a talbe
                setSoyPuddingCost(total)             
            }
        )
        .then(setSoyPuddingCost(total))
        .catch(err=>console.log("err on 168 App.js"))
    }
    //cal soy milk cost
    const handleCalculateSoyMilk = (tbl)=>{

        let total = 0;
        
        axios.get(`/orders/${tbl}/soyMilk`)
        .then(res=>{
                let sum = 0;

                res.data.forEach(item => {
                  sum += item.costs;
                })
                total = sum;//sum of soyPudding for a talbe
                setSoyMilkCost(total)    
            }
        )
        .then(setSoyMilkCost(total))
        .catch(err=>console.log("err on 188 App.js"))
    }
    //cal snack cost
    const handleCalculateSnack = (tbl)=>{

        let total = 0;
        
        axios.get(`/orders/${tbl}/snack`)
        .then(res=>{

                let sum = 0;
                //get an array of order
                res.data.forEach(order => {
                    //each order has an array of cost
                    sum = order.costs.reduce((previousValue, currentValue) => previousValue + currentValue,
                    sum)
                })
                total = sum;//sum of snack for a talbe
                setSnackCost(total)    
            }
        )
        .then(setSnackCost(total))
        .catch(err=>console.log("err on 272 App.js"))
    }
    //all table soy pudding order
    const handleGetAllTableOreders = (tbl)=>{
        
        let items = [];
        setTableOrders(items);

        axios.get(`/orders/${tbl}/soyPudding`)

        .then(res=>{

                res.data.forEach(item => {
                  items.push(item);
                  setTableOrders(items);
                })           
            }
        )
        .catch(err=>console.log("err on 157 App.js"))
    }
    //all table soy milk order
    const handleGetAllTableSoyMilkOreders = (tbl)=>{
        
        let items = [];
        setTableSoyMilkOrders(items);

        axios.get(`/orders/${tbl}/soyMilk`)

        .then(res=>{

                res.data.forEach(item => {
                  items.push(item);
                  setTableSoyMilkOrders(items);
                })           
            }
        )
        .catch(err=>console.log("err on 157 App.js"))
    }
    //all table snack order
    const handleGetAllTableSnackOreders = (tbl)=>{
        
        let items = [];
        setTableSnackOrders(items);

        axios.get(`/orders/${tbl}/snack`)

        .then(res=>{

                res.data.forEach(item => {
                  items.push(item);
                  setTableSnackOrders(items);
                })           
            }
        )
        .catch(err=>console.log("err on 322 App.js"))
    }


    const handleFloorPlan = () =>{
        
        let result =

        <div class = "FloorPlan">

            <h1>Excellent Tofu</h1>
            
            <ul>
                {singleTables.map(element=> 
                    <li class="tableNoButton" key={element} id={element}><span onClick={(e)=>{handleGetAllTableOreders(element);handleGetAllTableSoyMilkOreders(element);handleGetAllTableSnackOreders(element);setChosenTable(element)}}>{element}</span>
                    <span class="addButton" onClick={(e)=>{setAddOrder(true);setChosenTable(element);handleGetAllTableOreders(element);handleGetAllTableSoyMilkOreders(element);handleGetAllTableSnackOreders(element)}}>+</span>

                    {soyPuddingCost && chosenTable==element||soyMilkCost && chosenTable==element||snackCost && chosenTable==element?
                    <span class="paidButton" onClick={(e)=>{setConfirmDelete(true);setChosenTable(element)}}>
                        Total ${soyPuddingCost+soyMilkCost+snackCost} &nbsp;
                        {confirmDelete?
                        <div>
                            <button onClick={()=>setDeleteTableRecords(chosenTable)}>confirm payment</button>
                        </div> 
                        :null}
                    </span>
                    :null}

                    <ul class="orders">
                        {tableOrders && chosenTable==element?
                        <>
                        <li class="bold">Tofu Pudding: &nbsp;</li>
                        <li><ul>
                        {tableOrders.map(item=>
                            <li key={item.id}><span>{item.temperature}</span> {item.toppings.map(top=><span key={top}>{top}</span>)} <span class="eachItemCost">${item.costs}</span></li>
                        )}</ul></li>
                        </>
                        :null}
                    </ul>

                    <ul class="ordersSoyMilk">
                        {tableSoyMilkOrders && chosenTable==element?
                        <>
                        <li class="bold">Soy Milk: &nbsp;</li>
                        <li><ul>
                        {tableSoyMilkOrders.map(item=>
                            <li key={item.id}><span>{item.beanChoice}</span><span>{item.sweetness}</span><span>{item.temperature} {item.soyMilkSize}</span> {item.toppings.map(top=><span key={top}>{top}</span>)} <span class="eachItemCost">${item.costs}</span></li>
                        )}</ul>
                        </li>
                        </>
                        :null}
                    </ul>

                    <ul class="ordersSnack">
                        {tableSnackOrders && chosenTable==element?
                        <>
                        <li class="bold">Snack: &nbsp;</li>
                        <li>
                        {/* seperate list items */}
                        {tableSnackOrders.map(item=>
                        
                            <ul key={item.id} class="ordersForSnack"> 
                                <li>{item.snackItem.map(eachItem=><li key = {eachItem.id}>{console.log("each item is: "+ eachItem)}{eachItem}</li>)}</li>
                                <li class="eachItemCost">{item.costs.map(eachItem=><li key = {eachItem.id}>{console.log("each item cost is: "+ eachItem)}${eachItem}</li>)}</li>
                            </ul>
                        )}
                        </li>
                        </>
                        :null}
                    </ul>
                    </li>
                )}
            </ul>

            <ul>
                {barTables.map(element=> 
                    <li class="tableNoButton" key={element} id={element}><span onClick={(e)=>{handleGetAllTableOreders(element);handleGetAllTableSoyMilkOreders(element);handleGetAllTableSnackOreders(element);setChosenTable(element)}}>{element}</span>
                    <span class="addButton" onClick={(e)=>{setAddOrder(true);setChosenTable(element);handleGetAllTableOreders(element);handleGetAllTableSoyMilkOreders(element);handleGetAllTableSnackOreders(element)}}>+</span>

                    {soyPuddingCost && chosenTable==element||soyMilkCost && chosenTable==element||snackCost && chosenTable==element?
                    <span class="paidButton" onClick={(e)=>{setConfirmDelete(true);setChosenTable(element)}}>
                        Total ${soyPuddingCost+soyMilkCost+snackCost} &nbsp;
                        {confirmDelete?
                        <div>
                            <button onClick={()=>setDeleteTableRecords(chosenTable)}>confirm payment</button>
                        </div> 
                        :null}
                    </span>
                    :null}

                    <ul class="orders">
                        {tableOrders && chosenTable==element?
                        <>
                        <li class="bold">Tofu Pudding: &nbsp;</li>
                        <li><ul>
                        {tableOrders.map(item=>
                            <li key={item.id}><span>{item.temperature}</span> {item.toppings.map(top=><span key={top}>{top}</span>)} <span class="eachItemCost">${item.costs}</span></li>
                        )}</ul></li>
                        </>
                        :null}
                    </ul>

                    <ul class="ordersSoyMilk">
                        {tableSoyMilkOrders && chosenTable==element?
                        <>
                        <li class="bold">Soy Milk: &nbsp;</li>
                        <li><ul>
                        {tableSoyMilkOrders.map(item=>
                            <li key={item.id}><span>{item.beanChoice}</span><span>{item.sweetness}</span><span>{item.temperature} {item.soyMilkSize}</span> {item.toppings.map(top=><span key={top}>{top}</span>)} <span class="eachItemCost">${item.costs}</span></li>
                        )}</ul>
                        </li>
                        </>
                        :null}
                    </ul>

                    <ul class="ordersSnack">
                        {tableSnackOrders && chosenTable==element?
                        <>
                        <li class="bold">Snack: &nbsp;</li>
                        <li>
                        {/* seperate list items */}
                        {tableSnackOrders.map(item=>
                        
                            <ul key={item.id} class="ordersForSnack"> 
                                <li>{item.snackItem.map(eachItem=><li key = {eachItem.id}>{console.log("each item is: "+ eachItem)}{eachItem}</li>)}</li>
                                <li class="eachItemCost">{item.costs.map(eachItem=><li key = {eachItem.id}>{console.log("each item cost is: "+ eachItem)}${eachItem}</li>)}</li>
                            </ul>
                        )}
                        </li>
                        </>
                        :null}
                    </ul>
                    </li>
                )}
            </ul>

        </div>
        
        return result;
    }

    return(
        <div>  
            
            {addOrder? <AddOrders temp={temp}toppingList={toppingList}addedNewItem={addedNewItem}chosenTable={chosenTable} handleAddSoyPuddingButton={handleAddSoyPuddingButton} removeToppingHandler={removeToppingHandler} handleSetTemp={handleSetTemp} handleSetToppings={handleSetToppings} handleAddSoyMilkButton={handleAddSoyMilkButton} handleSetBean={handleSetBean} chosenBean={chosenBean} handleSetSweetness={handleSetSweetness} sweetness={sweetness} handleSetSize={handleSetSize} size={size} handleGetAllTableSoyMilkOreders={handleGetAllTableSoyMilkOreders} handleAddSnackButton={handleAddSnackButton} handleChosenSnack={handleChosenSnack} handleChosenSnackCost={handleChosenSnackCost} chosenSnack={chosenSnack} allSnack={allSnack} removeSnackHandler={removeSnackHandler}/>:handleFloorPlan()}
        
        </div>
        );
};

export default App;