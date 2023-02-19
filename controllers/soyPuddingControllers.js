const { SoyPudding,SoyPuddingSchema } = require("../models/SoyPudding.js");
//const {TableNumber} = require("../models/TableNumber.js");

// //postTable
// const postTable = (req,res)=>{
   
//     let table = new TableNumber({
//         tableNumber:req.params.TableNumber,
//         soyPuddings: [],
//         soyMilk: []
//     });

//     table.save()
//     .then(result=>{
    
//         res.set('content-location',`/orders/${table.tableNumber}`);
//         res.status(201).json({
//             url:  `/orders/${table.tableNumber}`,
//             data: table
//         });
//     })
//     .catch(error=>{res.status(422).json(error)});
// };

// //getAllTables
// const getAllTables = (req,res)=>{
//     TableNumber.find({})
//     .exec()
//     .then(numbers=>{
//         res.send(numbers)
//     })
//     .catch(err=>console.log("cannot find any tables, controllers js line 33"))
// }

//postSoyPudding
const postSoyPudding = (req,res)=>{

    let soyPudding = new SoyPudding(req.body);
           
    soyPudding.save(error=>
        {
            if(error){
                res.status(500).send(error);
            }else{
                res.send(soyPudding);
            }
        }
    )         
}

//Delete SoyPudding
const deleteSoyPudding = (req,res) =>{
    SoyPudding.deleteMany({"tableNumber":req.params.TableNumber},(err)=>{
        if(err)
            console.log(err);
        else
            res.send("deleted");
    })
}

//GET soyPudding
const getSoyPudding = (req,res) =>{
    SoyPudding.find({"tableNumber":req.params.TableNumber},(error,table)=>{
    if(error){
        res.send(error);
    }else if(table == null){                                                
        res.status(500).send("no table with that name found!");
    }else{
        res.status(201).json(table);
    }
})
}

// const postSoyPudding = (req,res)=>{

//     TableNumber.findOne({"tableNumber":req.params.TableNumber},(error,table)=>{
//         if(error){
//             res.send(error);
//         }else if(table == null){                                                
//             res.status(500).send("no table with that name found!");
//         }else{                                                                 
            
//             let soyPudding = new SoyPudding(req.body);
           
//             soyPudding.save(error=>{
//                 if(error){
//                     res.status(500).send(error);
//                 }else{
                    
//                     table.soyPuddings.push(soyPudding.id);
                   
//                     table.save(error=>{
//                          if (error){
//                              res.status(500).send(error);
//                          }else{
//                              res.status(201).json(soyPudding);
//                          }
//                      });
//                 }
//             });
//         }
//     });
// };


module.exports = {
   // postTable,
    postSoyPudding,
    getSoyPudding,
    deleteSoyPudding,
   // getAllTables
};
