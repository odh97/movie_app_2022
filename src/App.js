import React from 'react';
import {BrowserRouter,Routes, Route } from 'react-router-dom'; 

import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movie_detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>

    //router(라우터) : 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러옴
    //BrowserRouter(브라우저라우터) : 전체를 묶어줄때 사용
    //Navigation(네비게이션) : BrowserRouter(브라우저라우터) 바로 다음에 위치
    //Routes(라우터스) : 라우터가 여러개일 경우 묶어주는 역할(ul / ol 등의 역할과 같은 것 같다)
    //Route(라우터) : li의 역할과 같은 것 같다
    //Route(라우터) > path : 주소(URL) 역할
  )
}

export default App