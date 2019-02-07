import React, { Component } from 'react';

/**
 * 이벤트 사용시 주의사항.
 * 1. 이벤트 이름은 camelCase
 * 2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
 * 3. DOM 요소에만 이벤트를 설정할 수 있음. => 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정할 수는 있음.
 */

/**
 * 이벤트 종류
 * Clipboard
 * Form
 * Composition
 * Mouse
 * keyboard
 * Selection
 * Focus
 * Touch
 * UI
 * Image
 * Wheel
 * Anumation
 * Media
 * Transition
 */

class EventPractice extends Component {

  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  state = {
    username: '',
    message: ''
  }

  /**
   * Property Initializer Syntax를 사용한 메서드 작성.
   * 항상 constructor에서 함수를 바인딩 하는것이 불편하다고 느낄때
   * 바벨의 transform-class-properties문법을 사용하여 화살표 함수 형태로 메서드를 정의
   */
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = () => {
    alert(`${this.state.username} : ${this.state.message}`);
    this.setState({
      username: '',
      message: ''
    });
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="유저명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;