import UserModel from "../models/register.js"
import { accesToken } from "../services/jwtToken.js"






const Login=async(req,res,next)=>{

    console.log("login vanuu",req.body)

    const response=await UserModel.findOne({email:req.body.email,password:req.body.password})


     if(response){
   
    const AccesToken = accesToken(response.userName,response.email,response._id,)

    
      
    console.log("created succesfully")
    console.log(response)
    return res.status(200).json({ status: true ,token:AccesToken});

     }
     console.log(response)

     return res.json({status:false})

}

export default Login