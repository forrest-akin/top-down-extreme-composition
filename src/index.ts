import { map , join , padLeft as arrayPadLeft , reduce , replaceHead } from './utils/array'
import { pipe , tapIO, unfold } from './utils/function'
import { add , divmod , lt , mult } from './utils/number'
import { $length } from './utils/props'
import { split , padLeft as stringPadLeft } from './utils/string'


const lengthLt3 : ( x : { length : number } ) => boolean =
    pipe( $length , lt( 3 ) )

const unfoldSeconds : ( xs : number[] ) => number[] =
    replaceHead( x => divmod( x , 60 ) )

const durationOfSeconds : ( s : number ) => Duration =
    pipe( Array.of
        , unfold( lengthLt3 )( unfoldSeconds ) )

const durationOfString : ( x : string ) => Duration =
    pipe( split( ':' )
        , map( Number )
        , arrayPadLeft( 3 , 0 ) )

const durationToString : ( x : Duration ) => string =
    pipe( map(
            pipe( String , stringPadLeft( 2 , '0' ) ) )
        , join( ':' ) )

const mult60 : ( x : number ) => number =
    mult( 60 )

const foldDurationToSeconds : ( x : number , y : number ) => number =
    ( x , y ) =>
        add( mult60( x ) )( y )

const durationToSeconds : ( x : Duration ) => number =
    reduce( foldDurationToSeconds )( 0 )

const timeStringToSeconds : ( x : string ) => number =
    pipe( durationOfString , durationToSeconds )

const parseTimeStrings : ( x : string ) => string[] =
    split( ' ' )

const foldTimeStringToSeconds : ( x : number , y : string ) => number =
    ( x , y ) =>
        add( x )( timeStringToSeconds( y ) )

const timeStringsToSeconds : ( xs : string[] ) => number =
    reduce( foldTimeStringToSeconds )( 0 )

const secondsToTimeString : ( x : number ) => string =
    pipe( durationOfSeconds , durationToString )

export const sumTimeStrings : ( x : string ) => string =
    pipe( parseTimeStrings
        , timeStringsToSeconds
        , secondsToTimeString )


type Duration =
    [ number    // Hours
    , number    // Minutes
    , number ]  // Seconds
