import express from "express"
import Register from "./controller/register.js"
import Login from "./controller/login.js"
import { verifyAccessToken } from "./services/jwtToken.js"
import Blog, { DeleteBlog, EditBlog, getAllBlogs, getAllDraft, getAllPublished, singleBlogDetails } from "./controller/blog.js"
import ProfileDetails, { blogProfileDetails, UpdateProfileDetails } from "./controller/profileDetails.js"



const router=express()

router.post('/register',Register)

router.post('/login',Login)

router.post('/createBlog',verifyAccessToken,Blog)


router.get('/getAllBlogs',verifyAccessToken,getAllBlogs)

router.get('/getSingleBlog/:blogId',verifyAccessToken,singleBlogDetails)

router.post('/editBlog',verifyAccessToken,EditBlog)

router.get('/personalDetails',verifyAccessToken,ProfileDetails)

router.post('/updateUserDetails',verifyAccessToken,UpdateProfileDetails)

router.get('/getAllDraft',verifyAccessToken,getAllDraft)

router.get('/getAllPublished',verifyAccessToken,getAllPublished)

router.get('/blogProfileDetails',verifyAccessToken,blogProfileDetails)

router.post('/deleteBlog',verifyAccessToken,DeleteBlog)

export default router