import React from "react";
import styled from "styled-components";
import MainLayout from "../components/MainLayout";
import RightBanner from "../components/RightBanner";
const GoodsWrap = styled.div`
  position: relative;
  width: 1050px;
  margin: 0px auto;
  padding-top: 40px;
  main {
    display: flex;
    justify-content: space-between;
  }
  main section {
    width: 560px;
    padding-left: 10px;
  }
  nav {
    z-index: 10;
    position: sticky;
    top: 56px;
    width: 1010px;
    box-shadow: rgb(221 221 221) 0px -0.5px 0px 0px inset;
    background-color: rgb(255, 255, 255);
    margin-top: 50px;
  }
`;
const GoodsImage = styled.div`
  width: 430px;
  height: 552px;
`;
const Section1 = styled.div`
  font-weight: 600;
  line-height: 1.36;
  letter-spacing: -0.5px;
  color: rgb(153, 153, 153);
  margin-bottom: 6px;
  width: 500px;
  font-size: 14px;
`;
const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex: 1 1 0%;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h1 {
    width: 500px;
    font-weight: 600;
    font-size: 24px;
    color: rgb(51, 51, 51);
    line-height: 34px;
    letter-spacing: -0.5px;
    word-break: keep-all;
    margin-right: 20px;
  }
  button {
    width: 55px;
    height: 40px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNEREQiIGN4PSIyMCIgY3k9IjIwIiByPSIxOS41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNSAxMSkiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjgiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iOSIgcj0iMi4xIi8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMTM3KSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI4Ljg2MyIgY3k9IjMiIHI9IjIuMSIvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTAgOC4xMzYgNi4zNjMgNC41Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNS4xMzcgMTgpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjguODYzIiBjeT0iMyIgcj0iMi4xIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNMCA4LjEzNiA2LjM2MyA0LjUiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==)
      50% 50% no-repeat;
    border: none;
  }
  h2 {
    padding-top: 5px;
    font-size: 14px;
    font-weight: 400;
    color: rgb(181, 181, 181);
    line-height: 19px;
    letter-spacing: -0.5px;
    display: block;
  }
`;
const Section3 = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-top: 19px;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: -0.5px;
  .Span1 {
    padding-right: 4px;
    font-size: 28px;
    color: rgb(51, 51, 51);
  }
  .Span2 {
    display: inline-block;
    position: relative;
    top: 3px;
    font-size: 18px;
    color: rgb(51, 51, 51);
    vertical-align: top;
  }
`;
const Section4 = styled.div`
  font-size: 14px;
  color: rgb(95, 0, 128);
  line-height: 19px;
  height: 19px;
  letter-spacing: -0.5px;
  margin-top: 14px;
`;
const Section5 = styled.div`
  margin-top: 20px;
  dl {
    display: flex;
    flex: 1 1 0%;
    flex-direction: row;
    align-items: flex-start;
    overflow: hidden;
    width: 100%;
    padding: 17px 0px 18px;
    border-top: 1px solid rgb(244, 244, 244);

    letter-spacing: -0.5px;
  }
  dt {
    color: rgb(102, 102, 102);
    font-weight: 400;
    width: 128px;
    height: 100%;
    line-height: 19px;
    font-size: 14px;
    dd {
      display: flex;
      flex: 1 1 0%;
      flex-direction: column;
      font-size: 14px;
    }
    dd p {
      color: rgb(51, 51, 51);
      line-height: 19px;
      white-space: pre-line;
      word-break: break-all;
      overflow: hidden;
      font-weight: 400;
    }
  }
`;
const SmallP = styled.p`
  display: block;
  font-size: 12px;
  color: rgb(102, 102, 102);
  padding-top: 4px;
  line-height: 16px;
  white-space: pre-line;
`;
const Section6 = styled.div`
  padding-bottom: 40px;
`;
const Section6Wrap1 = styled.div`
  border-bottom: 1px solid rgb(244, 244, 244);
  dl {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    overflow: hidden;
    width: 100%;
    padding: 17px 0px 18px;
    border-top: 1px solid rgb(244, 244, 244);
    font-size: 14px;
    letter-spacing: -0.5px;
  }
  dt {
    width: 128px;
    height: 100%;
    color: rgb(102, 102, 102);
    line-height: 19px;
    font-weight: 400;
    font-size: 14px;
  }
  dd {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
  }
`;
const Section6Wrap1Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 11px 15px;
  font-size: 12px;
  border: 1px solid rgb(244, 244, 244);
  width: 405px;
`;
const Section6Wrap1Small1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  span {
    line-height: 16px;
    width: 320px;
    color: rgb(51, 51, 51);
  }
`;
const Section6Wrap1Small2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
`;
const Section6Wrap1Small2Tiny1 = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgb(221, 223, 225);
  width: 80px;
  border-radius: 3px;
  div {
    display: inline-flex;
    overflow: hidden;
    white-space: nowrap;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    color: rgb(51, 51, 51);
    text-align: center;
    width: 31px;
    height: 28px;
    line-height: 28px;
  }
`;
const Section6Wrap1Small2Tiny2 = styled.div`
  span {
    font-weight: bold;
    font-size: 12px;
    color: rgb(51, 51, 51);
    padding-right: 5px;
  }
`;
const Section6Wrap2 = styled.div`
  padding-top: 30px;
`;
const Section6Wrap2Prop = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;

const Section6Wrap2Span1 = styled.span`
  padding-right: 12px;
  font-size: 13px;
  font-weight: 500;
  color: rgb(51, 51, 51);
  line-height: 20px;
`;
const Section6Wrap2Span2 = styled.span`
  display: inline-block;
  margin-top: -15px;
  font-weight: bold;
  font-size: 32px;
  color: rgb(51, 51, 51);
  line-height: 36spapx;
`;
const Section6Wrap2Span3 = styled.span`
  padding-left: 5px;
  margin-top: -8px;
  font-size: 20px;
  font-weight: 600;
  color: rgb(51, 51, 51);
  line-height: 30px;
`;
const Section6Wrap2Span4 = styled.span`
  background-color: rgb(255, 191, 0);
  margin: 1px 6px 0px 0px;
  padding: 0px 7px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  line-height: 20px;
`;
const Section6Wrap2Span5 = styled.span`
  line-height: 1.45;
  font-size: 14px;
  color: rgb(102, 102, 102);
`;
const Section6Wrap3 = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`;
const HeartButton = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 56px;
  height: 56px;
  border-radius: 3px;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  span {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
  }
`;
const AlertButton = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 56px;
  height: 56px;
  border-radius: 3px;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  :disabled {
    border-color: rgb(221, 221, 221);
    color: rgb(221, 221, 221);
  }
  span {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
  }
`;
const PutInButton = styled.div`
  flex-grow: 1;
  button {
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 56px;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(95, 0, 128);
    border: 0px none;
  }
  button span {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    color: white;
  }
`;
const MinusButton = styled.button`
  display: inline-flex;
  width: 28px;
  height: 28px;
  border: none;
  font-size: 1px;
  color: transparent;
  background-size: cover;
  background-color: transparent;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=);
  vertical-align: top;
`;
const PlusButton = styled.button`
  display: inline-flex;
  width: 28px;
  height: 28px;
  border: none;
  font-size: 1px;
  color: transparent;
  background-size: cover;
  background-color: transparent;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
  vertical-align: top;
`;
function Goods() {
  return (
    <>
      <RightBanner style={{ top: "10%", right: "20px" }} />
      <GoodsWrap>
        <main>
          <GoodsImage
            style={{
              background:
                "url(https://img-cf.kurly.com/shop/data/goods/1658211569126l0.jpg) 0% 0% / cover, url(https://res.kurly.com/_next/static/images/noimg-150x195-2c819ff….svg) 50% 50% / contain no-repeat rgb(245, 245, 245)",
            }}
          />
          <section>
            <Section1>샛별배송</Section1>
            <Section2>
              <div>
                <h1>[삼진어묵] 특낙엽(2개입)</h1>
                <button></button>
              </div>
              <h2>쫄깃함이 살아 있는 시그니처 상품</h2>
            </Section2>
            <Section3>
              <span className="Span1">7,900</span>
              <span className="Span2">원</span>
            </Section3>
            <Section4>로그인 후, 적립 혜택이 제공됩니다.</Section4>
            <Section5>
              <dl>
                <dt>배송</dt>
                <dd>
                  <p>샛별배송</p>
                  <SmallP>
                    23시 전 주문 시 내일 아침 7시 전 도착 <br />
                    (대구·부산·울산 샛별배송 운영시간 별도 확인)
                  </SmallP>
                </dd>
              </dl>
              <dl>
                <dt>판매자</dt>
                <dd>컬리</dd>
              </dl>
              <dl>
                <dt>포장타입</dt>
                <dd>
                  <p>냉장(종이포장)</p>
                  <SmallP>
                    택배배송은 에코 포장이 스트리폼으로 대체됩니다.
                  </SmallP>
                </dd>
              </dl>
              <dl>
                <dt>판매단위</dt>
                <dd>1세트</dd>
              </dl>
              <dl>
                <dt>중량/용량</dt>
                <dd>280g*2개입</dd>
              </dl>
              <dl>
                <dt style={{ fontWeight: 700, color: "rgb(51, 51, 51)" }}>
                  원산지
                </dt>
                <dd style={{ fontWeight: 700, color: "rgb(51, 51, 51)" }}>
                  상세페이지 별도표기
                </dd>
              </dl>
              <dl>
                <dt>알레르기정보</dt>
                <dd>
                  <p style={{ paddingLeft: "50px" }}>
                    -밀, 게, 대두 함유 <br /> -이 제품은 메밀, 돼지고기, 새우,
                    우유, 오징어, 계란, 쇠고기, 닭고기, 조개류(굴, 전복, 홍합
                    포함), 토마토를 사용한 제품과 같은 제조시설에서 제조하고
                    있습니다.
                  </p>
                </dd>
              </dl>
              <dl>
                <dt>유통기한(또는 소비기한)정보</dt>
                <dd>수령일 포함 4일 이상 남은 상품을 보내드립니다.</dd>
              </dl>
            </Section5>
            <Section6>
              <Section6Wrap1>
                <dl>
                  <dt>상품선택</dt>
                  <dd>
                    <Section6Wrap1Middle>
                      <Section6Wrap1Small1>
                        <span>[삼진어묵] 특낙엽(2개입)</span>
                      </Section6Wrap1Small1>
                      <Section6Wrap1Small2>
                        <Section6Wrap1Small2Tiny1>
                          <MinusButton type="button" />
                          <div>1</div>
                          <PlusButton type="button" />
                        </Section6Wrap1Small2Tiny1>
                        <Section6Wrap1Small2Tiny2>
                          <span>7,900원</span>
                        </Section6Wrap1Small2Tiny2>
                      </Section6Wrap1Small2>
                    </Section6Wrap1Middle>
                  </dd>
                </dl>
              </Section6Wrap1>
              <Section6Wrap2>
                <div>
                  <Section6Wrap2Prop>
                    <Section6Wrap2Span1>총 상품금액 :</Section6Wrap2Span1>
                    <Section6Wrap2Span2>7,900</Section6Wrap2Span2>
                    <Section6Wrap2Span3>원</Section6Wrap2Span3>
                  </Section6Wrap2Prop>
                  <Section6Wrap2Prop>
                    <Section6Wrap2Span4>적립</Section6Wrap2Span4>
                    <Section6Wrap2Span5>
                      로그인 후, 적립 혜택 제공
                    </Section6Wrap2Span5>
                  </Section6Wrap2Prop>
                </div>
              </Section6Wrap2>
              <Section6Wrap3>
                <HeartButton>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K"
                    alt=""
                  />
                </HeartButton>
                <AlertButton disabled>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    alt=""
                  />
                </AlertButton>
                <PutInButton>
                  <button>
                    <span>장바구니 담기</span>
                  </button>
                </PutInButton>
              </Section6Wrap3>
            </Section6>
          </section>
        </main>
        <nav></nav>
        <div></div>
      </GoodsWrap>
    </>
  );
}

export default Goods;
