import  React from 'react'
import  { Appear , FlexBox , Heading , ListItem , Slide , UnorderedList } from 'spectacle'


const renderBulletSlide =
    ( { bullets , bulletSize = 50 , header , headerSize = 150 , showAll = false , startFrom = 0 } , index ) => (
        <Slide backgroundImage="linear-gradient(to bottom, #2a2139 75%, #34294f)" transitionEffect="fade" key={ `bullet-${ index }` }>
                <Heading margin="0px" fontSize={ headerSize }>
                    { header }
                </Heading>
                <UnorderedList>
                    { bullets.map( ( bullet , index ) => (
                        showAll || index < startFrom
                        ?   <ListItem fontSize={ bulletSize } key={ `section-ul-li-${ index }` }>
                                { bullet }
                            </ListItem>

                        :   <Appear elementNum={ index - startFrom } key={ `section-ul-appear-${ index }` }>
                                <ListItem fontSize={ bulletSize }>{ bullet }</ListItem>
                            </Appear> ) )
                    }
                </UnorderedList>
        </Slide> )


export  { renderBulletSlide }
