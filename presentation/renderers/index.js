import  { renderCodeSlide } from './renderCodeSlide'
import  { renderQuoteSlide } from './renderQuoteSlide'


const renderSlide =
    ( { type , props } , index ) =>
        renderersByType[ type ]( props , index )

const renderersByType =
    { code : renderCodeSlide
    , quote : renderQuoteSlide }


export  { renderSlide }
