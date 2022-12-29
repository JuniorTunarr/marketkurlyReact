import "../login.css";
import React from "react";
import TopBar from "../components/TopBar";
import Top from "../components/Top";
function Login() {
  return (
    <div className="container">
      <TopBar />
      <Top />
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
        <footer>
          <hr className="hr2" />
          <img className="fi" src="../image/footer.png" alt="푸터 이미지" />
          <div className="divfp">
            <p className="fp">
              컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가
              판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
              <br />
              마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
              통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질,
              교환/환불 등 의무와 책임을 부담하지 않습니다.
              <br />© KURLY CORP. ALL RIGHTS RESERVED
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Login;
