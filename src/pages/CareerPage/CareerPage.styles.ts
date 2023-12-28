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
      background-color: #d2e3fc;
      border: 1px solid black;
      width: 500px;
      height: 50px;
      cursor: pointer;
      text-align: center;
    }
    .cs-category:hover,
    .cs-category:focus {
      background-color: aquamarine;
    }
  }
  
  & > section {
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #c8c8c8;

  }
`