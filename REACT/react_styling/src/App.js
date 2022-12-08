// import CSSModule from './CSSModule';
// import styles from './App.scss';
// import classNames from 'classnames/bind';
// import Button from "./components/Button";
// const cx = classNames.bind(styles);

/*
function App() {
  const isBlue = false;
  return(
    <div>
      <div className={cx('box',{blue:isBlue})}>
        <div className={cx('box-inside')}/>
      </div>
      <CSSModule/>
    </div>
  );
}
export default App;
*/

// function App() {
//   return(
//     <Button>버튼</Button>
//   );
// }
// import StyledComponent from './components/StyledComponent';
// import './App.css';
import React from "react";
import axios from 'axios';

function App() {
  return(
    <div>
      <button onClick={(e)=>{
        /*
        let request = new XMLHttpRequest();
        // GET 방식으로 요청
        request.open('GET', 'https://jsonplaceholder.typicode.com/users');
        // POST 방식일 때는 send에 파라미터를 대입
        request.send('');
        request.addEventListener('load', ()=>{
          let data= JSON.parse(request.responseText);
          // 데이터를 가져오는데 성공했을 때 처리
          console.log(data);
        });
        request.addEventListener('error', (error)=>{
          // 데이터를 가져오는데 실패했을 때 처리
          console.log(error);
        });
        */
        /*
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error.message))
        */
        
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
      }}> 다운로드 </button>
    </div>
  )
}
export default App;