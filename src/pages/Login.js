import "../login.css";
import React from "react";
import TopBar from "../components/TopBar";
import Top from "../components/Top";
function Login() {
  return (
    <div className="container">
      <div className="container">
        <main>
          <div id="wrapper">
            <div id="loginHeader">로그인</div>
            <div id="loginForm">
              <form>
                <div id="inputForm">
                  <div id="inputForm1">
                    <input
                      id="inputProp"
                      type="text"
                      placeholder="아이디를 입력해주세요"
                    />
                  </div>
                  <div id="inputForm1">
                    <input
                      id="inputProp"
                      type="text"
                      placeholder="비밀번호를 입력해주세요"
                    />
                  </div>
                </div>
                <div id="findForm">
                  <a id="findText" href="https://www.kurly.com/member/find/id">
                    아이디 찾기{" "}
                  </a>
                  <span>&nbsp;&nbsp;|&nbsp;&nbsp; </span>
                  <a
                    id="findText"
                    href="https://www.kurly.com/member/find/password">
                    비밀번호 찾기
                  </a>
                </div>
                <div>
                  <div id="buttonForm">
                    <button id="button">
                      <span id="buttonSpan">로그인</span>
                    </button>
                    <button id="button1" onclick="location.href='join.html'">
                      <span id="buttonSpan1">회원가입</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
