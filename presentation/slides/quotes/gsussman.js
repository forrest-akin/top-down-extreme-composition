import  { createQuoteSlide } from '../utils'


const source = 'Gerald Jay Sussman'

const [ gsussman1 ] =
    [ 'The key to understanding complicated things is knowing what not to look at.'
    ].map( quote => createQuoteSlide( { quote , source } ) )


export  { gsussman1 }
