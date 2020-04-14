import  React from 'react'
import  { Box , Deck , FlexBox , FullScreen , Progress } from 'spectacle'

import  { renderSlide } from './renderers'


const Presentation =
    ( { slides } ) => (
        <Deck theme={ theme } template={ template } transitionEffect="fade">
            { slides.map( renderSlide ) }
        </Deck> )

const theme =
    { fonts :
        { header : '"Open Sans Condensed", Helvetica, Arial, sans-serif'
        , text : '"Open Sans Condensed", Helvetica, Arial, sans-serif'
        , monospace : 'Dank Mono' } }

const template =
    () => (
        <FlexBox justifyContent="space-between" position="absolute" bottom={ 0 } width={ 1 }>
            <Box padding="0 1em">
                <FullScreen /> </Box>
            
            <Box padding="1em"> 
                <Progress /> </Box> </FlexBox> )


export  { Presentation }
