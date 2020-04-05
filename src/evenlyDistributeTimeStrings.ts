import  { distributeSeconds , durationStringsToSeconds , secondsToDurationString } from './duration'
import  { join , map } from './utils/array'
import  { pipe
        , Endo , Unary } from './utils/function'
import  { $length } from './utils/props'
import  { split } from './utils/string'


const parse = split( ' ' )

const distributeDurationStrings : Unary< string[] , number[] > =
    durationStrings =>
        distributeSeconds(
            $length( durationStrings )
            , durationStringsToSeconds( durationStrings ) )

const serialize = join( ' ' )

const evenlyDistributeTimeStrings : Endo< string > =
    pipe( parse
        , distributeDurationStrings
        , map( secondsToDurationString )
        , serialize )


export  { evenlyDistributeTimeStrings }
