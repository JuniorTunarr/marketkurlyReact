import React from "react";
import styled from "styled-components";
import { TfiClose } from "react-icons/tfi";
const TopBarWrap = styled.div`
  position: relative;
  text-align: center;
  min-width: 1050px;
  background: rgb(95, 0, 128);
`;
const TopBarProp = styled.div`
  height: 42px;
  width: 1050px;
  line-height: 42px;
  justify-content: center;
  margin: auto;
  color: #fff;
  text-align: center;
  font-size: 14.5px;
  font-weight: 700;
`;
function TopBar() {
  const logo = {};
  return (
    <TopBarWrap>
      <TopBarProp>
        지금 가입하고 인기상품 <b className="won100Size">100원</b>에 받아가세요!
        <TfiClose
          size="18"
          style={{
            position: "absolute",
            top: 11,
            right: "7%",
          }}
        />
      </TopBarProp>
    </TopBarWrap>
  );
}

export default TopBar;
