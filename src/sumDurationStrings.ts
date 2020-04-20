import  { durationStringsToSeconds , secondsToDurationString
        , DurationString } from './domain/duration'
import  { pipe
        , Endo , Unary } from './utils/function'
import  { split } from './utils/string'


const parse : Unary< string , DurationString[] > =
    split( ' ' )

const sumDurationStrings : Endo< string > =
    pipe( parse
        , durationStringsToSeconds
        , secondsToDurationString )


export  { sumDurationStrings }
