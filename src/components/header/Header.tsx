import React from 'react'
import { HeaderInner, HeaderLogo, HeaderNav, HeaderWrapper } from './Header.styles'
import { Link } from 'react-router-dom'
// import Menu from './menu/Menu'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <HeaderLogo>
          <Link to={"/"}>
            <h3>DH.KIM</h3>
          </Link>
        </HeaderLogo>
        <HeaderNav>
          <ul>
            <li>
              <Link to="/about">About me</Link>
              {/* <div>About me</div> */}
              {/* <Menu /> */}
            </li>
            <li>
              <Link to="/career">Career & Skills</Link>
              {/* <div>Career & Skills</div> */}
              {/* <Menu /> */}
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
              {/* <div>portfolio</div> */}
              {/* <Menu /> */}
            </li>
            <li>
              <Link to="/plan">Plan</Link>
              {/* <div>Plan</div> */}
              {/* <Menu /> */}
            </li>
            <li>
              <Link to="/contact">Contact me</Link>
              {/* <div>Contact me</div> */}
              {/* <Menu /> */}
            </li>
          </ul>
        </HeaderNav>
      </HeaderInner>
    </HeaderWrapper>
  )
}

export default Header