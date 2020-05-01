import  React from 'react'
import  { FlexBox , Heading , Image , Slide } from 'spectacle'


const renderTitleSlide =
    ( _ , index ) => (
        <Slide backgroundImage="url(https://steamuserimages-a.akamaihd.net/ugc/2441391184293294699/B5F49C6946AFB32C871BFB75102BDD4C4917710B/)" transitionEffect="fade" key={ `title-${ index }` }>
            <FlexBox height="100%" flexDirection="column">
                <Heading margin="0px" color="white" fontSize="150px" style={ { textShadow : "-2px -2px 8px magenta , 2px 2px 8px cyan" } }>
                    Code Crucible
                </Heading>
                <Heading margin="0px" color="white" fontSize="h2" fontStyle="italic" style={ { textShadow : "0px 0px 4px white" } }>
                    Fueling a refinement of values
                </Heading>
                <Heading margin="0px 32px" color="primary" fontSize="h3">
                    Forrest Akin
                </Heading>
                <Heading margin="0px 32px" color="primary" fontSize="50px">
                    <Image src={ 'https://js.la/images/jsla_152.png' } width={ 42 } /> 420
                </Heading>
            </FlexBox>
        </Slide> )


export  { renderTitleSlide }
