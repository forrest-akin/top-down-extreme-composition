import  { domainDuration as code } from '../../code/domain-duration'
import  { createCodeSlide } from '../utils'

const heading = 'Duration Domain'
const init = { start : 1 , end : 78 , size : 23 }
const steps =
    []

const duration =
    { type : 'code'
    , props : { init , heading , code , steps } }


export  { duration }
