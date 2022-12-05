import React, {useState} from "react";
const StateComponent = () => {
    // 함수형 컴포넌트에서 state를 생성하는 방법
    const [message, setMessage] = useState('');

    //버튼에 연결한 이벤트 처리 함수
    const onClickEnter = (e) => {setMessage('안녕하세요')}
    const onClickLeave = (e) => {setMessage('안녕히 가세요')}

    const [color, setColor] = useState('black');

    return(
        <>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}}
                onClick={()=>setColor('red')}>빨강</button>
            <button style={{color:'green'}} 
                onClick={()=>setColor('green')}>녹색</button>
            <button style={{color:'blue'}} 
                onClick={()=>setColor('blue')}>파랑</button>
        </>
    )
};

export default StateComponent;