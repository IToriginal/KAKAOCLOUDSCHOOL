import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1>착한 사라마라인</h1>
      <ul>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/profiles/userSmaria1">1번 사마인 프로필</Link></li>
        <li><Link to="/profiles/userSmaria2">2번 사마인 프로필</Link></li>
        <li><Link to="/profiles/hunt">존재하지 않는 프로필</Link></li>
        <li><Link to="/articles">게시물</Link></li>
      </ul>
    </div>
  );
};
export default Home;
