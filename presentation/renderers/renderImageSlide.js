import  React from 'react'
import  { FlexBox , Heading , Image , Slide } from 'spectacle'


const renderImageSlide =
    ( { src } , index ) => (
        <Slide backgroundImage="linear-gradient(to bottom, #2a2139 75%, #34294f)" transitionEffect="fade" key={ `image-${ index }` }>
            <FlexBox height="100%" flexDirection="column">
                <Image src={ src } width={ 333 } />
            </FlexBox>
        </Slide> )


export  { renderImageSlide }
