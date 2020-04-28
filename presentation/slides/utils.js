const createSlide =
    type => ( props = {} ) => (
        { type , props } )

const BulletSlide = createSlide( 'bullet' )
const CodeSlide = createSlide( 'code' )
const ImageSlide = createSlide( 'image' )
const QuoteSlide = createSlide( 'quote' )
const SectionSlide = createSlide( 'section' )
const TitleSlide = createSlide( 'title' )

        
export  { createSlide
        , BulletSlide
        , CodeSlide
        , ImageSlide
        , QuoteSlide
        , SectionSlide
        , TitleSlide }
