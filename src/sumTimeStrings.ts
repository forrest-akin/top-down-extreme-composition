import  { durationStringsToSeconds , secondsToDurationString } from './domain/duration'
import  { pipe
        , Unary } from './utils/function'
import  { split } from './utils/string'


const parse : Unary< string , string[] > =
    split( ' ' )

const sumTimeStrings : Unary< string , string > =
    pipe( parse
        , durationStringsToSeconds
        , secondsToDurationString )


export  { sumTimeStrings }
