import  { createQuoteSlide } from '../utils'


const source = 'John Vogel Guttag'

const [ jguttag1 ] =
    [ 'The essence of abstractions is preserving information that is relevant in a given context, and forgetting information that is irrelevant in that context.'
    ].map( quote => createQuoteSlide( { quote , source } ) )


export  { jguttag1 }
