import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const HeaderContainer = styled.div({
  display: 'flex',
  maxWidth: 960,
  margin: '20px auto',
})

const HeaderSpace = styled.div({ flex: 1 })

const HeaderTitle = styled.div({
  color: '#212121',
  fontSize: 18,
  fontFamily: "'Montserrat', sans-serif",
  textTransform: 'uppercase',
  fontWeight: 700,
  letterSpacing: 2.5,
  padding: 13,
})

const HeaderMenu = styled(Link)(({ isActive }) => ({
  textDecoration: 'none',
  color: isActive ? '#212121' : '#757575',
  fontSize: 15,
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 700,
  letterSpacing: 2.5,
  display: 'flex',
  alignItems: 'center',
  padding: '0 15px',
  ':hover': {
    color: '#212121',
    ':after': !isActive && { width: 15 },
  },
  ':after': {
    content: "''",
    position: 'absolute',
    backgroundColor: '#212121',
    width: isActive ? 15 : 0,
    borderRadius: 3,
    height: 3,
    bottom: 3,
    transition: 'width 0.2s',
  },
  position: 'relative',
}))

export default function Header({ selectedMenu }) {
  return (
    <HeaderContainer>
      <HeaderTitle>rahman fadhil</HeaderTitle>
      <HeaderSpace />
      <HeaderMenu to="/" isActive={selectedMenu === 'home'}>
        Home
      </HeaderMenu>
      <HeaderMenu to="/projects" isActive={selectedMenu === 'work'}>
        Work
      </HeaderMenu>
      <HeaderMenu to="/blog" isActive={selectedMenu === 'blog'}>
        Blog
      </HeaderMenu>
      <HeaderMenu to="/contact" isActive={selectedMenu === 'contact'}>
        Contact
      </HeaderMenu>
    </HeaderContainer>
  )
}

Header.propTypes = {
  selectedMenu: PropTypes.oneOf(['home', 'work', 'blog', 'contact']).isRequired,
}
