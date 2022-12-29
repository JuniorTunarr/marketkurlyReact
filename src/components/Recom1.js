import React from "react";

function Recom1() {
  return (
    <div className="presentWrap">
      <div className="presentWrap1">
        <div className="presentWrap1Div1"></div>
        <div className="presentWrap1Div2">
          <strong className="presentWrap1Div2St">
            마음을 전하는 연말 선물 🎁
          </strong>
          <p className="presentWrap1Div2P">
            다가오는 연말엔 한 해동안 곁에 있어준 소중한 사람들에게 마음을
            전해보세요. 때로는 말보다 행동이 더 큰 감동을 준답니다. 어떤 선물을
            고를지 고민이라면, 컬리가 추천해드릴게요. 나누는 설렘과 함께 여느
            때보다 따뜻한 연말을 준비하세요! 🎄
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
                    <span id="pro_price" className="marginLeft3">
                      135,150원
                    </span>
                  </b>
                  <span id="pro_realprice" className="marginLeft3">
                    159,000원
                  </span>
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
                    <span id="pro_price" className="marginLeft3">
                      367,500원
                    </span>
                  </b>
                  <span id="pro_realprice" className="marginLeft3">
                    529,000원
                  </span>
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
                  <b>
                    <span id="pro_price" className="marginLeft3">
                      97,030원
                    </span>
                  </b>
                  <span id="pro_realprice" className="marginLeft3">
                    129,900원
                  </span>
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
                    <span id="pro_price" className="marginLeft3">
                      5,280원
                    </span>
                  </b>
                  <span id="pro_realprice" className="marginLeft3">
                    5,500원
                  </span>
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
  );
}

export default Recom1;
