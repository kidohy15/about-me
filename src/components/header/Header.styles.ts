import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width:100%;
  /* background-color: #f6f5f0;  */
  border-bottom: 1px solid #c8c8c8;
  position: fixed;
  top: 0;
  min-width: 1280px;
  background-color: rgba(17,17,17,0.75);
  box-shadow: 0 3px 7px 0 rgba(0,0,0,0.35);
  z-index: 999;
  /* padding-bottom: 80px; */
  `

export const HeaderInner = styled.div`
  min-width: 1280px;
  width:100%;
  height: 100px; 
  display: flex;
  justify-content: space-between;
  `

export const HeaderLogo = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
  background-color: antiquewhite;
  position: absolute; /*구조상의 부모요소를 기준으로 "배치" 부모 요소를 지정했는지 확인, 만약 부모 요소를 지정하지 않으면 기본 루트가 부모가 되어 버림*/
  top: 0;
  bottom: 0;
  margin: auto;
  align-items: center;
  `

export const HeaderNav = styled.div`
  height: 100px; 
  display: flex; 
  position: absolute;
  bottom: 0;
  top: 0;
  right: 50%;
  margin-right: calc((-450px));
  /* margin-left: 0.3rem; */
  /* left: 0; */
  /* margin: 0 auto; */
  /* right: 0; */
  padding: 0 30px;
  z-index: 1; /*요소의 쌓임 순서를 지정해서 다른 요소보다 위에 있을 수 있도록*/
  align-items: center;

  & > ul {
    display: flex;
    & > li {
      padding: 0 30px;
      font-size: 20px;
    }
    & a {
      color: #fff;
    }
    & a:hover {
      color: #fff;
      text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
    }
  }
`