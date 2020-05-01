const createSlide =
    type => ( props = {} ) => (
        { type , props } )

const BulletSlide = createSlide( 'bullet' )
const CodeSlide = createSlide( 'code' )
const ContactSlide = createSlide( 'contact' )
const HelloSlide = createSlide( 'hello' )
const ImageSlide = createSlide( 'image' )
const QuoteSlide = createSlide( 'quote' )
const SectionSlide = createSlide( 'section' )
const TitleSlide = createSlide( 'title' )

        
export  { createSlide
        , BulletSlide
        , CodeSlide
        , ContactSlide
        , HelloSlide
        , ImageSlide
        , QuoteSlide
        , SectionSlide
        , TitleSlide }
