const express = require('express');
const User = require('../models/user');
const {isLoggedIn} = require('./middlewares');

const router = express.Router()

router.post('/:id/follow', isLoggedIn, async(req, res, next) => {
    try{
        const user = await User.findOne(
            {where:{id:req.body.id}});
        if(user){
            // follow 추가
            await user.addFollowing(parseInt(req.params.id, 10));
        }else{
            res.status(404).send('no user');
        }
    }catch(error){
        console.error(error);
        next(error);
    }
})

module.exports = router;