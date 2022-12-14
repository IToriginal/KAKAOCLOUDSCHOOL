const express = require('express');
const axios = require('axios');

// 매번 동일한 요청을 위한 URL 상수로 설정
// const URL = 'http://localhost:8000/v1';
const URL = 'http://localhost:8000/v2';
// ajax 요청을 할 때 누가 요청했는지 확인해주기 위해서 oirigin header 추가
axios.defaults.headers.origin='http://localhost:4000';

// 토큰 발급 코드 수행
const request = async(req, api) => {
    try{
        if (!req.session.jwt) { // 세션에 토큰이 없으면 토큰 발급 시도
            const tokenResult = await axios.post(`${URL}/token`, {
                clientSecret: process.env.CLIENT_SECRET,
            });
            req.seesion.jwt = tokenResult.data.token;
        }
        // 토큰 내용 확인
        const result = await axios.get(`${URL}${api}`, {
            headers:{authorization:req.seesion.jwt}
        })
        return result;
    }catch(error){
        //토큰 유효기간 만료
        if(error.response.status === 419){
            //기존 토큰 삭제
            delete req.session.jwt;
            //토큰 재생성 요청
            return request(req, api);
        }
        return error.response
    }
}

const router = express.Router();

router.get('/mypost', async(req, res, next)=>{
        try{
            const result = await request(req, '/posts/my');
            res.json(result.data);
        }catch(error){
            console.error(error);
            return next(error);
        }
})


router.get('/test', async (req, res, next) => { // 토큰 테스트 라우터
    try{
        if (!req.session.jwt) { // 세션에 토큰이 없으면 토큰 발급 시도
            const tokenResult = await axios.post('http://localhost:8000/v2/token', {
                clientSecret: process.env.CLIENT_SECRET
            });
            if (tokenResult.data && tokenResult.data.code === 200) { // 토큰 발급 성공 (정상 응답 : 200)
                req.session.jwt = tokenResult.data.token; // 세션에 토큰 저장
            } else {
                // 토큰 발급 실패
                return res.json(tokenResult.data); // 발급 실패 사유 응답
            }
        }
        // 토큰 내용 확인
        const result = await axios.get('http://localhost:8000/v2/test', {
            headers:{authorization:req.seesion.jwt}
        })
        return res.json(result, data);
    }catch(error){
        console.error(error)
        return next(error);
    }
})

router.get('/',(req, res)=>{
    res.render('main', {key:process.env.CLIENT_SECRET})
})

module.exports = router;
