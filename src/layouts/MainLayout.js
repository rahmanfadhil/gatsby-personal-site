import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import '../utils/fontawesome'
import GlobalStyle from '../components/GlobalStyle'

const Header = styled.div({
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

const HeaderMenu = styled(Link)(({ active }) => ({
  textDecoration: 'none',
  color: active ? '#212121' : '#757575',
  fontSize: 15,
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 700,
  letterSpacing: 2.5,
  display: 'flex',
  alignItems: 'center',
  padding: '0 15px',
  ':hover': {
    color: '#212121',
    ':after': !active && { width: 15 },
  },
  ':after': {
    content: "''",
    position: 'absolute',
    backgroundColor: '#212121',
    width: active ? 15 : 0,
    borderRadius: 3,
    height: 3,
    bottom: 3,
    transition: 'width 0.2s',
  },
  position: 'relative',
}))

function MainLayout({ children, selectedMenu }) {
  return (
    <div>
      <GlobalStyle />
      <Header>
        <HeaderTitle>rahman fadhil</HeaderTitle>
        <HeaderSpace />
        <HeaderMenu to="/" active={selectedMenu === 'home'}>
          Home
        </HeaderMenu>
        <HeaderMenu to="/projects" active={selectedMenu === 'work'}>
          Work
        </HeaderMenu>
        <HeaderMenu to="/blog" active={selectedMenu === 'blog'}>
          Blog
        </HeaderMenu>
        <HeaderMenu to="/contact" active={selectedMenu === 'contact'}>
          Contact
        </HeaderMenu>
      </Header>
      {children}
    </div>
  )
}

MainLayout.propTypes = {
  selectedMenu: PropTypes.oneOf(['home', 'work', 'blog', 'contact']).isRequired,
}

export default MainLayout
