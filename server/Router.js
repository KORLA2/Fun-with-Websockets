let express=require('express')
let router=express.Router();
router.get('/',(req,res)=>{res.send('Backend Generated');})
let cors = require("cors");
module.exports={router,cors};
