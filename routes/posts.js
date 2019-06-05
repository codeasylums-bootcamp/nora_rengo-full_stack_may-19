const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const postModel = require('../models/postmodels');
const auth = require('../auth');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');


//storage engine
// const storage = new GridFsStorage({
//     url: mongoURI,
//     file: (req, file) => {
//       return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//           if (err) {
//             return reject(err);
//           }
//           const filename = buf.toString('hex') + path.extname(file.originalname);
//           const fileInfo = {
//             filename: filename,
//             bucketName: 'uploads'
//           };
//           resolve(fileInfo);
//         });
//       });
//     }
//   });
//const upload = multer({ storage });
  
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './uploads/');
    },
    filename: function(req,file, cb){
        cb(null, new Date().toISOString() + file.originalname);
    }
})

const upload = multer({storage:storage});


router.get('/posts',auth,function(req,res){
    postModel.find()
    .exec()
    .then(posts=>{
        res.json(posts).status(200);
    })
});

// router.get('/:postID',function(req,res){
//     // const id = req.params.postID;
//     // postModel.findById(id)
//     // .exec()
//     // .then(post=>{
//     //     res.json(post).sendStatus(200);
//     // })
//     console.log(req);
// })


router.post('/posts',upload.single('productImage'),function(req,res){
    console.log(req.file);
    const newPost = new postModel({
        _id : new mongoose.Types.ObjectId(),
        category : req.body.category,
        img : req.file.path,
        user_id : req.body.user_id
    })
    newPost.save();
    res.send("POst created !!").status(201);
})

router.put('/posts/like',function(req,res){
    //var ids = req.body.likes.user_id;
    
       postModel.findByIdAndUpdate(req.body.pId, {$push: {likes: req.body.likes}},  {new: true})
        .exec()
        .then((result) => {
        //   if (err) {
        //     return res.status(400).json({
        //       error: errorHandler.getErrorMessage(err)
        //     })
        //   }
          res.json(result)
        })
})

router.put('/posts/unlike',function(req,res){
    //var ids = req.body.likes.user_id;
    
       postModel.findByIdAndUpdate(req.body.pId, {$pull: {likes: req.body.likes}},  {new: true})
        .exec()
        .then((result) => {
        //   if (err) {
        //     return res.status(400).json({
        //       error: errorHandler.getErrorMessage(err)
        //     })
        //   }
          res.json(result)
        })
      
})

router.post('/posts/comment',function(req,res){
    //var ids = req.body.likes.user_id;
    
       postModel.findByIdAndUpdate(req.body.pId, {$push: {comment: req.body.comment}},  {new: true})
        .exec()
        .then((result) => {
        //   if (err) {
        //     return res.status(400).json({
        //       error: errorHandler.getErrorMessage(err)
        //     })
        //   }
          res.json(result)
        })
      
})


// router.post('/post',auth,function(req,res){
//     const u_id = req.body.user_id;
//     res.send(u_id);
//     const cont = req.body.content;
//     const newpost = new postModel({
//         _id : new mongoose.Types.ObjectId(),
//         category : req.body.category,
//         img:req.body.img,
//         user_id:req.body.user_id,
//         comment:[{user_id: u_id, content: cont}]
//     });
//     newpost.save();
//     res.send("post created successfully").status(201);
// });

// router.put('/:postID',function(req,res){
//     const id = req.params.postID;
//     const newPrice = req.body.cost;
//     postModel.update({_id:id},{$set:{cost:newPrice}})
//     .exec()
//     .then(post=>{
//         res.json(post).status(200);
//     })
// });

// router.delete('/:postID',auth,function(req,res){
//     const id = req.params.postID;
//     postModel.remove({_id:id})
//     .exec()
//     .then(object=>{
//         res.json(object).status(200);
//     })
// })

module.exports = router;







//5cf68a25444ab965b125516d