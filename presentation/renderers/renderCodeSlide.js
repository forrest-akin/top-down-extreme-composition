import  React from 'react'
import  { CodePane , Heading , Slide , Stepper } from 'spectacle'


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


export  { renderCodeSlide }
