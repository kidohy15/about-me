import React from 'react'
import { HeaderLogo, HeaderNav, HeaderWrapper } from './Header.styles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderLogo>
          <Link to={"/"}>
            <h3>DH.KIM</h3>
          </Link>
        </HeaderLogo>
        <HeaderNav>
          <ul>
            <li>About me</li>
            <li>Career & Skills</li>
            <li>portfolio</li>
            <li>Plan</li>
            <li>Contact me</li>
          </ul>
        </HeaderNav>
      </HeaderWrapper>
    </div>
  )
}

export default Header