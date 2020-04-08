import  React from 'react'
import  { Appear , Box , CodePane , CodeSpan , Deck
        , FlexBox , FullScreen , Grid , Heading , Image
        , ListItem , Markdown , Notes , OrderedList , Progress
        , Slide , SpectacleLogo , Stepper , Text , UnorderedList
        , indentNormalizer } from 'spectacle'


const Presentation =
    ( { theme , template , slides } ) => (
        <Deck theme={ theme } template={ template } transitionEffect="fade">
            { slides.map(
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
                    </Slide> ) ) } </Deck> )


export  { Presentation }
