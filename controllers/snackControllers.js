const { Snack,SnackSchema } = require("../models/Snack.js");
const {TableNumber} = require("../models/TableNumber.js");

//postSnack
const postSnack = (req,res)=>{

    let Snacks = new Snack(req.body);
           
    Snacks.save(error=>
        {
            if(error){
                res.status(500).send(error);
            }else{
                res.send(Snacks);
            }
        }
    )         
}

//Delete Snack
const deleteSnack = (req,res) =>{
    Snack.deleteMany({"tableNumber":req.params.TableNumber},(err)=>{
        if(err)
            console.log(err);
        else
            res.send("deleted");
    })
}

//GET Snack
const getSnack = (req,res) =>{
    Snack.find({"tableNumber":req.params.TableNumber},(error,table)=>{
    if(error){
        res.send(error);
    }else if(table == null){                                                
        res.status(500).send("no table with that name found!");
    }else{
        res.status(201).json(table);
    }
})
}

module.exports = {
    postSnack,
    getSnack,
    deleteSnack
};
