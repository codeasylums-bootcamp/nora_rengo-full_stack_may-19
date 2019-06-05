const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userModel = require('../models/usermodels');
const auth = require('../auth');
// var resf

var fs = require('fs');

var imgSchema = mongoose.Schema;
var multer = require('multer');

router.get('/', function (req, res) {
    userModel.find()
        .exec()
        .then(users => {
            res.json(users).status(200);
        });
    //res.send("vvsfbdf");
});

// const addFollowing = (req,res) => {
//     userModel.findByIdAndUpdate(req.body.user1, { $push: { following: req.body.user2 } }, { new: true })
//     .exec()
//     .then((result) => {
//         res.send(result)
//     })
// }

// const addFollower = (req,res) => {
//     userModel.findByIdAndUpdate(req.body.user2, { $push: { follower: req.body.user1 } }, { new: true })
//     .exec()
//     .then((result) => {
//         res.send(result)
//     })
// }

router.delete('/users/unfollow', function (req, res) {
    // userModel.find({ _id: req.body.user1 })
    //     .exec()
    //     .then(users => {
    //         if (users.length > 0) {
    //             res.send("You are already following the user")
    //         }
    //         else {
                userModel.findByIdAndUpdate(req.body.user1, {$pull: {following: req.body.user2}})
                    .exec()
                    .then((result) => {
                        //   if (err) {
                        //     return res.status(400).json({
                        //       error: errorHandler.getErrorMessage(err)
                        //     })
                        //   }
                        res.json(result)
                    }),
            //}

        userModel.findByIdAndUpdate(req.body.user2, { $pull: { followedBy: req.body.user1 } }, { new: true })
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



router.put('/users/follow', function (req, res) {
    // userModel.find({ _id: req.body.user1 })
    //     .exec()
    //     .then(users => {
    //         if (users.length > 0) {
    //             res.send("You are already following the user")
    //         }
    //         else {
                userModel.findByIdAndUpdate(req.body.user1, { $push: { following: req.body.user2 } }, { new: true })
                    .exec()
                    .then((result) => {
                        //   if (err) {
                        //     return res.status(400).json({
                        //       error: errorHandler.getErrorMessage(err)
                        //     })
                        //   }
                        res.json(result)
                    })
            //}
        ,
        userModel.findByIdAndUpdate(req.body.user2, { $push: { followedBy: req.body.user1 } }, { new: true })
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
// userModel.find({ _id: req.body.user1 })
//     .exec()
//     .then(users => {
//         if (users.length > 0) {
//             res.send("You are already following the user")
//         }
//         else {
//             //res.send("1");
//             userModel.findByIdAndUpdate(req.body.user1, { $push: { following: req.body.user2 } }, { new: true })
//                 .exec()
//                 .then((result1) => {
//                     userModel.findByIdAndUpdate(req.body.user2, { $push: { followedBy: req.body.user1 } }, { new: true })
//                         .exec()
//                         .then((result) => {
//                            // res.send(result)
//                            resf=result
//                         })

//                 })
//                 res.send(resf)
//         }
//     })


//})

router.post('/register', function (req, res) {
    const newUser = new userModel({
        _id: new mongoose.Types.ObjectId(),
        userName: req.body.userName,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10)
    });
    userModel.find({ email: req.body.email })
        .exec()
        .then(users => {
            if (users.length > 0) {
                res.send("User already exists").status(200);
            }
            else {
                newUser.save();
                res.send("User created successfully").status(201);
            }
        });
});


router.post('/login', function (req, res) {
    userModel.findOne({ email: req.body.email })
        .exec()
        .then(user => {
            if (user == null) {
                res.send("Auth failed").status(401);
            }
            else {
                if (bcryptjs.compareSync(req.body.password, user.password)) {
                    const token = jwt.sign(
                        {
                            email: user.email,
                            _id: user._id
                        },
                        'secret',
                        {
                            expiresIn: '1h'
                        }
                    );
                    res.json({
                        "message": "Auth successful",
                        "token": token
                    }).status(200);
                }
                else {
                    res.send("wrong password").status(401);
                }
            }
        })
});

module.exports = router;

