import  React from 'react'
import  { FlexBox , Heading , Slide } from 'spectacle'


const renderTitleSlide =
    ( _ , index ) => (
        <Slide backgroundImage="linear-gradient(to bottom, #2a2139 75%, #34294f)" transitionEffect="slide" key={ index }>
            <FlexBox height="100%" flexDirection="column">
                <Heading margin="0px" fontSize="150px">
                    Top-Down Design:
                </Heading>
                <Heading margin="0px" fontSize="h2" textAlign="right">
                    Extreme Composition Edition
                </Heading>
                <Heading margin="0px 32px" color="primary" fontSize="h3" textAlign="left">
                    Forrest Akin
                </Heading>
                <Heading margin="0px 32px" color="primary" fontSize="h3" alignSelf="flex-end">
                    JS.LA 420
                </Heading>
            </FlexBox>
        </Slide> )


export  { renderTitleSlide }
