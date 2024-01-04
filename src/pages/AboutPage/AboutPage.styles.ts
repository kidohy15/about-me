import styled from "styled-components";

export const AboutWrapper = styled.div`
  flex-direction: column;
  position: relative;
  /* margin-top: 120px; */
  justify-content: center;

  & > section {
    width: 100vw;
    height: 100vh;
    /* margin: 20px 0; */
    /* display: flex; */
    border-bottom: 1px solid #c8c8c8;
    display: flex;
    justify-content: center;

    & > .inner {
      padding: 120px 7% 120px;
      width: 90vw;
      height: 100vh;
      position: absolute;
      margin: 0 auto;

      & > .contents {
        margin: 40px 40px 10px 40px;
        height: 90%;
        /* margin-top: 20px; */
        padding: 20px 20px 0px 20px;
        background-color: #fff;
        opacity: 0.95;
      }
    }
  }
`;

export const InfoContainer = styled.section`
  background: black;
  height: 100%;

  & .inner {
    height: 100%;
    position: relative;
    padding-left: 150px;
    padding-bottom: 120px;
  }
  
  & .inner .infoContents {
    /* padding-top: 120px; */
    height: 70%;
    width: 80%;
    margin: auto auto;
    position: absolute;
    top: 100px;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    & .infoContents--item {
      align-items: center;
      height: 20%;
      background: #fff;
      margin: 10px 10px 10px;
      border-bottom: 1px solid black;

    }
  }
`;
