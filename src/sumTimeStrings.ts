import  { durationStringsToSeconds , secondsToDurationString } from './duration'
import  { pipe } from './utils/function'
import  { split } from './utils/string'


const parse = split( ' ' )

const sumTimeStrings =
    pipe( parse
        , durationStringsToSeconds
        , secondsToDurationString )


export  { sumTimeStrings }
