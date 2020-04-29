export const sumDurationStrings = `import  { durationStringsToSeconds , secondsToDurationString
        , DurationString } from './domain/duration'
import  { pipe
        , Unary } from './utils/function'
import  { split } from './utils/string'


// '12:32 34:01 15:23 9:27 55:22 25:56' => '02:32:41'
const sumDurationStrings : Unary< string , DurationString > =
    pipe( split( ' ' )
        , durationStringsToSeconds
        , secondsToDurationString )
`