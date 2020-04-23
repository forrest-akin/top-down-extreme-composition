import  { sumDurationStringsImperative as code } from '../../code/sumDurationStrings-imperative'


const heading = 'Imperative'
const init = { start : 1 , end : 2 , size : 32 }
const steps =
    [ { start : 1 , end : 3 , size : 31 }
    , { start : 1 , end : 11 , size : 30 }
    , { start : 1 , end : 16 , size : 19 }
    , { start : 1 , end : 24 , size : 14 }
    , { start : 1 , end : 26 , size : 13 }
    ]

const imperative =
    { type : 'code'
    , props : { init , heading , code , steps } }


export  { imperative }
