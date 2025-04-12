import './App.css';
import React, { useState } from 'react';

function App() {
  /**
   * useState 데이터 저장 공간
   * 문자열, 배열, 객체 모두 가능
   *
   * 변수와 비교하여 state의 장점
   *  - 리액트를 웹앱처럼 쓰기 위한 state에 보관
   *  - state는 데이터가 변경될 때, html이 리렌더링이 된다.
   *  - 중요한 데이터는 state에 넣어서 데이터 바인딩을 해야한다.
   *
   * 변수와 함께 생성되는 함수는 변수의 state를 변경하는 함수이다.
   * 변수를 변경할 때는 반드시 이 함수를 사용한다.
   * 이 함수를 사용해서 변수를 변경해야 "리렌더링"이 발생한다.
   */
  const [postNames, updatePostNames] = useState([
    '베스트 게시글 1',
    '베스트 게시글 2',
    '베스트 게시글 3',
  ]);

  let [goodCount, updateGoodCount] = useState(0);

  const changedPostBoard = () => {
    const changedPostNames = [...postNames];
    changedPostNames[0] = '베스트 게시글 4';
    updatePostNames(changedPostNames);
  };

  function sortPost() {
    updatePostNames([...postNames].sort());
  }

  return (
    <div className="App">
      <div className="black-nav">
        {/* 블로그 제목같은 경우 수시로 바뀌지는 않음 -> 굳이 state에 넣을 필요없다. 근데 i18n 고려한다면?*/}
        <div>개발 Blog</div>
      </div>
      <button onClick={changedPostBoard}>게시판 변경</button>
      <button onClick={sortPost}>정렬</button>
      <div className="postList">
        <h3>
          {postNames[0]}
          <span
            onClick={() => {
              updateGoodCount(goodCount + 1);
            }}
          >
            👍
          </span>
          {goodCount}
        </h3>
        <p>4월 10일 발행</p>
        <hr />
      </div>
      <div className="postList">
        <h3>{postNames[1]}</h3>
        <p>4월 10일 발행</p>
        <hr />
      </div>
      <div className="postList">
        <h3>{postNames[2]}</h3>
        <p>4월 10일 발행</p>
        <hr />
      </div>

      {/* Component 문법 */}
      <Modal></Modal>
    </div>
  );
}

/**
 * Component문법
 * 필요한 html을 함수로 작성해서 사용할 수 있다.
 * 첫글자는 대문자
 * - 관리가 편해짐
 *
 * 만드는 기준
 * - 자주 반복
 * - 내용이 자주 변경
 *
 * @returns
 */
function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
