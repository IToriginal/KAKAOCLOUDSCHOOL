const passport = require('passport');
//로컬 로그인 구현
const local = require('./localStrategy');
//카카오 로그인 구현
const kakao = require('./kakaoStrategy')
const User = require('../models/user');

module.exports = () =>{
    //로그인 성공했을 때 정보를 deserializeUser 함수에게 넘기는 함수
    passport.serializeUser((user,done)=>{
        done(null,user.id);
    });
    // 넘어온 id에 해당하는 데이터가 있으면 데이터베이스에서 찾아서 세션에 저장
    passport.deserializeUser((id,done)=>{
        User.findOne({where:{id},
        include:[{
            model:User,
            attributes:['id','nick'],
            as:'Followers'
        },{
            model:User,
            attributes:['id','nick'],
            as:'Followings'
        }]})
            .then(user => done(null,user))
            .catch(err => done(err))
    })
    local();
    kakao();
}