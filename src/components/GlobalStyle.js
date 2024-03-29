import React from 'react'
import { Global, css } from '@emotion/core'

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Montserrat:700|Nunito:700');

        body {
          margin: 0;
        }
      `}
    />
  )
}
