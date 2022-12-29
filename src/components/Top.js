import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
const TopWrap = styled.div`
  width: 1050px;
  display: flex;
  position: relative;
  height: 70px;
  padding: 0px 0 0 15px !important;
  margin: 0 auto;
  top: 40px;
  align-items: center;
`;
function Top() {
  // const [isHovering, setIsHovering] = useState(0);
  return (
    <TopWrap className="topTab">
      <div className="topTabs">
        <div className="topTab0">
          <div>
            <Link to="/">
              <a href="#!">
                <img src="/image/kurly.png" alt="마켓컬리 로고" />
              </a>
            </Link>
          </div>
          <div className="displayFlex">
            <Link to="/">
              <a href="#!">
                <li className="topText topTab1">
                  마켓컬리&emsp;<span className="headerColorX">|</span>
                </li>
              </a>
            </Link>
            <a href="#!">
              <li className="font18 topTab1">뷰티컬리</li>
            </a>
          </div>
        </div>

        <div className="searchWrap">
          <input className="search" type="text" value="검색어를 입력해주세요" />
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
    </TopWrap>
  );
}

export default Top;
