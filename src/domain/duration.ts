import  { head , map , join , padLeft as arrayPadLeft , reduce
        , replaceHead , tail , unfold } from '../utils/array'
import  { identity , pipe , unary
        , Binary , Endo , Endo2 , Unary } from '../utils/function'
import  { eq , ifElse } from '../utils/logic'
import  { add , divmod , lt , mult } from '../utils/number'
import  { _length } from '../utils/props'
import  { split , padLeft as stringPadLeft } from '../utils/string'


const lengthLt3 : Unary< number[] , boolean > =
    pipe( _length
        , lt( 3 ) )

const divmodBy60 : Unary< number , [ number , number ] > =
    x => divmod( x , 60 )

const durationOfSeconds : Unary< Seconds , Duration > =
    pipe( unary( Array.of )
        , unfold( lengthLt3
            , replaceHead( divmodBy60 ) ) )

const durationOfString : Unary< DurationString , Duration > =
    pipe( split( ':' )
        , map( Number )
        , arrayPadLeft( 3 , 0 ) )

const headIs0 : Unary< number[] , boolean > =
    pipe( head
        , eq( 0 ) )

const omitEmptyHours : Unary< Duration , Duration | MinSecDuration > =
    ifElse( headIs0
        , tail
        , identity )

const formatDurationPart : Unary< number , string > =
    pipe( String
        , stringPadLeft( 2 , '0' ) )

const durationToString : Unary< Duration , string > =
    pipe( omitEmptyHours
        , map( formatDurationPart )
        , join( ':' ) )

const multiply60 : Endo< number > =
    mult( 60 )

const foldDurationParts : Endo2< number > =
    ( x , y ) =>
        add( multiply60( x ) , y )

const durationToSeconds : Unary< Duration , Seconds > =
    reduce( foldDurationParts , 0 )

const durationStringToSeconds : Unary< DurationString , Seconds > =
    pipe( durationOfString
        , durationToSeconds )

const foldDurationString : Binary< Seconds , DurationString , Seconds > = 
    ( seconds , durationString ) =>
        add( seconds , durationStringToSeconds( durationString ) )

const durationStringsToSeconds : Unary< DurationString[] , Seconds > =
    reduce( foldDurationString , 0 )

const secondsToDurationString : Unary< Seconds , DurationString > =
    pipe( durationOfSeconds
        , durationToString )


export  { durationOfSeconds
        , durationOfString
        , durationStringToSeconds
        , durationStringsToSeconds
        , durationToSeconds
        , durationToString
        , secondsToDurationString }


export type DurationString = string
type Duration = [ Hours , Minutes , Seconds ]
type MinSecDuration = [ Minutes , Seconds ]
type SecDuration = [ Seconds ]

type Hours = number
type Minutes = number
export type Seconds = number
