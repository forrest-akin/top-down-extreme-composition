import  { renderBulletSlide } from './renderBulletSlide'
import  { renderCodeSlide } from './renderCodeSlide'
import  { renderContactSlide } from './renderContactSlide'
import { renderHelloSlide } from './renderHelloSlide'
import  { renderImageSlide } from './renderImageSlide'
import  { renderQuoteSlide } from './renderQuoteSlide'
import  { renderSectionSlide } from './renderSectionSlide'
import  { renderTitleSlide } from './renderTitleSlide'


const renderSlide =
    ( { type , props } , index ) =>
        renderersByType[ type ]( props , index )

const renderersByType =
    { bullet : renderBulletSlide
    , code : renderCodeSlide
    , contact : renderContactSlide
    , hello : renderHelloSlide
    , image : renderImageSlide
    , quote : renderQuoteSlide
    , section : renderSectionSlide
    , title : renderTitleSlide }


export  { renderSlide }
