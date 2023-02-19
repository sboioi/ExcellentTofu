const {TableNumber} = require("../models/TableNumber.js");

//postTable
const postTable = (req,res)=>{
   
    let table = new TableNumber({
        tableNumber:req.params.TableNumber,
        soyPuddings: [],
        soyMilk: [],
        snacks: []
    });

    table.save()
    .then(result=>{
    
        res.set('content-location',`/orders/${table.tableNumber}`);
        res.status(201).json({
            url:  `/orders/${table.tableNumber}`,
            data: table
        });
    })
    .catch(error=>{res.status(422).json(error)});
};

//getAllTables
const getAllTables = (req,res)=>{
    TableNumber.find({})
    .exec()
    .then(numbers=>{
        res.send(numbers)
    })
    .catch(err=>console.log("cannot find any tables, controllers js line 33"))
}


module.exports = {
    postTable,
    getAllTables
};
