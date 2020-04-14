import  React from 'react'
import  ReactDOM from 'react-dom'

import  { Presentation } from './Presentation'
import  { slides } from './slides'


ReactDOM.render(
    <Presentation slides={ slides } />
    , document.getElementById( 'root' ) )
