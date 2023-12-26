import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  position: fixed; /*뷰포트 기준*/ 
  left:0;
`
export const MenuContents = styled.div`
  margin: 0 auto;
`    
export const MenuItems = styled.ul`
  padding: 20px 0;
  display: flex;
  & > li {
    width: 220px;
    h3 {
      padding: 3px 0 12px 0;
    }

  }
`
export const MenuItem = styled.ul`
  /* flex-direction: column; */
  padding: 20px 0;
  li {
    padding: 5px 0;
  }
`