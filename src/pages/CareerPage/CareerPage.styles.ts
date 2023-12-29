import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 120px;
  justify-content: center;

  & .cs-category-group {
    justify-content: center;
    display: flex;
    
    .cs-category {
      text-align: center;
      background-color: #d2e3fc;
      background-color: rgba(110, 100, 99, 0.7);
      border: 1px solid black;
      width: 500px;
      height: 50px;
      cursor: pointer;
      text-align: center;
      font-size: 32px;
      color: #fff;
    }
    .cs-category:hover,
    .cs-category:focus {
      background-color: aquamarine;
      background-color: rgba(110, 100, 99, 1);
    }
  }
  
  & > section {
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #c8c8c8;

  }
`