import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
const TopWrap = styled.div`
  width: 1050px;
  display: flex;
  position: relative;
  height: 70px;
  padding: 0px 0 30px 15px !important;
  margin: 0 auto;
  top: 40px;
  align-items: center;
  .logos1 {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0px;
    top: 5px;
  }

  .logos img {
    width: 35px;
    margin: 10px;
  }
  .topTab img {
    width: 100px;
    top: -10px;
    position: relative;
  }
  .topTabs {
    display: flex;
    align-items: center;
    height: 63px;
  }
  .topTab0 {
    display: flex;
  }
  .topTab0 li {
    margin: 5px 0 0 10px;
  }
  .topTab1 {
    position: relative;
    font-size: 18px;
    font-weight: 500;
  }
  .topText {
    color: #5f0080;
  }
  .marginLeft15 {
    margin-left: 15px;
  }

  .search {
    color: #5e5e5e;
    width: 300px;
    position: relative;
    background-color: inherit;
    border: none;
    outline: none;
    font-size: 16px;
    left: -5px;
    letter-spacing: -0.33px;
  }
  .searchWrap {
    display: flex;
    align-items: center;

    justify-content: space-between;
    position: absolute;
    left: 325px;
    top: 0px;
    width: 400px;
    height: 48px;
    padding-left: 14px;
    border: 0.5px solid rgb(95, 0, 128);
    border-radius: 6px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(247 247 247) 0px 0px 0;
  }

  .search_button {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzNnYzNkgweiIvPgogICAgICAgIDxnIHN0cm9rZT0iIzVGMDA4MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Im0yNi4wODEgMjYuMDgxLTQuMTItNC4xMk0xNi40NjcgMjMuMzM0YTYuODY3IDYuODY3IDAgMSAwIDAtMTMuNzM0IDYuODY3IDYuODY3IDAgMCAwIDAgMTMuNzM0eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==");
    position: relative;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0px;
    top: -5px;
    width: 32px;
    height: 32px;
    margin: 10px;
    bottom: 3px;
    border: none;
    background-color: transparent;
    color: #5f0080;
  }
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
              <Link to="/cart">
                <a href="#!">
                  <img src="/image/ico_cart.png" alt="카트" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </TopWrap>
  );
}

export default Top;
