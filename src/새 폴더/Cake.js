import React, { Component } from 'react'

export class Cake extends Component {
    constructor(props){
        super(props);
        console.log('constructor함수는 클래스형 컴포넌트가 생성할때 호출됨')
      }
    
      componentDidMount(){
        console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수')
      }
    
      componentDidUpdate(){
        console.log('componentDidUpdate함수는 화면이 새로 그려지면 즉 업데이트 되면 실행되는 함수')
      }
    
      componentWillUnmount(){
        console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수')
      }

    state = {
        price:10000,
        discountPrice:0,
    };

    discount = () =>{
        this.setState(current =>({
            discountPrice: current.price *0.7
        }));
    };


    
  render() {
    return (
      <div>
            <h1>치즈 케이크 가격은 {this.state.price}원 입니다.</h1>
            <h2>30%할인 가격은{this.state.discountPrice}원 입니다.</h2>
            <button onClick={this.discount}>30% 할인</button>
      </div>
    )
  }
}

export default Cake