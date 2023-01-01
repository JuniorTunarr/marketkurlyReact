import "../main.css";
import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import Top from "../components/Top";
import Banner from "../components/Banner";
import RightBanner from "../components/RightBanner";
import ProductList1 from "../components/ProductList1";
import TimeDeal from "../components/TimeDeal";
import MdRecom from "../components/MdRecom";
import Recom1 from "../components/Recom1";
import ManuBar from "../components/ManuBar";
function Main() {
  return (
    <div className="container">
      <div className="container">
        {/* <!--메인페이지--> */}
        <main>
          {/* <!--페이지 메인배너--> */}
          <Banner />
          {/* <!-- 페이지 우측배너--> */}
          <RightBanner />
          {/* <!-- 상품 리스트 --> */}
          <ProductList1 />
          <div className="banner1">
            <img src="/image/sale1.jpeg" alt="상품1" />
          </div>
          {/* <!-- 선착순 --!> */}
          <TimeDeal />
          {/* <!-- 추천1 --!> */}
          <Recom1 />
          {/* <!-- MD추천 --!> */}
          <MdRecom />
        </main>
      </div>
    </div>
  );
}

export default Main;
