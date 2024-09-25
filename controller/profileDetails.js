import UserModel from "../models/register.js"



const ProfileDetails=async(req,res,next)=>{


    console.log("profile details",req.user.id)
    const userId=req.user.id

    const response=await UserModel.findById(userId)

    console.log(response)

    return res.json({status:true,personalDetails:response})


}





export default ProfileDetails



export const UpdateProfileDetails=async(req,res,next)=>{


  console.log("updateddddddddddddddddddd")
  
    const userId=req.user.id

    const updateData = {
        userName: req.body.name,
        job: req.body.job,
        email: req.body.email
      };
      
      // Add imageUrl to the update object only if it's present in req.body
      if (req.body.image) {
        updateData.imageUrl = req.body.image
      }else{
        updateData.imageUrl=null
      }

    const response=await UserModel.findByIdAndUpdate(userId,{$set:updateData })
    console.log(response)
    return res.json({status:true})

}



export const blogProfileDetails=async(req,res,next)=>{

  console.log("blog")
   
  const userId=req.user.id

  const data=await UserModel.findOne({_id:userId})
  console.log("ivide")
  console.log(data)

  const response={
    name:data.userName,
    job:data.job,
    imageUrl:data.imageUrl
  }
  console.log(response)

  return res.json({status:true,response})

}