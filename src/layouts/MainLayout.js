import React from 'react'
import PropTypes from 'prop-types'

import '../utils/fontawesome'
import GlobalStyle from '../components/GlobalStyle'
import Header from '../components/Header'

function MainLayout({ children, selectedMenu }) {
  return (
    <div>
      <GlobalStyle />
      <Header selectedMenu={selectedMenu} />
      {children}
    </div>
  )
}

MainLayout.propTypes = {
  selectedMenu: PropTypes.oneOf(['home', 'work', 'blog', 'contact']).isRequired,
}

export default MainLayout
