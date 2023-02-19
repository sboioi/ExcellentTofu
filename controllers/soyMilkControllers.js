const { SoyMilk,SoyMilkSchema } = require("../models/SoyMilk.js");
const {TableNumber} = require("../models/TableNumber.js");

//postSoyMilk
const postSoyMilk = (req,res)=>{

    let soyMilk = new SoyMilk(req.body);
           
    soyMilk.save(error=>
        {
            if(error){
                res.status(500).send(error);
            }else{
                res.send(soyMilk);
            }
        }
    )         
}

//Delete SoyMilk
const deleteSoyMilk = (req,res) =>{
    SoyMilk.deleteMany({"tableNumber":req.params.TableNumber},(err)=>{
        if(err)
            console.log(err);
        else
            res.send("deleted");
    })
}

//GET soyMilk
const getSoyMilk = (req,res) =>{
    SoyMilk.find({"tableNumber":req.params.TableNumber},(error,table)=>{
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
    postSoyMilk,
    getSoyMilk,
    deleteSoyMilk
};
