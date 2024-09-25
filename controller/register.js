import UserModel from "../models/register.js"
import { accesToken } from "../services/jwtToken.js"



 const Register=async(req,res,next)=>{

console.log("bodyyyyyyyyyyyyyyyyyyyy")
console.log(req.query)

console.log(req.body)
   
const response=await UserModel.create({
    userName:req.body.name,
    job:req.body.job,
    email:req.body.email,
    password:req.body.password

})

const AccesToken = accesToken(response.userName,response.email,response._id,)

// res.cookie('token', AccesToken, {
//     httpOnly: true,  
//     secure: true,    
//     maxAge: 5 * 24 * 60 * 60 * 1000  
//   });

  
console.log("created succesfully")
console.log(response)
return res.status(200).json({ status: true ,token:AccesToken});
}

export default Register