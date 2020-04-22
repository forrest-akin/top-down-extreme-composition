import  { renderBulletSlide } from './renderBulletSlide'
import  { renderCodeSlide } from './renderCodeSlide'
import  { renderQuoteSlide } from './renderQuoteSlide'
import  { renderSectionSlide } from './renderSectionSlide'
import  { renderTitleSlide } from './renderTitleSlide'


const renderSlide =
    ( { slide , type , props } , index ) =>
        renderersByType[ type ]( props , index )

const renderersByType =
    { bullet : renderBulletSlide
    , code : renderCodeSlide
    , quote : renderQuoteSlide
    , section : renderSectionSlide
    , title : renderTitleSlide }


export  { renderSlide }
