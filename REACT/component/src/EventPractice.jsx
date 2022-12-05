import React, {useState} from "react";
const EventPractice = () => {
    /*
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    */

    const [form, setForm] = useState({
        username:'',
        message:''
    });
    const {username, message} = form;
    
    const onChange = (e) => {
        //Form을 복제해서 e.target.name에 해당하는 속성만 value로 설정
        const nextForm = {
            ...form,
            [e.target.name]:e.target.value
        };
        setForm(nextForm);
    }

    // //버튼 클릭 이벤트 함수
    // const onClick = (e) => {
    //     alert(username + ":" + message);
    //     setForm({
    //         username:'',
    //         message:''
    //     })
    // }
    
    
    return(
        <>
            <input type="text" name="username" value={username} placeholder='이름을 입력하시오' onChange={onChange}/>
            <input type="text" name="message" value={message} placeholder='메시지를 입력하세요' onChange={onChange}/>
            <button>확인</button>
        </>
    );
}
export default EventPractice;