const Iris = require("../models/iris");

module.exports.getIris = async function(req,res){
    // console.log(req.body);
    let {page,limit} = req.query;
    // Iris.find((err,iris)=>{
    //     if(err){
    //         console.log("Couldnt perform read operation. Please try again!");
    //     }
    //     else{
    //         console.log("This is the GET request");
    //         // console.log(req);
    //         // jsonData.push(req.body);
    //         // console.log(iris);
    //         return res.status(200).json(iris);
    //     }
    // });
    if(!page) page = 1;
    if(!limit) limit=10;
    const skip = (page-1)*10;
    const data = await Iris.find().sort({ createdAt: 'desc'}).skip(skip).limit(limit);
    console.log(data); 
    res.send({page:page,limit:limit,data:data});
    // res.render('./Iris/index',{page:page,limit:limit,data:data});
}