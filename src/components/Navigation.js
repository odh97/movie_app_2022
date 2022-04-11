import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  return (
    <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>

    // Link(링크) : 누르면 주소(URL)값을 변경해준다
    // Link(링크) > to : 눌렀을때 불러오는 값을 지정

    /* 링크를 누르면 주소가 변경되고 Route의 path 값과 동일한 링크로 이동하게된다.
    (링크과 path 값이 틀리면 Link(링크) 값으로 변경은 되겠지만 path과 틀리기 때문에 js 폴더를 못 불러온다.)  */
  )
}

export default Navigation