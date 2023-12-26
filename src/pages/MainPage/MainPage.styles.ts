import styled from "styled-components";

export const MainViewWrapper = styled.section`
display: grid;
  /* justify-content: center; */
  background-image: url("../../../public/assets/ptt3.jpg");
  background-position: cover;
  `

export const MainViewInner = styled.div`
justify-content: center;
  width: 1100px;
  height: 500px;
  position: relative; 
  margin: 0 auto;
  background-color: aliceblue;
  
  & > div {
    width: 50px;
    height: 100px;
    position: absolute;
    display: flex;
    color: white;
    bottom: 0;
    top: 0;
    left: 20px;
    margin: auto 0 ;
  }
`