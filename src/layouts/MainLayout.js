import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import '../utils/fontawesome'
import GlobalStyle from '../components/GlobalStyle'

const Header = styled.div({
  backgroundColor: '#777D71',
})

const HeaderContainer = styled.div({
  display: 'flex',
  maxWidth: 960,
  margin: '0 auto',
})

const HeaderSpace = styled.div({ flex: 1 })

const HeaderTitle = styled(Link)({
  textDecoration: 'none',
  color: '#F7F6E7',
  fontSize: 18,
  fontFamily: "'Montserrat', sans-serif",
  textTransform: 'uppercase',
  fontWeight: 700,
  letterSpacing: 2.5,
  padding: 13,
})

const HeaderMenu = styled(Link)(({ active }) => ({
  textDecoration: 'none',
  color: '#F7F6E7',
  fontSize: 15,
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 500,
  letterSpacing: 2.5,
  display: 'flex',
  alignItems: 'center',
  padding: '0 15px',
  backgroundColor: active ? '#62675D' : 'none',
  ':hover': {
    color: active ? '#F7F6E7' : '#DFDDC5',
  },
}))

function MainLayout({ children }) {
  return (
    <div>
      <GlobalStyle />
      <Header>
        <HeaderContainer>
          <HeaderTitle to="/">rahmanfadhil.</HeaderTitle>
          <HeaderSpace />
          <HeaderMenu to="/projects" active>
            Projects
          </HeaderMenu>
          <HeaderMenu to="/blog">Blog</HeaderMenu>
          <HeaderMenu to="/about">About</HeaderMenu>
          <HeaderMenu to="/contact">Contact</HeaderMenu>
        </HeaderContainer>
      </Header>
      {children}
    </div>
  )
}

MainLayout.propTypes = {}

export default MainLayout
