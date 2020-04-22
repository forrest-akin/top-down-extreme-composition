import  { createQuoteSlide } from '../utils'


const source = 'Structure and Interpretation of Computer Programs'

const [ sicp1 , sicp2 , sicp3 ] =
    [ 'It is crucial that each procedure accomplishes an identifiable task that can be used as a module in defining other procedures.'
    , 'A user should not need to know how the procedure is implemented in order to use it.'
    , 'We can encourage modular design by providing a library of standard components together with a conventional interface for connecting the components in flexible ways.'
    ].map( quote => createQuoteSlide( { quote , source } ) )


export  { sicp1 , sicp2 , sicp3 }
