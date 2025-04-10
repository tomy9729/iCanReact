import './App.css';
import React, { useState } from "react"

function App() {
  /**
   * useState 데이터 저장 공간
   * 문자열, 배열, 객체 모두 가능
   * 
   * 변수와 비교하여 state의 장점
   *  - 리액트를 웹앱처럼 쓰기 위한 state에 보관
   *  - state는 데이터가 변경될 때, html이 리렌더링이 된다. 
   *  - 중요한 데이터는 state에 넣어서 데이터 바인딩을 해야한다.
   */
  const [postName1, updatePostName1] = useState("베스트 게시글 1")
  const [postName2, updatePostName2] = useState("베스트 게시글 2")
  const [postName3, updatePostName3] = useState("베스트 게시글 3")
  const [postNames, updatePostNames] = useState([postName1, postName2, postName3])

  return (
    <div className="App">
      <div className="black-nav">
        {/* 블로그 제목같은 경우 수시로 바뀌지는 않음 -> 굳이 state에 넣을 필요없다. 근데 i18n 고려한다면?*/}
        <div>개발 Blog</div>
      </div>
      <div className="postList">
        <h3 >{postNames[0]}</h3>
        <p>4월 10일 발행</p>
        <hr />
      </div>
      <div className="postList">
        <h3 >{postNames[1]}</h3>
        <p>4월 10일 발행</p>
        <hr />
      </div>
      <div className="postList">
        <h3 >{postNames[2]}</h3>
        <p>4월 10일 발행</p>
        <hr />
      </div>
    </div >
  );
}

export default App;
