import React, { useState, useEffect } from "react";
import styled from "styled-components";
const GoToTop = styled.div`
  position: fixed;
  z-index: 10;
  right: 31px;
  bottom: -46px;
  width: 58px;
  height: 58px;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.5s ease 0s, bottom 0.5s ease 0s;
  a {
    background-color: transparent;
    text-decoration: none;
  }
  span {
    display: block;
    width: 100%;
    height: 100%;
    background: url(data:image/png;base64,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)
      50% 50% / 58px 58px no-repeat;
  }
`;
const RightBannerWrap = styled.div`
  position: absolute;
  top: 316px;
  right: 30px;
  bottom: -236px;
  z-index: 1;
  margin-top: 236px;
  .rightBanner {
    position: sticky;
    top: 20%;
    transform: translateY(-50%);
    right: 0;
    width: 80px;
    height: 250px;
    font-size: 12px;
    line-height: 16px;
    color: rgb(51, 51, 51);
    letter-spacing: -0.3px;
  }
  .rightBanner .fixed {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 80px;
    height: 250px;
    font-size: 12px;
    line-height: 16px;
    color: rgb(51, 51, 51);
    letter-spacing: -0.3px;
  }
  .rightBanner1 {
    height: 50px;
    margin-bottom: 7px;
  }
  .rightBanner1 img {
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 50%;
    max-height: 50%;
  }
  .rightBanner2 {
    margin-top: 145px;
    width: 80px;
    border-width: 1px 1px 0px;
    border-top-style: solid;
    border-right-style: solid;
    border-left-style: solid;
    border-top-color: rgb(221, 221, 221);
    border-right-color: rgb(221, 221, 221);
    border-left-color: rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
  }

  .rightBanner2 div {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    height: 29px;
    padding-top: 5px;
    text-align: center;
    border-bottom: 1px solid rgb(221, 221, 221);
  }
  .rightBanner3 {
    margin-top: 8px;
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
    text-align: center;
    font-weight: 500;
  }
  .rightBanner3 button {
    overflow: visible;
    background-color: transparent;
    border: none;
  }
  .rightBanner3 div {
    height: 209px;
    overflow: hidden;
    margin-top: 6px;
  }
`;

function RightBanner() {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);
  function handleScroll() {
    if (ScrollY > 516) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });
  return (
    <>
      <GoToTop>
        <a>
          <span></span>
        </a>
      </GoToTop>
      <RightBannerWrap>
        <div className={`rightBanner ${ScrollActive ? "fixed" : ""}`}>
          <div className="rightBanner1">
            <a href="#!">
              <img src="/image/delivery.jpg" alt="배송"></img>
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
      </RightBannerWrap>
    </>
  );
}

export default RightBanner;
