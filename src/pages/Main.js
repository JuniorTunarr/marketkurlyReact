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
      <TopBar />
      <Top />
      <ManuBar />
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
        <footer>
          <hr className="hr2" />
          <img className="fi" src="/image/footer.png" alt="푸터 이미지" />
          <div className="divfp">
            <p className="fp">
              컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가
              판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
              <br />
              마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
              통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질,
              교환/환불 등 의무와 책임을 부담하지 않습니다.
              <br />© KURLY CORP. ALL RIGHTS RESERVED
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Main;
