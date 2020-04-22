import  React from 'react'
import  { Appear , FlexBox , Heading , ListItem , Slide , UnorderedList } from 'spectacle'


const renderBulletSlide =
    ( { header , bullets , startFrom = 0 } , index ) => (
        <Slide backgroundImage="linear-gradient(to bottom, #2a2139 75%, #34294f)" transitionEffect="slide" key={ index }>
                <Heading margin="0px" fontSize="150px">
                    { header }
                </Heading>
                <UnorderedList>
                    { bullets.map( ( bullet , index ) => (
                        index < startFrom
                        ? <ListItem>{ bullet }</ListItem>
                        :   <Appear elementNum={ index - startFrom }>
                                <ListItem>{ bullet }</ListItem>
                            </Appear> ) )
                    }
                </UnorderedList>
        </Slide> )


export  { renderBulletSlide }
