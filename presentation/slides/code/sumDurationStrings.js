import  { sumDurationStrings as code } from '../../code/sumDurationStrings'


const heading = 'sumDurationStrings ( Compositional )'

const steps =
    [ { autoFillHeight : false , start : 10 , end : 13 , size : 30 }
    , { autoFillHeight : false , start : 1 , end : 13 , size : 24 }
    , { start : 1 , end : 14 } ]

const sumDurationStrings =
    { type : 'code'
    , props : { heading , code , steps } }


export  { sumDurationStrings }
