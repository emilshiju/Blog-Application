import {Schema,model,Types} from "mongoose";


const blogSchema=new Schema(
    {   
        userId:{
            type:Types.ObjectId,
            ref:"users"
       },
        title:{
            type:String,
            required:true
        },
        image:{
            type:String,
            default: null
           
        },
        description:{
            type:String,
            required:true
        },
        status:{
            type:Boolean,
            default:false
        }
       

    },{
        timestamps: true 
    }
)

const  blogModel=model("blogs",blogSchema)

export default blogModel