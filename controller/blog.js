import blogModel from "../models/blog.js"




const Blog=async(req,res,next)=>{

    console.log("blog")

    console.log(req.body)
    const userId=req.user.id
    console.log(userId)



    const response=await  blogModel.create({
        userId:userId,
        title:req.body.title,
        description:req.body.description,
        image:req?.body?.image ||null,
        status:req.body.status

    })

    console.log("crated succesfulyy")
    console.log(response)

    return res.json({status:true})
}

export default Blog


export const getAllBlogs=async(req,res,next)=>{



    console.log("get all blogs")

    const response=await blogModel.find({}).populate('userId')
    console.log(response)

    const userId=req.user.id

    return res.json({status:true,response,userId})


}

export const singleBlogDetails=async(req,res,next)=>{
    const Id=req.params.blogId


    const response=await blogModel.findOne({_id:Id})
     console.log("single blog details")
     console.log(response)

     return res.json({status:true,blogDetails:response})

}


export const EditBlog=async(req,res,next)=>{


    console.log("updated",req.body)

    const updated={
        title:req.body.title,
        description:req.body.description,
        status:req.body.status
    }

    if(req.body.image){
        updated.image=req.body.image
    }else{
        updated.image=null
    }


    const response=await blogModel.findByIdAndUpdate(req.body.blogId,{$set:updated})

    console.log(response)

    return res.json({status:true})

}


export const  getAllDraft=async(req,res,next)=>{

    const userId=req.user.id

    const response=await blogModel.find({ userId, status: false }).populate('userId')
    
  console.log("allllllllllllllll 999999999999999999")
    console.log(response)
   return res.json({status:true,response})




}

export const getAllPublished=async(req,res,next)=>{

    const userId=req.user.id

   

    const response=await blogModel.find({ userId, status: true }).populate('userId')
    

    console.log(response)
   return res.json({status:true,response})


}

