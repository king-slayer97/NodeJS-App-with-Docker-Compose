const Iris = require("../models/iris");

module.exports.createIris = function(req,res){
    console.log(req.body);
    Iris.create(req.body,(err,iris)=>{
        if(err){
            console.log("Error in POST req");
        }
        else{
            console.log("This is the POST request");
            console.log(req.body);
            // jsonData.push(req.body);
            return res.status(200).json({message: "Successfully added the entry!"});
        }
    });
}