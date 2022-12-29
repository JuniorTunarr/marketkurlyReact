import React from "react";

function RightBanner() {
  return (
    <div className="rightBannerWrap">
      <div className="rightBanner">
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
              <path d="M5 11L9 7L13 11" stroke="#ddd" stroke-width="1.3"></path>
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
              <path d="M13 7L9 11L5 7" stroke="#666" stroke-width="1.3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightBanner;
