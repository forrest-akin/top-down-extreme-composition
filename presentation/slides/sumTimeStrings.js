const heading = 'sumTimeStrings'

const code =
`import  { durationStringsToSeconds , secondsToDurationString } from './domain/duration'
import  { pipe
        , Unary } from './utils/function'
import  { split } from './utils/string'


const parse : Unary< string , string[] > =
    split( ' ' )

const sumTimeStrings : Unary< string , string > =
    pipe( parse
        , durationStringsToSeconds
        , secondsToDurationString )


export  { sumTimeStrings }`

const steps =
    [ { autoFillHeight : false , start : 10 , end : 13 , size : 30 }
    , { autoFillHeight : false , start : 1 , end : 13 , size : 24 }
    , { start : 1 , end : 14 } ]

const sumTimeStrings =
    { type : 'code'
    , props : { heading , code , steps } }


export  { sumTimeStrings }
