import  { distributeSeconds , durationStringsToSeconds , secondsToDurationString
        , DurationString , Seconds } from './domain/duration'
import  { join , map } from './utils/array'
import  { converge , pipe
        , Endo , Unary } from './utils/function'
import  { _length } from './utils/props'
import  { split } from './utils/string'


const parse : Unary< string , DurationString[] > =
    split( ' ' )

const distributeDurationStrings : Unary< DurationString[] , Seconds[] > =
    converge( distributeSeconds
        , durationStringsToSeconds
        , _length )

const serialize : Unary< DurationString[] , string > =
    join( ' ' )

const evenlyDistributeDurationStrings : Endo< string > =
    pipe( parse
        , distributeDurationStrings
        , map( secondsToDurationString )
        , serialize )


export  { evenlyDistributeDurationStrings }
