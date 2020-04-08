import  React from 'react'
import  ReactDOM from 'react-dom'
import  { Appear , Box , CodePane , CodeSpan , Deck
        , FlexBox , FullScreen , Grid , Heading , Image
        , ListItem , Markdown , Notes , OrderedList , Progress
        , Slide , SpectacleLogo , Stepper , Text , UnorderedList
        , indentNormalizer } from 'spectacle'

import  { Presentation } from './Presentation'
import  { sumTimeStrings } from './slides/sumTimeStrings'
import  { duration } from './slides/duration'

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    monospace: 'Dank Mono',
  }
}

const template =
    () => (
        <FlexBox
            justifyContent="space-between"
            position="absolute"
            bottom={0}
            width={1}
        >
            <Box padding="0 1em">
                <FullScreen /> </Box>
            
            <Box padding="1em"> 
                <Progress /> </Box> </FlexBox> )

const slides =
    [ sumTimeStrings
    , duration ]

const App =
    () => <Presentation theme={ theme } template={ template } slides={ slides } />


ReactDOM.render( <App /> , document.getElementById( 'root' ) )
