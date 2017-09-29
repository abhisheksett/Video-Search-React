// @flow

import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from: {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to: {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const Image = styled.img`
  -webkit-animation: ${spin} 4s infinite linear;
  -moz-animation: ${spin} 4s infinite linear;
  -ms-animation: ${spin} 4s infinite linear;
  -o-animation: ${spin} 4s infinite linear;
  animation: ${spin} 4s infinite linear;
`

const Spinner = () => <Image src="/public/img/loading.png" alt="Spinner image" />

export default Spinner;
