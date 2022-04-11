// npm start : 웹사이트 표시
// ctrl + c : 웹사이트 표시 (Y/N)
import React from "react";
import Macaron from "./Macaron";
import Macaron_c from "./Macaron_c";
import cakes from "./cakes.json";
import PropTypes from 'prop-types';

/* 데이터 관리
  Pro ps(프로펄트): 단방향 데이터?

*/

// 서버에서 가져온 데이터를 저장하는 변수
// const foodLike = [];
// const cakes = [
//   {
//     id:1,
//     name:'French Macarons',
//     image:'https://i.pinimg.com/564x/82/18/a4/8218a40cf4b9a575878a4c864dbbcc68.jpg'
//   },
//   {
//     id:2,
//     name:'Macaron original',
//     image:'https://i.pinimg.com/564x/4d/f7/0d/4df70d407b0bbdcba10132ef4342a3b4.jpg'
//   },
//   {
//     id:3,
//     name:'Rainbow Macarons',
//     image:'https://i.pinimg.com/564x/3f/0f/65/3f0f659b394a05c6d8ab7ba9de7e5534.jpg'
//   }
// ];

// function Food(props){ //자식컴포넌트
//   return(
//     <h1>I Like {props.propsName}</h1>

//   );
// }

// function Food(props){ //자식컴포넌트 //구조 분해 할당
//   const {propsName} = props;
//   return(
//     <h1>I Like {propsName} </h1>
    
//   );
// }

function Food({propsid,propsname,propsimage}){ //자식컴포넌트 //구조 분해 할당
  return(
    <div>
      <h1>cake No.{propsid}</h1>
      <h2>{propsname}</h2>
      <img src={propsimage} alt={propsimage} />
    </div>    
  );
}

function App_1() { //부모컴포넌트
  return (
    <>
    <div>안녕하세요!!</div>
    <Macaron />
    <Macaron_c />
    {/* <Food propsName = {"macaron"} /> */}
    {cakes.map(cake => (
                          <Food 
                            propsid = {cake.id}
                            propsname = {cake.name}
                            propsimage = {cake.image}
                          />
                        )
              )
    }
    </>

  );
}

// npm install prop-types
Food.PropTypes = {
propsid: PropTypes.number.isRequired,
propsname: PropTypes.string.isRequired,
propsimage: PropTypes.string
}


// export default App_1;
