export const sumDurationStrings = `import  { durationStringsToSeconds , secondsToDurationString
        , DurationString } from './domain/duration'
import  { pipe
        , Unary } from './utils/function'
import  { split } from './utils/string'


const parse : Unary< string , DurationString[] > =
    split( ' ' )

const sumDurationStrings : Unary< string , DurationString > =
    pipe( parse
        , durationStringsToSeconds
        , secondsToDurationString )
`