import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'

import '../utils/fontawesome'

const Header = styled.div({
  backgroundColor: '#fff',
})

const Container = styled.div({
  display: 'flex',
  maxWidth: 960,
  margin: '0 auto',
  padding: '0 20px',
  '@media (max-width: 768px)': {
    padding: 0,
  },
})

const HeaderSpace = styled.div({ flex: 1 })

const HeaderTitle = styled(Link)({
  textDecoration: 'none',
  paddingLeft: 20,
  paddingRight: 20,
  display: 'flex',
  alignItems: 'center',
  textTransform: 'uppercase',
  fontFamily: "'Montserrat', sans-serif",
  fontSize: 19,
  fontWeight: 700,
  letterSpacing: '2.5px',
  cursor: 'pointer',
  color: '#212121',
  ':hover': {
    color: '#212121',
  },
  '@media (max-width: 768px)': {
    fontSize: 16,
  },
})

const HeaderItem = styled(HeaderTitle)(({ active }) => ({
  fontWeight: 600,
  padding: '30px 20px',
  fontSize: 14,
  letterSpacing: '1.5px',
  color: active ? '#212121' : '#757575',
  '@media (max-width: 768px)': {
    display: 'none',
  },
}))

const HeaderMenu = styled.div({
  padding: 20,
  fontSize: 16,
  cursor: 'pointer',
  color: '#212121',
  '@media (min-width: 768px)': {
    display: 'none',
  },
})

function MainLayout({ children }) {
  return (
    <div>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700');

          body {
            margin: 0;
          }
        `}
      />
      <Header>
        <Container navbar>
          <HeaderTitle to="/">rahmanfadhil.</HeaderTitle>
          <HeaderSpace />
          <HeaderItem to="/projects">Projects</HeaderItem>
          <HeaderItem to="/blog">Blog</HeaderItem>
          <HeaderItem to="/about">About</HeaderItem>
          <HeaderItem to="/contact">Contact</HeaderItem>
          <HeaderMenu>
            <FontAwesomeIcon icon="bars" />
          </HeaderMenu>
        </Container>
      </Header>
      {children}
    </div>
  )
}

MainLayout.propTypes = {}

export default MainLayout
