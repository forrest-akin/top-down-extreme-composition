import  React from 'react'
import  { FlexBox , Quote , Slide , Text } from 'spectacle'


const renderQuoteSlide =
    ( { quote , source } , index ) => (
        <Slide backgroundImage="linear-gradient(to bottom, #2a2139 75%, #34294f)" transitionEffect="slide" key={ index }>
            <FlexBox height="100%" flexDirection="column">
                <Quote>
                    { quote }
                </Quote>
                <Text>
                    { source }
                </Text>
            </FlexBox>
        </Slide> )


export  { renderQuoteSlide }
