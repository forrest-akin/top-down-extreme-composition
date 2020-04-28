export const domainDuration = `import  { head , join , map , padLeft as arrayPadLeft , replaceHead
        , tail , unfold } from '../utils/array'
import  { flip , identity , pipe , unary
        , Unary } from '../utils/function'
import  { eq , ifElse } from '../utils/logic'
import  { divmod , lt , mapSum , multiply , sumMap } from '../utils/number'
import  { _length } from '../utils/props'
import  { split , padLeft as stringPadLeft } from '../utils/string'


const lengthLt3 : Unary< number[] , boolean > =
    pipe( _length
        , lt( 3 ) )

const divmodBy60 : Unary< number , [ number , number ] > =
    flip( divmod , 60 )

const durationOfSeconds : Unary< Seconds , Duration > =
    pipe( unary( Array.of )
        , unfold( lengthLt3 , replaceHead( divmodBy60 ) ) )

const durationOfString : Unary< DurationString , Duration > =
    pipe( split( ':' )
        , map( Number )
        , arrayPadLeft( 3 , 0 ) )

const headIs0 : Unary< number[] , boolean > =
    pipe( head
        , eq( 0 ) )

const omitEmptyHours : Unary< Duration , MinSecDuration | Duration > =
    ifElse( headIs0 , tail , identity )

const formatDurationPart : Unary< number , string > =
    pipe( String
        , stringPadLeft( 2 , '0' ) )

const durationToString : Unary< Duration , string > =
    pipe( omitEmptyHours
        , map( formatDurationPart )
        , join( ':' ) )

const durationToSeconds : Unary< Duration , Seconds > =
    mapSum( multiply( 60 ) )

const durationStringToSeconds : Unary< DurationString , Seconds > =
    pipe( durationOfString
        , durationToSeconds )

const durationStringsToSeconds : Unary< DurationString[] , Seconds > =
    sumMap( durationStringToSeconds )

const secondsToDurationString : Unary< Seconds , DurationString > =
    pipe( durationOfSeconds
        , durationToString )


type Duration = [ Hours , Minutes , Seconds ]
type MinSecDuration = [ Minutes , Seconds ]
type SecDuration = [ Seconds ]
type Hours = number
type Minutes = number
type Seconds = number
type DurationString = string
`