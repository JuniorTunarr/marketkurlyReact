import "./main.css";
import React from "react";
import styled from "styled-components";
import TopBar from "./components/TopBar";
import Top from "./components/Top";

function App() {
  return (
    <div>
      <TopBar />
      <Top />
      <div className="container">
        {/* <!--메인페이지--> */}
        <main>
          {/* <!-- 메인페이지 배너--> */}
          <div id="banner">
            <ul className="banner_list">
              <li>
                <img src="/image/slide1.jpeg" alt="배너이미지" />
              </li>
              <li>
                <img src="/image/slide2.jpeg" alt="배너이미지" />
              </li>
              <li>
                <img src="/image/slide3.jpeg" alt="배너이미지" />
              </li>
              <li>
                <img src="/image/slide4.png" alt="배너이미지" />
              </li>
              <li>
                <img src="/image/slide5.jpeg" alt="배너이미지" />
              </li>
              <li>
                <img src="/image/slide6.jpeg" alt="배너이미지" />
              </li>
              <li>
                <img src="/image/slide7.jpeg" alt="배너이미지" />
              </li>
              <li>
                <img src="/image/slide8.jpeg" alt="배너이미지" />
              </li>
              <li>
                <img src="/image/slide9.jpeg" alt="배너이미지" />
              </li>
              <li>
                <img src="/image/slide10.jpeg" alt="배너이미지" />
              </li>
              <li>
                <img src="/image/slide11.jpeg" alt="배너이미지" />
              </li>
              <li>
                <img src="/image/slide12.jpeg" alt="배너이미지" />
              </li>
              <li>
                <img src="/image/slide13.jpeg" alt="배너이미지" />
              </li>
              <li>
                <img src="/image/slide14.jpeg" alt="배너이미지" />
              </li>
              <li>
                <img src="/image/slide15.jpeg" alt="배너이미지" />
              </li>
            </ul>
            {/* <!-- <button className="arrow_right1" type="button" alt="오른쪽 화살표" />
          <button className="arrow_left1" type="button" alt="왼쪽 화살표" /> --> */}
          </div>
          {/* <!-- 페이지 우측배너--> */}
          <div className="rightBannerWrap">
            <div className="rightBanner">
              <div className="rightBanner1">
                <a href="#!">
                  <image src="/image/delivery.jpg"></image>
                </a>
              </div>
              <div className="rightBanner2">
                <a href="#!">
                  {" "}
                  <div>등급별 혜택</div>{" "}
                </a>
                <a href="">
                  <div>레시피</div>
                </a>
              </div>
              <div className="rightBanner3">
                <button type="button" disabled>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="#ddd"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 11L9 7L13 11"
                      stroke="#ddd"
                      stroke-width="1.3"></path>
                  </svg>
                </button>
                <br />
                최근 본 상품
                <div></div>
                <button type="button" disabled>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13 7L9 11L5 7"
                      stroke="#666"
                      stroke-width="1.3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* <!--상품 리스트--> */}
          <a href="#!">
            <p className="list_sub">이 상품 어때요?</p>
          </a>
          <div className="pro_list">
            <ul className="list">
              <li>
                <div className="listDiv1">
                  <div className="listDiv2">
                    <img src="/image/goods1.jpeg" alt="상품1" />
                    <button className="cartBtn" type="button">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                        alt="상품1"
                      />
                    </button>
                  </div>
                  <br />
                  <span id="pro_name">
                    [삼삼물산X이태리식탁] 크림 새우 그라탕
                  </span>
                  <br />
                  <span id="pro_sale">
                    <b></b>
                  </span>
                  &nbsp;<span id="pro_price">7,900원</span>
                  <br />
                  <br />
                  <span id="pro_realprice"></span>
                </div>
              </li>
              <li>
                <div className="listDiv1">
                  <div className="listDiv2">
                    <img src="/image/goods2.jpeg" alt="상품1" />
                    <button className="cartBtn" type="button">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                        alt="상품1"
                      />
                    </button>
                  </div>
                  <br />
                  <span id="pro_name">
                    [1등급 한우] 안심 스테이크 200g (냉장)
                  </span>
                  <br />
                  <span id="pro_sale">
                    <b>25%</b>
                  </span>
                  &nbsp;<span id="pro_price">29,100원</span>
                  <br />
                  <span id="pro_realprice">38,800원</span>
                </div>
              </li>
              <li>
                <div className="listDiv1">
                  <div className="listDiv2">
                    <img src="/image/goods3.jpeg" alt="상품1" />
                    <button className="cartBtn" type="button">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                        alt="상품1"
                      />
                    </button>
                  </div>
                  <br />
                  <span id="pro_name">[정호영셰프의 우동카덴] 튀김 우동</span>
                  <br />
                  <span id="pro_sale">
                    <b>12%</b>
                  </span>
                  &nbsp;<span id="pro_price">5,720원</span>
                  <br />
                  <span id="pro_realprice">6,500원</span>
                </div>
              </li>
              <li>
                <div className="listDiv1">
                  <div className="listDiv2">
                    <img src="/image/goods4.jpeg" alt="상품1" />
                    <button className="cartBtn" type="button">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                        alt="상품1"
                      />
                    </button>
                  </div>
                  <br />
                  <span id="pro_name">[HBAF] 허니버터 아몬드 210g</span>
                  <br />
                  <span id="pro_sale"></span>
                  &nbsp;<span id="pro_price">7,500원</span>
                  <br />
                  <span id="pro_realprice"></span>
                </div>
              </li>
            </ul>
            <button className="arrow_left" type="button" alt="왼쪽 화살표" />
            <button className="arrow_right" type="button" alt="오른쪽 화살표" />
          </div>

          <div className="banner1">
            <img src="/image/sale1.jpeg" alt="상품1" />
          </div>

          <div className="first_come">
            <div className="first_comeDiv1">
              <h2 className="firstComeTxt1">선착순 1천 개 한정</h2>
              <h3 className="firstComeTxt2">매일 저녁6시 한정수량 오픈!</h3>
              <span id="firstCome">
                <svg></svg>
              </span>
              <p className="firstComeTxt3">망설이면 늦어요!</p>
            </div>
            <div className="first_comeDiv2">
              <img src="/image/firstComePro.png" alt="상품1" />
              <div className="firstComeImgTxt">
                <strong className="firstComeImgTxt1"> Coming Soon</strong>
                <br />
                <br />
                <span className="firstComeImgTxt2">
                  매일 저녁 6시, 한정 수량 입고
                </span>
              </div>
              <div className="firstComePro">
                <span className="pro_desc1">
                  부담 없이 즐기는 바삭 촉촉 옛날 통닭
                </span>
                <br />
                <span className="pro_name1">
                  두 마리 99치킨 (에어프라이어용) 매일 18시 선착순 판매
                </span>
                <br />
                <span>
                  <b className="pro_price1">9,900 원</b>
                </span>
              </div>
            </div>
          </div>
          <div className="presentWrap">
            <div className="presentWrap1">
              <div className="presentWrap1Div1"></div>
              <div className="presentWrap1Div2">
                <strong className="presentWrap1Div2St">
                  마음을 전하는 연말 선물 🎁
                </strong>
                <p className="presentWrap1Div2P">
                  다가오는 연말엔 한 해동안 곁에 있어준 소중한 사람들에게 마음을
                  전해보세요. 때로는 말보다 행동이 더 큰 감동을 준답니다. 어떤
                  선물을 고를지 고민이라면, 컬리가 추천해드릴게요. 나누는 설렘과
                  함께 여느 때보다 따뜻한 연말을 준비하세요! 🎄
                </p>
              </div>
            </div>
            <div className="presentWrap2">
              <ul>
                <li>
                  <a href="#!">
                    <span className="presentWrap2Span1">
                      <img src="/image/present1.png" alt="상품1" />
                    </span>
                    <span className="presentWrap2Span2">
                      <p id="pro_name1">
                        [에스티 로더] 2022 홀리데이 블록버스터 세트
                      </p>
                      <div>
                        <span id="pro_sale">
                          <b>15%</b>
                        </span>
                        <b>
                          <span id="pro_price">135,150원</span>
                        </b>
                        <span id="pro_realprice">159,000원</span>
                      </div>
                    </span>
                    <div className="goToCartDiv">
                      <button>담기</button>
                    </div>
                  </a>
                </li>
                <li className="marginLeftM15">
                  <a href="#!">
                    <span className="presentWrap2Span1">
                      <img src="/image/present2.png" alt="상품1" />
                    </span>
                    <span className="presentWrap2Span2">
                      <p id="pro_name1">
                        [스타우브] 타원형 꼬꼬떼 냄비 27cm 바질 그린
                      </p>
                      <div>
                        <span id="pro_sale">
                          <b>30%</b>
                        </span>
                        <b>
                          <span id="pro_price">367,500원</span>
                        </b>
                        <span id="pro_realprice">529,000원</span>
                      </div>
                    </span>
                    <div className="goToCartDiv">
                      <button>담기</button>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <span className="presentWrap2Span1">
                      <img src="/image/present3.png" alt="상품1" />
                    </span>
                    <span className="presentWrap2Span2">
                      <p id="pro_name1">
                        [레고] 해리포터 76402 호그와트™: 덤블도어의 집무실
                      </p>
                      <div>
                        <span id="pro_sale">
                          <b>25%</b>
                        </span>
                        <span id="pro_price">
                          <b>97,030원</b>
                        </span>
                        <span id="pro_realprice">129,900원</span>
                      </div>
                    </span>
                    <div className="goToCartDiv">
                      <button>담기</button>
                    </div>
                  </a>
                </li>
                <li className="marginLeftM15">
                  <a href="#!">
                    <span className="presentWrap2Span1">
                      <img src="/image/present4.png" alt="상품1" />
                    </span>
                    <span className="presentWrap2Span2">
                      <p id="pro_name1">
                        [위니비니] 크리스마스 미니 장화 스트라이프 2종
                      </p>
                      <div>
                        <span id="pro_sale">
                          <b>4%</b>
                        </span>
                        <b>
                          <span id="pro_price">5,280원</span>
                        </b>
                        <span id="pro_realprice">5,500원</span>
                      </div>
                    </span>
                    <div className="goToCartDiv">
                      <button>담기</button>
                    </div>
                  </a>
                </li>
              </ul>
              <a className="presentWrap2A2" href="전체보기">
                {" "}
                전체보기 >{" "}
              </a>
            </div>
          </div>
          <div className="productRecomWrap">
            <p className="product_recom">MD추천</p>
            <div className="md_reco">
              <input type="radio" id="tab-1" name="show" checked />
              <input type="radio" id="tab-2" name="show" />
              <input type="radio" id="tab-3" name="show" />
              <input type="radio" id="tab-4" name="show" />
              <input type="radio" id="tab-5" name="show" />
              <input type="radio" id="tab-6" name="show" />
              <input type="radio" id="tab-7" name="show" />
              <input type="radio" id="tab-8" name="show" />
              <input type="radio" id="tab-9" name="show" />
              <input type="radio" id="tab-10" name="show" />
              <input type="radio" id="tab-11" name="show" />
              <input type="radio" id="tab-12" name="show" />
              <input type="radio" id="tab-13" name="show" />
              <input type="radio" id="tab-14" name="show" />
              <input type="radio" id="tab-15" name="show" />
              <input type="radio" id="tab-16" name="show" />
              <input type="radio" id="tab-17" name="show" />
              <input type="radio" id="tab-18" name="show" />
              <input type="radio" id="tab-19" name="show" />

              <div className="md_recom1">
                <label for="tab-1">&ensp;채소&ensp;</label>
                <label for="tab-2">&ensp;과일·견과·쌀&ensp;</label>
                <label for="tab-3">&ensp;수산·해산·건어물&ensp;</label>
                <label for="tab-4">&ensp;정육·계란&ensp;</label>
                <label for="tab-5">&ensp;국·반찬·메인요리&ensp;</label>
                <label for="tab-6">&ensp;샐러드·간편식&ensp;</label>
                <label for="tab-7">&ensp;면·양념·오일&ensp;</label>
              </div>
              <div className="md_recom2">
                <label for="tab-8">&ensp;생수·음료·우유·커피&ensp;</label>
                <label for="tab-9">&ensp;간식·과자·떡&ensp;</label>
                <label for="tab-10">&ensp;베이커리·치즈·델리&ensp;</label>
                <label for="tab-11">&ensp;건강식품&ensp;</label>
                <label for="tab-12">&ensp;와인&ensp;</label>
                <label for="tab-13">&ensp;전통주&ensp;</label>
                <label for="tab-14">&ensp;생활용품·리빙·캠핑&ensp;</label>
              </div>
              <div className="md_recom3">
                <label for="tab-15">&ensp;스킨케어·메이크업&ensp;</label>
                <label for="tab-16">&ensp;헤어·바디·구강&ensp;</label>
                <label for="tab-17">&ensp;주방용품 &ensp;</label>
                <label for="tab-18">&ensp;가전제품&ensp;</label>
                <label for="tab-19">&ensp;선물하기&ensp;</label>
                <label for="tab-20">&ensp;반려동물&ensp;</label>
                <label for="tab-21">&ensp;베이비·키즈·완구&ensp;</label>
                <label for="tab-22">&ensp;여행·티켓&ensp;</label>
              </div>
              <div className="md_pro1">
                <div>
                  <ul className="list1">
                    <li>
                      <img src="/image/vegetable1.png" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">꿀 밤고구마 3kg</span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>11%</b>
                      </span>
                      &nbsp;<span id="pro_price">14,900원</span>
                      <br />
                      <span id="pro_realprice">16,900 원</span>
                    </li>
                    <li>
                      <img src="/image/vegetable2.png" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">꽈리고추 200g</span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>14%</b>
                      </span>
                      &nbsp;<span id="pro_price">2,990원</span>
                      <br />
                      <span id="pro_realprice">3,490원</span>
                    </li>
                    <li>
                      <img src="/image/vegetable3.png" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">양파 3kg</span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>7%</b>
                      </span>
                      &nbsp;<span id="pro_price">6,990원</span>
                      <br />
                      <span id="pro_realprice">75,90원</span>
                    </li>
                    <li>
                      <div className="listDiv2">
                        <img src="/image/vegetable4.jpg" alt="상품1" />
                        <button className="cartBtn" type="button">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                            alt="상품1"
                          />
                        </button>
                      </div>
                      <br />
                      <span id="pro_name">친환경 감자 2kg</span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>14%</b>
                      </span>
                      &nbsp;<span id="pro_price">8,500원</span>
                      <br />
                      <span id="pro_realprice">9,900원</span>
                    </li>
                    <a href="#!">
                      <li id="md_pro_p">채소 전체보기</li>
                    </a>
                  </ul>
                </div>

                <div>
                  <ul className="list1">
                    <li>
                      <img src="/image/swpo.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>[무농약]고구마</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>10%</b>
                      </span>
                      &nbsp;<span id="pro_price">8,990원</span>
                      <br />
                      <br />
                      <span id="pro_realprice">원래가격 얼마일까</span>
                    </li>
                    <li>
                      <img src="/image/nang.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>냉이 150g</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b></b>
                      </span>
                      &nbsp;<span id="pro_price">5,190원</span>
                      <br />
                      <br />
                      <span id="pro_realprice"></span>
                    </li>
                    <li>
                      <img src="/image/kong.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>[무농약]콩나물 300g</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>10%</b>
                      </span>
                      &nbsp;<span id="pro_price">900원</span>
                      <br />
                      <br />
                      <span id="pro_realprice">1000원</span>
                    </li>
                    <li>
                      <img src="/image/papu.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>파프리카 2입</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b></b>
                      </span>
                      &nbsp;<span id="pro_price">3,980원</span>
                      <br />
                      <br />
                      <span id="pro_realprice"></span>
                    </li>
                    <a href="#!">
                      <li id="md_pro_p">채소 〉</li>
                    </a>
                  </ul>
                </div>

                <div>
                  <ul className="list1">
                    <li>
                      <img src="/image/apple.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>부사는 동사</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>10%</b>
                      </span>
                      &nbsp;<span id="pro_price">9,000원</span>
                      <br />
                      <br />
                      <span id="pro_realprice">10,000원</span>
                    </li>
                    <li>
                      <img src="/image/kome.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>참, 외롭다</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b></b>
                      </span>
                      &nbsp;<span id="pro_price">29,900원</span>
                      <br />
                      <br />
                      <span id="pro_realprice"></span>
                    </li>
                    <li>
                      <img src="/image/str.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>딸기는 딸기</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>50%</b>
                      </span>
                      &nbsp;<span id="pro_price">10,000원</span>
                      <br />
                      <br />
                      <span id="pro_realprice">20,000원</span>
                    </li>
                    <li>
                      <img src="/image/oran.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>오렌지를 먹어본지</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>10%</b>
                      </span>
                      &nbsp;<span id="pro_price">18,000원</span>
                      <br />
                      <br />
                      <span id="pro_realprice">20,000원</span>
                    </li>
                    <a href="#!">
                      <li id="md_pro_p">과일·견과·쌀 〉</li>
                    </a>
                  </ul>
                </div>

                <div>
                  <ul className="list1">
                    <li>
                      <img src="/image/oys.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>굴은 굴이다</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>50%</b>
                      </span>
                      &nbsp;<span id="pro_price">25,000원</span>
                      <br />
                      <br />
                      <span id="pro_realprice">50,000원</span>
                    </li>
                    <li>
                      <img src="/image/squ.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>오징오징어</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>20%</b>
                      </span>
                      &nbsp;<span id="pro_price">16,000원</span>
                      <br />
                      <br />
                      <span id="pro_realprice">20,000원</span>
                    </li>
                    <li>
                      <img src="/image/sal.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>연어존맛탱</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b></b>
                      </span>
                      &nbsp;<span id="pro_price">18,000원</span>
                      <br />
                      <br />
                      <span id="pro_realprice"></span>
                    </li>
                    <li>
                      <img src="/image/ggo.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>꼬막은 꼬막해</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>10%</b>
                      </span>
                      &nbsp;<span id="pro_price">9,000원</span>
                      <br />
                      <br />
                      <span id="pro_realprice">10,000원</span>
                    </li>
                    <a href="#!">
                      <li id="md_pro_p">수산·해산·건어물 〉</li>
                    </a>
                  </ul>
                </div>

                <div>
                  <ul className="list1">
                    <li>
                      <img src="/image/chch.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>양념칙흰구의</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b></b>
                      </span>
                      &nbsp;<span id="pro_price">15,000원</span>
                      <br />
                      <br />
                      <span id="pro_realprice"></span>
                    </li>
                    <li>
                      <img src="/image/chineck.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>닭을꼬치</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>5%</b>
                      </span>
                      &nbsp;<span id="pro_price">8,900원</span>
                      <br />
                      <br />
                      <span id="pro_realprice">15,000원</span>
                    </li>
                    <li>
                      <img src="/image/koka4.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>한우는비싸</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>12%</b>
                      </span>
                      &nbsp;<span id="pro_price">89,000원</span>
                      <br />
                      <br />
                      <span id="pro_realprice">95,000원</span>
                    </li>
                    <li>
                      <img src="/image/ko.jpg" alt="상품1" />
                      <br />
                      <br />
                      <span id="pro_name">
                        <b>꼬치</b>
                      </span>
                      <br />
                      <br />
                      <span id="pro_sale">
                        <b>50%</b>
                      </span>
                      &nbsp;<span id="pro_price">10,000원</span>
                      <br />
                      <br />
                      <span id="pro_realprice">20,000원</span>
                    </li>
                    <a href="#!">
                      <li id="md_pro_p">정육·계란 〉</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div className="recipeWrap">
              <div className="recipeTitle">
                <a>컬리의 레시피</a>
              </div>
              <div className="recipes">
                <div className="recipe">
                  <a>
                    <div className="recipeDiv1">
                      <img src="/image/recipe1.png" alt="상품1" />
                    </div>
                    <div className="recipeName">치킨 야채 수프</div>
                  </a>
                </div>
                <div className="recipe">
                  <a>
                    <div className="recipeDiv1">
                      <img src="/image/recipe2.png" alt="상품1" />
                    </div>
                    <div className="recipeName">로스티드 닭다리&날개</div>
                  </a>
                </div>
                <div className="recipe">
                  <a>
                    <div className="recipeDiv1">
                      <img src="/image/recipe3.png" alt="상품1" />
                    </div>
                    <div className="recipeName">닭 껍질 튀김</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="banner1">
              <a href="#!">
                <img
                  src="/image/%EB%A7%88%EC%BC%93%EC%BB%AC%EB%A6%AC%20%ED%95%98%EB%8B%A8%20%EB%B0%B0%EB%84%88.jpg"
                  alt="상품1"
                />
              </a>
            </div>
            <footer>
              <hr className="hr2" />
              <img className="fi" src="/image/footer.png" alt="푸터 이미지" />
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
        </main>
      </div>
    </div>
  );
}

export default App;
