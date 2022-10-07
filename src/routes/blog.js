const router = require('express').Router();
const bodyParser = require('body-parser');
const Blog = require('../models/Blog')

// Your routing code goes here

router.use(bodyParser());
router.get('/blog',async(req,res)=>{
   try{
    const searchQuery = req.query;
    const data = await Blog.find({
        topic: req.query.search
    }).limit(Number(req.query.page) * 5);
    res.json({
        status: 'Success',
        result: data
    });
   }
catch(e){
    res.json({
        status: 'failed',
        message: e.message
    });
}
});

router.post('/blog', async(req, res)=>{
    try{
     const blog = await Blog.create(req.body);
     res.json({
        status: 'Success',
        result: blog
     });
    }
 catch(e){
     res.json({
         status: 'failed',
         message: e.message
     });
 }
 });

 router.put('/blog/:id', async(req, res)=>{
    try{
     await Blog.updateOne({_id: req.params.id}, req.body);
     const blog = await Blog.findOne({
        _id: req.params.id
     });

     res.json({
        status: 'Success',
        result: blog
     });
    }
 catch(e){
     res.json({
         status: 'failed',
         message: e.message
     });
 }
 });

 router.delete('/blog/:id', async(req, res)=>{
    try{
     const blog = await Blog.deleteOne({_id: req.params.id});
     
     res.json({
        status: 'Success',
        result: blog
     });
    }
 catch(e){
     res.json({
         status: 'failed',
         message: e.message
     });
 }
 });

module.exports = router;