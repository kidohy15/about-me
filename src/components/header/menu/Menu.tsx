import React from 'react'
import { MenuContainer, MenuContents, MenuItem, MenuItems } from './Menu.styles'

const Menu = () => {
  return (
    <MenuContainer>
      <MenuContents>
        <MenuItems>
          <li>
            <h3>menu 1</h3>
            <MenuItem>
              <li>content 1</li>
              <li>content 1</li>
              <li>content 1</li>
            </MenuItem>
          </li>
          <li>
            <h3>menu 2</h3>
            <MenuItem>
              <li>content 1</li>
              <li>content 1</li>
              <li>content 1</li>
            </MenuItem>
          </li>
        </MenuItems>
      </MenuContents>
    </MenuContainer>
  )
}

export default Menu