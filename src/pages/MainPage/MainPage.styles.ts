import styled from "styled-components";

export const MainViewWrapper = styled.section`
  display: flex;
  /* justify-content: center; */
  background-image: url("../../../public/assets/ptt3.jpg");
  /* background-position: cover; */
  background: url(../../../public/assets/ptt3.jpg) no-repeat center/cover;
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
  /* background-color: darkolivegreen; */
  background-color: #000;
  
  & > p {
    /* width: auto;
    height: 100px;
    position: absolute; */
    /* display: flex; */
    /* color: #fff;
    font-size: 92px;
    bottom: 0;
    top: 0;
    left: 20px;
    margin: auto 0 ; */

    & > span {
      /* color: aquamarine; */
    }
  }
`
export const TextContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  height: 300px;
  gap: 20px;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto auto;
  transition-delay: 30s;
  /* text-align: center; */
  
  p {
    /* color: #95ff00; */
    color: #00fff0;
    /* text-shadow: 0 0 20px #ffff31; */
    text-shadow: 0 0 15px #00fff0;
    font-family: sans-serif;
    font-size: 50px;
  }
  .box {
    height: 102%;
    padding: 4%;
    display: flex;
    flex-direction: column;
    /* background-color: #000000; */

  }

  .box {
    /* border-left: 2px solid #000; */
    /* animation: move2 3s forwards ease-in-out;
    width: 400px;
    margin-left: -410px;
    animation-delay: 1s; */
  }

  .box1 {
    background-color: #000000;
    height: 34%;
    animation: move1 1.2s forwards ease-in-out;
    /* border-left: 2px solid #fbff00; */
    width: 400px;
    margin-left: -410px;
    animation-delay: .5s;
  }
  .box2 {
    background-color: #000000;
    height: 30%;
    animation: move2 1.2s forwards ease-in-out;
    /* border-left: 2px solid #fbff00; */
    width: 400px;
    margin-left: -410px;
    animation-delay: 2.3s;
  }
  .box3 {
    background-color: #000000;
    height: 36%;
    animation: move3 1.2s forwards ease-in-out;
    /* border-left: 2px solid #fbff00; */
    width: 400px;
    margin-left: -410px;
    animation-delay: 4s;
  }
  @keyframes move1 {


    from {
      border-left: 2px solid #fbff00;
      margin-left: -410px;
      width: 400px;
    }
    to{
      border-left: 2px solid #fbff00;
      margin-left: -130px;
      width: 0;
    }
  }
  @keyframes move2 {
    from {
      border-left: 2px solid #fbff00;
      margin-left: -410px;
      width: 400px;
    }
    to{
      border-left: 2px solid #fbff00;
      margin-left: -230px;
      width: 0;
    }
  }
  @keyframes move3 {
    from {
      border-left: 2px solid #fbff00;
      margin-left: -410px;
      width: 400px;
    }
    to{
      border-left: 2px solid #fbff00;
      margin-left: -60px;
      width: 0;
    }
  }


`