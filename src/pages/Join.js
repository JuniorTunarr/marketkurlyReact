import "../join.css";
import React from "react";
import TopBar from "../components/TopBar";
import Top from "../components/Top";

function Join() {
  return (
    <div class="container">
      <TopBar />
      <Top />
      <div className="container">
        <div id="wrapper">
          <div id="joinHeader">회원가입</div>
          <div id="wrapper1">
            <div id="separator">
              <span id="mandatoryColor">*</span> 필수입력사항
            </div>
            <div id="inputWrap">
              <div id="inputSmallWrap">
                <div id="input1">
                  아이디<span id="mandatoryColor">*</span>
                </div>
                <div id="input2">
                  <div id="inputBoxWrap">
                    <input id="inputBox1" placeholder="아이디를 입력해주세요" />
                  </div>
                </div>
                <div id="input3">
                  <button id="inputButton1">
                    <span>중복확인</span>
                  </button>
                </div>
              </div>
              <div id="inputSmallWrap">
                <div id="input1">
                  비밀번호<span id="mandatoryColor">*</span>
                </div>
                <div id="input2">
                  <div id="inputBoxWrap">
                    <input
                      id="inputBox1"
                      placeholder="비밀번호를 입력해주세요"
                    />
                  </div>
                </div>
                <div id="input3">
                  <button id="inputButton0">
                    <span></span>
                  </button>
                </div>
              </div>
              <div id="inputSmallWrap">
                <div id="input1">
                  비밀번호확인<span id="mandatoryColor">*</span>
                </div>
                <div id="input2">
                  <div id="inputBoxWrap">
                    <input
                      id="inputBox1"
                      placeholder="비밀번호를 한번 더 입력해주세요"
                    />
                  </div>
                </div>
                <div id="input3">
                  <button id="inputButton0">
                    <span></span>
                  </button>
                </div>
              </div>
              <div id="inputSmallWrap">
                <div id="input1">
                  이름<span id="mandatoryColor">*</span>
                </div>
                <div id="input2">
                  <div id="inputBoxWrap">
                    <input id="inputBox1" placeholder="이름을 입력해주세요" />
                  </div>
                </div>
                <div id="input3">
                  <button id="inputButton0">
                    <span></span>
                  </button>
                </div>
              </div>
              <div id="inputSmallWrap">
                <div id="input1">
                  이메일<span id="mandatoryColor">*</span>
                </div>
                <div id="input2">
                  <div id="inputBoxWrap">
                    <input
                      id="inputBox1"
                      placeholder="예: marketkurly@kurly.com"
                    />
                  </div>
                </div>
                <div id="input3">
                  <button id="inputButton1">
                    <span>중복확인</span>
                  </button>
                </div>
              </div>
              <div id="inputSmallWrap">
                <div id="input1">
                  휴대폰<span id="mandatoryColor">*</span>
                </div>
                <div id="input2">
                  <div id="inputBoxWrap">
                    <input id="inputBox1" placeholder="숫자만 입력해주세요." />
                  </div>
                </div>
                <div id="input3">
                  <button id="inputButton2">
                    <span>인증번호 받기</span>
                  </button>
                </div>
              </div>
              <div id="inputSmallWrap">
                <div id="input1">
                  주소<span id="mandatoryColor">*</span>
                </div>
                <div id="input2">
                  <div id="inputBoxWrap">
                    <button id="buttonBox">
                      <span id="buttonBoxSpan1">
                        <img src="../image/ico_search_40x40.svg" />
                        주소 검색
                      </span>
                    </button>
                    <span id="buttonBoxSpan2">
                      배송지에 따라 상품 정보가 달라질 수 있습니다.
                    </span>
                  </div>
                </div>
                <div id="input3">
                  <button id="inputButton0">
                    <span></span>
                  </button>
                </div>
              </div>
              <div id="inputSmallWrap" style={{ marginTop: "20px" }}>
                <div id="input1">성별</div>
                <div id="input2">
                  <div id="inputBoxWrap">
                    <div id="inputRadioWrap1">
                      <label>
                        <input type="radio" />
                        <span id="inputRadioCheck">
                          <div></div>
                        </span>
                        <span id="inputRadioCheckText">남자</span>
                      </label>
                      <label>
                        <input type="radio" />
                        <span id="inputRadioUnCheck">
                          <div></div>
                        </span>
                        <span id="inputRadioCheckText">여자</span>
                      </label>
                      <label>
                        <input type="radio" />
                        <span id="inputRadioUnCheck">
                          <div></div>
                        </span>
                        <span id="inputRadioCheckText">선택안함</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div id="input3">
                  <button id="inputButton0">
                    <span></span>
                  </button>
                </div>
              </div>
              <div id="inputSmallWrap">
                <div id="input1">생년월일</div>
                <div id="input2">
                  <div id="inputBoxWrap1">
                    <div>
                      <input id="inputBox1" placeholder="YYYY" />
                    </div>
                    <div>
                      <input id="inputBox1" type="text" placeholder="MM" />
                    </div>
                    <div>
                      <input id="inputBox1" type="text" placeholder="DD" />
                    </div>
                  </div>
                </div>
                <div id="input3">
                  <button id="inputButton0">
                    <span></span>
                  </button>
                </div>
              </div>
              <div id="inputSmallWrap">
                <div id="input1">추가입력 사항</div>
                <div id="input2">
                  <div id="inputBoxWrap">
                    <div id="inputRadioWrap1">
                      <label>
                        <input type="radio" />
                        <span id="inputRadioCheck">
                          <div></div>
                        </span>
                        <span id="inputRadioCheckText">
                          친구초대 추천 아이디
                        </span>
                      </label>
                      <label>
                        <input type="radio" />
                        <span id="inputRadioUnCheck">
                          <div></div>
                        </span>
                        <span id="inputRadioCheckText">참여 이벤트명</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div id="input3">
                  <button id="inputButton0">
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <div id="separator1"></div>
            <div>
              <div id="inputSmallWrap">
                <div id="input1">
                  이용약관 동의 <span id="mandatoryColor">*</span>
                </div>
                <div id="input2">
                  <div id="inputBoxWrap2">
                    <label id="checkboxWrap">
                      <input type="checkbox" id="checkbox" />
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                        id="checkboxImg"
                      />
                      <span id="checkboxWrapSpan"> 전체 동의합니다.</span>
                    </label>
                    <div>
                      <div id="checkboxProp">
                        선택항목에 동의하지 않은 경우도 회원가입 및 일반적인
                        서비스를 이용할 수 있습니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="checkboxTotalWrap">
                <div id="input1">
                  <span id="mandatoryColor"></span>
                </div>
                <div id="checkbox1">
                  <div id="inputBoxWrap3">
                    <label id="checkboxWrap">
                      <input type="checkbox" id="checkbox" />
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                        id="checkboxImg"
                      />
                      <span id="fontSize14"> 이용약관 동의</span>
                    </label>
                    <span id="checkbox1Span"> (필수)</span>
                  </div>
                  <a id="fontSize14">약관보기 ></a>
                </div>
              </div>
              <div id="checkboxTotalWrap">
                <div id="input1">
                  <span id="mandatoryColor"></span>
                </div>
                <div id="checkbox1">
                  <div id="inputBoxWrap3">
                    <label id="checkboxWrap">
                      <input type="checkbox" id="checkbox" />
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                        id="checkboxImg"
                      />
                      <span id="fontSize14">개인정보 수집·이용 동의</span>
                    </label>
                    <span id="checkbox1Span"> (필수)</span>
                  </div>
                  <a id="fontSize14">약관보기 ></a>
                </div>
              </div>
              <div id="checkboxTotalWrap">
                <div id="input1">
                  <span id="mandatoryColor"></span>
                </div>
                <div id="checkbox1">
                  <div id="inputBoxWrap3">
                    <label id="checkboxWrap">
                      <input type="checkbox" id="checkbox" />
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                        id="checkboxImg"
                      />
                      <span id="fontSize14"> 개인정보 수집·이용 동의</span>
                    </label>
                    <span id="checkbox1Span"> (선택)</span>
                  </div>
                  <a id="fontSize14">약관보기 ></a>
                </div>
              </div>
              <div>
                <div id="checkboxTotalWrap">
                  <div id="input1">
                    <span id="mandatoryColor"></span>
                  </div>
                  <div id="checkbox1">
                    <div id="inputBoxWrap3">
                      <label id="checkboxWrap">
                        <input type="checkbox" id="checkbox" />
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                          id="checkboxImg"
                        />
                        <span id="fontSize14">
                          무료배송,할인쿠폰 등 혜택/정보 수신 동의
                        </span>
                      </label>
                      <span id="checkbox1Span"> (선택)</span>
                    </div>
                  </div>
                </div>
                <div id="checkboxTotalWrap">
                  <div id="input1">
                    <span id="mandatoryColor"></span>
                  </div>
                  <div id="checkbox1">
                    <div id="inputBoxWrap4">
                      <label id="checkboxWrap1">
                        <input type="checkbox" id="checkbox" />
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                          id="checkboxImg"
                        />
                        <span id="fontSize14"> SMS</span>
                      </label>
                      <label id="checkboxWrap2">
                        <input type="checkbox" id="checkbox" />
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                          id="checkboxImg"
                        />
                        <span id="fontSize14"> 이메일</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div id="checkboxTotalWrap1">
                  ㄴ
                  <span>
                    동의 시 한달 간[5%적립] + [2만원 이상 무료배송] 첫 주문 후
                    안내
                  </span>
                </div>
              </div>
              <div id="checkboxTotalWrap">
                <div id="input1">
                  <span id="mandatoryColor"></span>
                </div>
                <div id="checkbox1">
                  <div id="inputBoxWrap3">
                    <label id="checkboxWrap">
                      <input type="checkbox" id="checkbox" />
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                        id="checkboxImg"
                      />
                      <span id="fontSize14">본인은 만 14세 이상입니다.</span>
                    </label>
                    <span id="checkbox1Span"> (필수)</span>
                  </div>
                </div>
              </div>
            </div>
            <div id="enterButtonWrap">
              <button id="enterButton">
                <span>가입하기</span>
              </button>
            </div>
          </div>
        </div>
        <footer>
          <hr class="hr2" />
          <img class="fi" src="../image/footer.png" alt="푸터 이미지" />
          <div class="divfp">
            <p class="fp">
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

export default Join;
