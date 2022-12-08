import React, { Component } from 'react';

class Iteration extends Component {
    // 내용이 변경되면 Component를 리랜더링하는 state를 생성
    state = {
        names:['JavaScript'],
        name:''
    }
    // Input에 입력하면 name state의 값을 변경하는 이벤트 처리 함수
    handleChange = (e) => {
        this.setState({
            name:e.target.value
        })
    }
    // name 의 값을 names에 추가하는 함수 - 버튼을 누르면 동작
    // push 대신에 배열을 복제해서 연결하는 concat 함수 이용
    handleInsert = (e) => {
        this.setState({
            names:this.state.names.concat(this.state.name),
            name:''
        })
    }
    
    // 데이터 삭제 함수
    // index를 매개변수로 받아서 삭제
    handleRemove= (index) => {
        const {names} = this.state;
        // const names = this.state.names;
        /*
        // slice(매개변수 2개를 받아서 배열을 잘라내 복제해서 리턴하는 함수)
        // 매개변수는 시작 위치와 마지막 위치를 대입
        this.setState({
            names:[names.slice(0, index),
            names.slice(index+1, names.length)]
        })
        */
        // 넘어온 인덱스와 배열의 인덱스가 다른 것만 추출
        this.setState({
            names:names.filter((item, e) => e !== index)
        })
    }
    
    

    render(){
        const nameList = this.state.names.map(
            (name, index) => <li key = {index}
            onDoubleClick={(e) => this.handleRemove(index)}>{name}</li>
        );
        return (<div>
            {/* {this.state.errorexample.value} */}
            <input onChange={this.handleChange}
            value={this.state.name}/>
            <button onClick={this.handleInsert}>추가</button>
            <ul>{nameList}</ul>
        </div>)
    }
}
export default Iteration;