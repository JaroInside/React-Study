import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const text = '당신은 어썸한가요?';
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    }
    return (
      <div className="my-div">
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
        {
          condition ? '참' : '거짓'
        }
        <hr />
        {
          condition && '보여주세요'
        }
        <div
          style={style}
          // 여기는 주석이 가능
          /**
           * 주석이 가능하다
           */
        />
        // 여기는 주석 안됨. 그대로 렌더링
        /**
         * 역시 그대로 렌더링
         */
        { /* 여기서는 이렇게 주석을 사용한다. */ }
      </div>
    );
  }
}

export default App;
