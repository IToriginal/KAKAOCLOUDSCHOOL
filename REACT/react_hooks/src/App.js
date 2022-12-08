// /*
// import ErrorBoundary from "./ErrorBoundary";
// import Iteration from "./Iteration";

// function App() {
//   return (
//     <div>
//       <ErrorBoundary>
//       <Iteration/>
//       </ErrorBoundary>
//     </div>
//   );
// }

// export default App;
// */
// /*
// import React, {Component, useState} from "react";
// import InputSample from "./InputSample";

// class Classstate extends Component{
//   /*
//   // 생성자를 만들지 않고 이렇게 state를 초기화 해도 됨
//   state = {
//     count:0
//   }
  

//   constructor(props){
//     super(props)
//     this.state = {
//       count:0
//     }
//   }
//   render(){
//     return(
//       <div>
//         <p>클릭을 {this.state.count} 번 수행</p>
//         <button onClick={
//           (e)=> this.setState(
//             {count:this.state.count +1})}>
//         +1
//         </button>
//       </div>
//     );
//   }
// }

// // 함수형 컴포넌트에서 state 사용
// // 함수형 컴포넌트에서는 this를 사용할 수 없음
// const FunctionState = () => {
//   const[count, setCount] = useState(0);
//   return(
//     <div>
//     <p>클릭을 {count} 번 수행</p>
//     <button onClick={
//       (e)=> setCount(count + 1)}>
//         +1
//     </button>
//   </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Classstate/>
//       <FunctionState/>
//       <InputSample/>
//     </div>
//   );
// }

// export default App;
// */

// import React, {useState, useEffect} from "react";

// const ClassEffect = () => {
//   constructor[count, setCount] = useState(0);
//   useEffect(()=>{
//     console.log("마운트와 업데이트가 끝나면 호출");
//     document.title = `You clicked ${count} times`;
//   }, [count])

//   return(
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={
//         (e) => setCount(count + 1)}>
//           +1
//         </button>
//     </div>
//   )
// }

// const App = () => {
//   return(
//     <div>
//       <ClassEffect/>
//     </div>
//   )
// }

// export default App;

import React from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import {useState, useRef, useMemo} from "react";
import Average from "./Average";

const App = () => {
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  });

  const {username, email} = inputs;

  const onChange = (e) => {
    // state를 수정할 때는 원본을 복제한 후에 수정
    setInputs({
      ...inputs,
      [e.target.name]:e.target.value
    });
  }

  //배열의 데이터를 수정하면 컴포넌트가 리랜더링 될 수 있도록 state로 생성
  const [users, setUsers] = useState([
    {id:1, username:'#1', email:'1@', active : false},
    {id:2, username:'#2', email:'2@', active : true}
  ]);

  // setUsers([...users, 가져온 데이터])

  // 변수를 생성
  const nextId = useRef(3);

  // 데이터 삽입 메서드
  const onCreate = () => {
    // 하나의 객체 생성
    const user = {
      id:nextId.current, username, email
    }
    // users에 user를 추가
    setUsers([...users, user]);

    // 입력 요소 초기화
    setInputs({
      username:'', email:''
    })
    
    // 다음 id를 위해서 id를 1 증가
    nextId.current += 1;
  }

  // 삭제하는 함수
  const onRemove = id => {
    // users state 에서 id가 id인 데이터 삭제
    // id가 일치하지 않는 데이터만 삭제
    // 실제로는 id가 일치하지 않는 데이터만 가지고 배열을 만들어 수정함
    setUsers(users.filter(user => user.id !== id));
  }

  // 수정하는 메서드
  // id에 해당하는 데이터의 active 속성의 값을 반전
  const onToggle = id => {
    setUsers(users.map(user => user.id === id ?{...user, active:!user.active}:user))
  }

  return(
    <div>
      <Average/>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  )
}
export default App;