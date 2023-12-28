import styled from "styled-components";

export const MainViewWrapper = styled.section`
  display: flex;
  /* justify-content: center; */
  background-image: url("../../../public/assets/ptt3.jpg");
  background-position: cover;
  width: 100%;
  height: 100vh;
  `

export const MainViewInner = styled.div`
  justify-content: center;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  position: relative; 
  margin: 0 auto;
  background-color: darkolivegreen;
  
  & > p {
    width: auto;
    height: 100px;
    position: absolute;
    /* display: flex; */
    color: #fff;
    font-size: 92px;
    bottom: 0;
    top: 0;
    left: 20px;
    margin: auto 0 ;
    & > span {
      color: aquamarine;
    }
  }
`