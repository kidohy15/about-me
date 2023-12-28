import React from 'react'
import { MenuContainer, MenuContents, MenuItem, MenuItems } from './Menu.styles'

const Menu = () => {
  return (
    <MenuContainer>
      <MenuContents>
        <MenuItems>
          <li>
            <MenuItem>
              <li>history</li>
              <li>content 1</li>
              <li>content 1</li>
            </MenuItem>
          </li>
          <li>
            <MenuItem>
              <li>Career</li>
              <li>skills</li>
            </MenuItem>
          </li>
          <li>
            <MenuItem>
              <li>Career</li>
              <li>skills</li>
            </MenuItem>
          </li>
        </MenuItems>
      </MenuContents>
    </MenuContainer>
  )
}

export default Menu