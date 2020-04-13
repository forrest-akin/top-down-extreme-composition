import  React from 'react'
import  { CodePane , Deck , Heading , Slide , Stepper } from 'spectacle'


const Presentation =
    ( { theme , template , slides } ) => (
        <Deck theme={ theme } template={ template } transitionEffect="fade">
            { slides.map( renderSlide ) }
        </Deck> )

const renderSlide =
    ( { type , props } , index ) =>
        slideRenderersByType[ type ]( props , index )

const renderCodeSlide =
    ( { heading , code , steps } , index ) => (
        <Slide backgroundImage="linear-gradient(to bottom, #2a2139 75%, #34294f)" transitionEffect="slide" key={ heading + index }>
            <Heading fontSize="h3"> { heading } </Heading>
            <Stepper defaultValue={ [] } values={ steps }>
                { ( { autoFillHeight = true , start , end , size = 18 } ) => (
                    <CodePane
                        autoFillHeight
                        fontFamily={ 'Dank Mono' }
                        fontSize={ size }
                        highlightStart={ start }
                        highlightEnd={ end }
                        language={ 'typescript' }
                    >
                        { code }
                    </CodePane> ) }
            </Stepper>
        </Slide> )

const slideRenderersByType =
    { code : renderCodeSlide }

export  { Presentation }
