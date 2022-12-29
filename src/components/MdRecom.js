import React from "react";

function MdRecom() {
  return (
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
    </div>
  );
}

export default MdRecom;
