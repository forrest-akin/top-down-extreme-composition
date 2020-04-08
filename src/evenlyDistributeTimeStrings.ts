import  { distributeSeconds , durationStringsToSeconds , secondsToDurationString } from './domain/duration'
import  { join , map } from './utils/array'
import  { pipe
        , Endo , Unary } from './utils/function'
import  { $length } from './utils/props'
import  { split } from './utils/string'


const parse : Unary< string , string[] > =
    split( ' ' )

const distributeDurationStrings : Unary< string[] , number[] > =
    durationStrings =>
        distributeSeconds(
            durationStringsToSeconds( durationStrings )
            , $length( durationStrings ) )

const serialize : Unary< string[] , string > =
    join( ' ' )

const evenlyDistributeTimeStrings : Endo< string > =
    pipe( parse
        , distributeDurationStrings
        , map( secondsToDurationString )
        , serialize )


export  { evenlyDistributeTimeStrings }
