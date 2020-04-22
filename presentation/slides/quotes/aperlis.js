import  { createQuoteSlide } from '../utils'


const source = 'Alan Perlis'

const [ aperlis1 ] =
    [ `I think that it's extraordinarily important that we in computer science keep fun in computing.`
    ].map( quote => createQuoteSlide( { quote , source } ) )


export  { aperlis1 }
