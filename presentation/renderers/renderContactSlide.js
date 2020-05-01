import  React from 'react'
import  { FlexBox , Heading , Image , Slide } from 'spectacle'


const renderContactSlide =
    ( _ , index ) => (
        <Slide backgroundImage="url(https://steamuserimages-a.akamaihd.net/ugc/2441391184293294699/B5F49C6946AFB32C871BFB75102BDD4C4917710B/)" transitionEffect="fade" key={ `title-${ index }` }>
            <FlexBox height="100%" flexDirection="column">
                <Heading margin="0px" color="white" fontSize="150px" style={ { textShadow : "-2px -2px 8px magenta , 2px 2px 8px cyan" } }>
                    Code Crucible
                </Heading>
                <Heading margin="0px 32px" color="primary" fontSize="h3">
                    Forrest Akin
                </Heading>
                <Heading margin="0px 16px" color="primary" fontSize="25px">
                    <Image src={ 'https://www.stickpng.com/assets/images/5cb480cd5f1b6d3fbadece79.png' } width={ 42 } /> @forrest
                </Heading>
                <Heading margin="0px 16px" color="primary" fontSize="25px">
                    <Image src={ 'https://cdn.clipart.email/f20cb83686e8959aac30a1de2ba636a5_twittericon-twitter-round-logo-png-transparent-background-png-_840-880.jpeg' } width={ 42 } /> @forrest_akin
                </Heading>
                <Heading margin="0px 16px" color="primary" fontSize="25px">
                    <Image src={ 'https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png' } width={ 42 } /> forrest.akin@gmail.com
                </Heading>
            </FlexBox>
        </Slide> )


export  { renderContactSlide }
