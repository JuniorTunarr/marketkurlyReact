import React from "react";
import styled from "styled-components";

const TopWrap = styled.div`
  *,
  :after,
  :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
function Top() {
  return (
    <TopWrap>
      <nav className="topnav">
        <ul>
          <a href="#!">
            <li className="headerColor">
              회원가입&emsp;<span className="headerColorX">|&emsp;</span>
            </li>
          </a>
          <a href="#!">
            <li>
              로그인&emsp;<span className="headerColorX">|&emsp;</span>
            </li>
          </a>
          <a href="#!">
            <li>고객센터 ▼&emsp;</li>
          </a>
        </ul>
      </nav>
      <div className="topTab">
        <div className="topTabs">
          <div className="topTab0">
            <a href="#!">
              <img src="/image/kurly.png" alt="마켓컬리 로고" />
            </a>
            <a href="#!">
              <li className="topText topTab1">
                마켓컬리&emsp;<span className="headerColorX">|&emsp;</span>
              </li>
            </a>
            <a href="#!">
              <li className="font18 topTab1">뷰티컬리</li>
            </a>
          </div>

          <div className="searchWrap">
            <input
              className="search"
              type="text"
              value="검색어를 입력해주세요"
            />
            <button className="search_button" type="submmit"></button>
          </div>
          <div>
            <ul className="logos1">
              <li className="logos">
                <a href="#!">
                  <img src="/image/ico_delivery_setting.png" alt="위치" />
                </a>
              </li>
              <li className="logos">
                <a href="#!">
                  <img src="/image/btn-heart-off.png" alt="위시리스트" />
                </a>
              </li>
              <li className="logos">
                <a href="#!">
                  <img src="/image/ico_cart.png" alt="카트" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="manuBar">
        <div className="manuBar1">
          <ul className="main1">
            <li>
              <a href="#!">
                <b className="font16 marginLeft15">
                  <img src="/image/ico_gnb_all_off.png" alt="카테고리 아이콘" />
                  &ensp;&ensp;카테고리
                </b>
              </a>
              <ul className="main2">
                <li>
                  <a href="#!">
                    &ensp;&ensp;2022 컬리스마스
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;크리스마스 에디션</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;트리&데코</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;인테리어</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;테이블웨어</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;파티요리</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;스테이크</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;베이커리/디저트/간식</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;치즈샤퀴테리</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;아동완구</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;오락취미</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;뷰티</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;음료/주류</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;선물세트</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;채소
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;친환경</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;고구마·감자·당근</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;시금치·쌈채소·나물</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;브로콜리·파프리카·양배추</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;양파·대파·마늘·배추</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;오이·호박·고추</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;냉동·이색·간편채소</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;콩나물·버섯</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;과일·견과·쌀
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;친환경</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;제철과일</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;국산과일</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;수입과일</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;간편과일</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;냉동·건과일</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;견과류</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;쌀·잡곡</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;수산·해산·건어물
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;제철수산</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;생선류</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;굴비·반건류</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;오징어·낙지·문어</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;새우·게·랍스터</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;해산물·조개류</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;수산가공품</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;김·미역·해조류</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;건어물·다시팩</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;정육·계란
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;국내산 소고기</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;수입산 소고기</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;돼지고기</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;계란류</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;닭·오리고기</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;양념육·돈까스</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;양고기</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;국·반찬·메인요리
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;국·탕·찌개</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;밀키트·메인요리</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;밑반찬</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;김치·젓갈·장류</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;두부·어묵·부침개</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;베이컨·햄·통조림</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;샐러드·간편식
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;샐러드·닭가슴살</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;도시락·밥류</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;파스타·면류</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;떡볶이·튀김·순대</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;피자·핫도그·만두</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;폭립·떡갈비·안주</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;죽·스프·카레</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;선식·시리얼</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;면·양념·오일
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;파스타·면류</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;식초·소스·드레싱</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;양념·액젓·장류</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;식용유·참기름·오일</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;소금·설탕·향신료</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;밀가루·가루·믹스</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;생수·음료·우유·커피
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;생수·탄산수</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;음료·주스</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;우유·두유·요거트</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;커피</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;차</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;간식·과자·떡
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;과자·스낵·쿠키</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;초콜릿·젤리·캔디</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;떡·한과</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;아이스크림</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;베이커리·치즈·델리
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;식빵·빵류</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;잼·버터·스프레드</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;케이크·파이·디저트</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;치즈</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;델리</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;올리브·피클</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;건강식품
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;영양제</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;유산균</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;홍삼·인삼·꿀</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;건강즙·건강음료</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;건강분말·건강환</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;다이어트·이너뷰티</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;유아동</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;와인
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;레드와인</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;화이트와인</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;샴페인·스파클링</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;전통주
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;막걸리·약주</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;증류주·과실주</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;과실주·리큐르</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;전통주 선물세트</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;생활용품·리빙·캠핑
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;휴지·티슈</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;여성·위생용품</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;세제·청소용품</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;화훼·인테리어소품</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;의약외품·마스크</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;생활잡화·문구</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;캠핑용품</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;스킨케어·메이크업
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;스킨·미스트·패드</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;에센스·앰플·로션</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;크림·오일</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;클렌징</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;마스크팩</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;선케어</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;메이크업</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;맨즈케어</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;뷰티소품·기기</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;헤어·바디·구강
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;구강·면도</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;샴푸·컨디셔너</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;트리트먼트·팩</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;헤어에센스·염모</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;바디워시·스크럽</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;바디로션·크림</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;핸드·립·데오</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;향수·디퓨저</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;헤어·바디소품</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;주방용품
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;주방소모품·잡화</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;주방·조리도구</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;냄비·팬·솥</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;보관용기·텀블러</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;식기·테이블웨어</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;컵·잔·커피도구</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;가전제품
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;주방가전</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;생활가전</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;계절가전</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;디지털·PC</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;대형·설치가전</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;반려동물
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;강아지 간식</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;강아지 주식</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;고양이 간식</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;고양이 주식</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;건강 관리</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;배변·위생</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;장난감</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;미용·외출·하우스</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;여행·티켓
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;국내 여행</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;해외 여행</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;전시회·입장권</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;베이비·키즈·완구
                    <ul className="main3">
                      <li>
                        <a href="#!">&ensp;&ensp;분유·간편 이유식</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;이유식 재료</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;간식·음식</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;건강식품</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;이유·수유용품</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;기저귀·물티슈</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;세제·위생용품</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;스킨·구강케어</a>
                      </li>
                      <li>
                        <a href="#!">&ensp;&ensp;완구·잡화류</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    &ensp;&ensp;컬리의 추천
                    <ul></ul>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">
                <b className="font16">신상품</b>
              </a>
            </li>
            <li>
              <a href="#!">
                <b className="font16">베스트</b>
              </a>
            </li>
            <li>
              <a href="#!">
                <b className="font16">알뜰쇼핑</b>
              </a>
            </li>
            <li>
              <a href="#!">
                <b className="font16">특가/혜택</b>
              </a>
            </li>
            <div>
              <div className="deliver">
                <a href="#!" className="deliver1">
                  <b style={{ color: "gray" }}>
                    <span className="headerColor">&nbsp;샛별·낮</span> 배송안내
                  </b>
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </TopWrap>
  );
}

export default Top;
