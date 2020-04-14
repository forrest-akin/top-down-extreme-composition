import  { renderCodeSlide } from './renderCodeSlide'


const renderSlide =
    ( { type , props } , index ) =>
        renderersByType[ type ]( props , index )

const renderersByType =
    { code : renderCodeSlide }


export  { renderSlide }
