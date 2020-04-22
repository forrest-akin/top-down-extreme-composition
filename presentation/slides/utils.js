const createSlide =
    type => props => (
        { type
        , props } )

const createCodeSlide = createSlide( 'quote' )

const createQuoteSlide = createSlide( 'quote' )

        
export  { createSlide
        , createCodeSlide
        , createQuoteSlide }
