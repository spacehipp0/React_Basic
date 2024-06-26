/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "리액트 독학",
  ]);

  let [좋아요, 좋아요변경] = useState(0);
  let [modal, setModal] = useState(false);

  // a = state에 보관했던 자료 (남자 코트 추천)
  // b = state 변경 도와주는 자료
  /* state는 언제 써야할까?
    -> 변동시 자동으로 html에 반영되게 만들고 싶으면 state 사용해라 */
  return (
    <div className="App">
      <div className="black-nav">
        <h4>Min Bong Blog</h4>
      </div>
      {/* <div className="list">
        <h4 id="firstPost">
          {글제목[0]}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            👍
          </span>
          {좋아요}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[1]}
        </h4>
        {modal == true ? <Modal /> : null}
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  좋아요변경(좋아요 + 1);
                }}
              >
                👍
              </span>
            </h4>
            {modal == true ? <Modal /> : null}
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <button
        onClick={() => {
          // array나 objet를 다룰때 원본은 보존하는게 좋다.
          let copy = [...글제목]; // 그래서 복사본을 만들어 사용한다.
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        수정
      </button>
      <button
        onClick={() => {
          let copy2 = [...글제목];
          copy2.sort();
          글제목변경(copy2);
        }}
      >
        가나다순
      </button>
    </div>
  );
}
function Modal() {
  //component 만들때 함수 제목 = 대문자부터 시작
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
