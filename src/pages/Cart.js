import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrap = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding-bottom: 80px px;
`;
const Title = styled.h2`
  text-align: center;
  padding: 50px 0;
  font-size: 29px;
  font-weight: 700;
`;
const ContentWrap = styled.div`
  display: flex;
  flex: 1;
`;
const ContentWrap1 = styled.div`
  flex: 2.5;
  height: 942px;
  justify-content: space-between;
  align-items: center;
  padding: 18px 10px 16px 2px;
  font-size: 14px;
  line-height: 26px;
  font-weight: 500;
`;
const ContentWrap2 = styled.div`
  flex: 1;
  height: 942px;
  margin: 60px 0 0 15px;
`;
const StickyWrap = styled.div`
  width: 284px;
  padding-top: 60px;
  position: sticky;
  top: 60px;
  right: 0px;
`;
const Checklist = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 10px;
`;
const Checklist1 = styled.div`
  padding-top: 20px;
`;
const CheckButtonInput = styled.input`
  overflow: hidden;
  position: absolute;
  clip: rect(0px, 0px, 0px, 0px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
`;
const CheckButton = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0 12px;
  border: 0;
  vertical-align: top;
  overflow-clip-margin: content-box;
  overflow: clip;
  max-width: 100%;
`;
const ChooseButton = styled.button`
  vertical-align: top;
  cursor: default;
  overflow: visible;
  background-color: transparent;
  border: none;
  font-size: 15px;
  margin-top: 7px;
`;
const Label = styled.label`
  display: inline-flex;
  line-height: 26px;
  padding: 0;
  color: rgb(51, 51, 51);
  span {
    font-size: 15px;
  }
`;
const Span = styled.span`
  display: inline-block;
  width: 1px;
  height: 14px;
  background: rgb(221, 221, 221);
  margin: 7px 21px 0px 22px;
  vertical-align: top;
`;
const GoodsContainer = styled.div`
  border-bottom: 1px solid rgb(244, 244, 244);
  text-align: center;
`;
const Goods = styled.p`
  color: #b5b5b5;
  font-size: 16px;
  font-weight: 500;
  padding: 100px 0;
`;
const AddressDiv = styled.div`
  padding: 20px 20px 20px;
  border: 1px solid #f2f2f2;
  border-bottom: 0;
  h3 {
    padding-left: 30px;
    font-size: 17px;
    font-weight: 500;
    line-height: 20px;
    background: url(https://res.kurly.com/pc/service/cart/2007/ico_location.svg)
      0 50% no-repeat;
    background-size: 20px 20px;
  }
  div {
    padding-top: 12px;
    font-size: 17px;
    line-height: 24px;
    color: #333;
    font-weight: 500;
  }
  em {
    color: #5f0080;
    font-style: normal;
    font-size: 17px;
  }
  p {
    font-size: 17px;
  }
  span {
    font-size: 17px;
  }
  button {
    display: block;
    margin-top: 10px;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 36px;
    border-radius: 3px;
    color: #5f0080;
    background-color: #fff;
    border: 1px solid #5f0080;
  }
  button span {
    font-weight: 500;
    font-size: 13px;
    line-height: 26px;
    color: #5f0080;
  }
  button span img {
    vertical-align: top;
    margin-top: 3px;
  }
`;
const TotalDiv = styled.div`
  padding: 20px;
  border: 1px solid #f2f2f2;
  background-color: #fff;
`;
const PriceDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-top: 0;
`;
const PriceDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 18px;
  border-top: 1px solid #f4f4f4;
`;
const PriceProp1 = styled.span`
  width: 100px;
  font-size: 16px;
  line-height: 24px;
  margin: 7px 0;
`;
const PriceProp2 = styled.span`
  font-size: 18px;
  line-height: 24px;
  text-align: right;
  b {
    font-size: 20px;
  }
`;
const GoToPayDiv = styled.div`
  padding-top: 20px;
  button {
    display: block;
    padding: 0 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 56px;
    border-radius: 5px;
    background-color: #5f0080;
    border: 0 none;
    font-weight: 500;
  }
  button span {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
  ul {
    margin-top: 20px;
  }
  ul li {
    margin-top: 3px;
  }
`;
function Cart() {
  return (
    <Wrap>
      <Title>장바구니</Title>
      <ContentWrap>
        <ContentWrap1>
          <Checklist>
            <Label>
              <CheckButtonInput type="checkbox" checked disabled />
              <CheckButton
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNjIgLTEwOTApIHRyYW5zbGF0ZSgxMDAgOTM2KSB0cmFuc2xhdGUoMTA0NiAxNDIpIHRyYW5zbGF0ZSgxNiAxMikiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41IiBmaWxsPSIjRjJGMkYyIiBzdHJva2U9IiNFMkUyRTIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjREREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNyAxMi42NjdMMTAuMzg1IDE2IDE4IDguNSIvPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                alt=""
              />
              <span> 전체선택(0/0)</span>
            </Label>
            <Span></Span>
            <ChooseButton>선택삭제</ChooseButton>
          </Checklist>
          <GoodsContainer>
            <Goods>장바구니에 담긴 상품이 없습니다</Goods>
          </GoodsContainer>
          <Checklist1>
            <Label>
              <CheckButton
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNjIgLTEwOTApIHRyYW5zbGF0ZSgxMDAgOTM2KSB0cmFuc2xhdGUoMTA0NiAxNDIpIHRyYW5zbGF0ZSgxNiAxMikiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41IiBmaWxsPSIjRjJGMkYyIiBzdHJva2U9IiNFMkUyRTIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjREREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNyAxMi42NjdMMTAuMzg1IDE2IDE4IDguNSIvPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                alt=""
              />
              <span> 전체선택(0/0)</span>
            </Label>
            <Span></Span>
            <ChooseButton>선택삭제</ChooseButton>
          </Checklist1>
        </ContentWrap1>
        <ContentWrap2>
          <StickyWrap>
            <AddressDiv>
              <h3>배송지</h3>
              <div>
                <p>
                  <em>배송지를 등록</em>하고
                  <br />
                  <span>구매 가능한 상품을 확인하세요!</span>
                </p>
                <button>
                  <span>
                    <img src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg" />
                    주소 검색
                  </span>
                </button>
              </div>
            </AddressDiv>
            <TotalDiv>
              <PriceDiv1>
                <PriceProp1>상품금액</PriceProp1>
                <PriceProp2>0 원</PriceProp2>
              </PriceDiv1>
              <PriceDiv1>
                <PriceProp1>상품할인금액</PriceProp1>
                <PriceProp2>0 원</PriceProp2>
              </PriceDiv1>
              <PriceDiv1>
                <PriceProp1>배송비</PriceProp1>
                <PriceProp2>0 원</PriceProp2>
              </PriceDiv1>
              <PriceDiv2>
                <PriceProp1>결제예정금액</PriceProp1>
                <PriceProp2>
                  <b>0</b> 원
                </PriceProp2>
              </PriceDiv2>
            </TotalDiv>
            <GoToPayDiv>
              <button disabled>
                <span>상품을 담아주세요</span>
              </button>
              <ul>
                <li>[주문완료] 상태일 경우에만 주문 취소 가능합니다.</li>
                <li>
                  [마이컬리 > 주문내역 상세페이지] 에서 직접 취소하실 수
                  있습니다.
                </li>
              </ul>
            </GoToPayDiv>
          </StickyWrap>
        </ContentWrap2>
      </ContentWrap>
    </Wrap>
  );
}

export default Cart;
