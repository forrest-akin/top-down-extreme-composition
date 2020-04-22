import  React from 'react'
import  { FlexBox , Heading , Slide } from 'spectacle'


const renderSectionSlide =
    ( { section } , index ) => (
        <Slide backgroundImage="linear-gradient(to bottom, #2a2139 75%, #34294f)" transitionEffect="slide" key={ index }>
            <FlexBox height="100%" flexDirection="column">
                <Heading margin="0px" fontSize="150px">
                    { section }
                </Heading>
            </FlexBox>
        </Slide> )


export  { renderSectionSlide }
