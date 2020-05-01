import  React from 'react'
import  { FlexBox , Heading , Image , Slide } from 'spectacle'


const renderHelloSlide =
    ( { fontSize = 150 , section } , index ) => (
        <Slide backgroundImage="linear-gradient(to bottom, #2a2139 75%, #34294f)" transitionEffect="fade" key={ `section-${ index }` }>
            <FlexBox height="100%" flexDirection="column">
                <Heading margin="0px" fontSize={ fontSize }>
                    Hello, <Image src={ 'https://js.la/images/jsla_152.png' } width={ 110 } />!
                </Heading>
            </FlexBox>
        </Slide> )


export  { renderHelloSlide }
