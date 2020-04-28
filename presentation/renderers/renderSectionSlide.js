import  React from 'react'
import  { FlexBox , Heading , Slide } from 'spectacle'


const renderSectionSlide =
    ( { fontSize = 150 , section } , index ) => (
        <Slide backgroundImage="linear-gradient(to bottom, #2a2139 75%, #34294f)" transitionEffect="fade" key={ `section-${ index }` }>
            <FlexBox height="100%" flexDirection="column">
                <Heading margin="0px" fontSize={ fontSize }>
                    { section }
                </Heading>
            </FlexBox>
        </Slide> )


export  { renderSectionSlide }
