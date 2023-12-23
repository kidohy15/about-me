import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: aliceblue;
  position: fixed;
  top: 0;
  z-index: 100;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
`

export const HeaderLogo = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
  background-color: antiquewhite;
  align-items: center;
`

export const HeaderNav = styled.div`
  display: flex;
  width: 40%;
  height: 100px;
  align-items: center;
  justify-content: center;


  ul {
    display: flex;
    justify-content: space-between;
    li {
      padding: 0 10px;
    }
  }
`