import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: 'Basic Name'
  }

  /**
   * propTypes 의 종류
   * array: 배열
   * bool: 참, 거짓
   * func: 함수
   * number: 숫자
   * object: 객체
   * string: 문자열
   * symbol: ES6 문법의 심벌 개체
   * node: 렌더링할 수 있는 모든 것(숫자, 문자열, element 또는 이들로 구성된 배열)
   * element: 리액트 요소
   * instanceOf(MyClass): 특정 클래스의 인스턴스
   * oneOf(['Male', 'Female']): 주어진 배열 요소 중 값 하나
   * oneOfType([React.PropTypes.sting, React.PropTypes.number]): 주어진 배열 안의 종류중 하나
   * arrayOf(React.PropTypes.number): 주어진 종류로 구성된 배열
   * objectOf(React.PropTypes.number): 주어진 종류의 값을 가진 객체
   * shape({name: React.PropTypes.string, age: React.PropTypes.number}): 주어진 스키마를 가진 객체
   * any: 아무종류
   */

  static propTypes = {
    name: PropTypes.string, // name props 타입을 문자열로 지정
    age: PropTypes.number.isRequired
  }

  /*
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }
  */

  // state를 constructor 에서 빼기
  state = {
    number: 0
  }

  render() {
    return (
      <div>
        <p>MyComponent is {this.props.name}.</p>
        <p>I'm {this.props.age} years old.</p>
        <p>number: {this.state.number}</p>
        <button onClick={() => {
          this.setState({
            number: this.state.number + 1
          })
          /**
           * state 값 없데이트시에는 반드시 setState를 사용.
           * 일반적으로 this.state에 접근하여 값 변경시에는 컴포넌트가 자동으로 렌더링 하지 않음.
           * this.forceUpdate() 를 호출하여 강제로 리렌더링을 할수 있지만, 매우 비효율적으로 피해야함.
           * 배열이나 객체 업데이트시에는 추후에 ... => immutable....
           */
        }}>Plus Number</button>
      </div>
    );
  }
}

export default MyComponent;