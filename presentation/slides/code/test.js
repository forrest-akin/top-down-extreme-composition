import  { sumDurationStringsTest as code } from '../../code/test-sumDurationStrings'


const heading = 'sumDurationStrings.test'

const steps =
    [ { autoFillHeight : false , start : 10 , end : 13 , size : 30 }
    , { autoFillHeight : false , start : 1 , end : 13 , size : 24 }
    , { start : 1 , end : 14 } ]

const test =
    { type : 'code'
    , props : { heading , code , steps } }


export  { test }
