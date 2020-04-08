import  { head , map , join , padLeft as arrayPadLeft , reduce
        , replaceHead , repeat , tail } from '../utils/array'
import  { identity , pipe , unfold
        , Binary , CurriedEndo2 , Endo , Endo2 , Folder , Unary } from '../utils/function'
import  { eq , ifElse } from '../utils/logic'
import  { add , divmod , lt , mult } from '../utils/number'
import  { $length } from '../utils/props'
import  { split , padLeft as stringPadLeft } from '../utils/string'


const lengthLt3 : Unary< number[] , boolean > =
    pipe( $length
        , lt( 3 ) )

const unfoldSeconds : DurationUnfolder =
    replaceHead( x => divmod( x , 60 ) ) as DurationUnfolder

const durationOfSeconds : Unary< number , Duration > =
    unfold( lengthLt3
        , unfoldSeconds
        , Array.of ) as Unary< number , Duration >

const durationOfString : Unary< string , Duration > =
    pipe( split( ':' )
        , map( Number )
        , arrayPadLeft( 3 , 0 ) )

const headIs0 : Unary< number , boolean > =
    pipe( head
        , eq( 0 ) )

const omitEmptyHours : Unary< Duration , Duration | MinSecDuration > =
    ifElse( headIs0
        , tail
        , identity )

const durationToString : Unary< Duration , string > =
    pipe( omitEmptyHours
        , map( pipe( String
                , stringPadLeft( 2 , '0' ) ) )
        , join( ':' ) )

const mult60 : Endo< number > =
    mult( 60 )

const foldDurationToSeconds : Endo2< number > =
    ( x , y ) =>
        add( mult60( x ) , y )

const durationToSeconds : Unary< Duration , number > =
    reduce( foldDurationToSeconds , 0 )

const durationStringToSeconds : Unary< string , number > =
    pipe( durationOfString
        , durationToSeconds )

const foldTimeStringToSeconds : Folder< number , string > =
    ( x , y ) =>
        add( x , durationStringToSeconds( y ) )

const durationStringsToSeconds : Unary< string[] , number > =
    reduce( foldTimeStringToSeconds , 0 )

const secondsToDurationString : Unary< number , string > =
    pipe( durationOfSeconds
        , durationToString )

const distributeSeconds : Binary< number , number , number[] > =
    ( seconds , n ) => (                            // using IIFE to create internal state through
        ( [ q , r ] = divmod( seconds , n ) ) =>    // function parameters instead of variables
            map( distributeRemainder( r )
                )( repeat( q , n ) )
    )()

const distributeRemainder : CurriedEndo2< number > =
    r => q =>
        add( q , r && ( --r , 1 ) ) // if r > 0, add 1 to q and decrement r
                                    // if r = 0, add 0 to q

export  { distributeSeconds
        , durationOfSeconds
        , durationOfString
        , durationStringToSeconds
        , durationStringsToSeconds
        , durationToSeconds
        , durationToString
        , secondsToDurationString }


type DurationUnfolder =
    Unary< SecDuration , MinSecDuration >
    | Unary< MinSecDuration , Duration >

type Duration = Tuple3< Hours , Minutes , Seconds >
type MinSecDuration = Tuple2< Minutes , Seconds >
type SecDuration = Tuple1< Seconds >

type Hours = number
type Minutes = number
type Seconds = number

type Tuple3< A , B , C > = [ A , B , C ]
type Tuple2< A , B > = [ A , B ]
type Tuple1< A > = [ A ]
