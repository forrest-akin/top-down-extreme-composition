import  { Endo , Folder , Unary } from './function'
import  { $length } from './props'


const concat : < A >( xs : A[] , ys : A[] ) => A[] =
    ( xs , ys ) =>
        xs.concat( ys )

const fill : < A >( x : A , xs : A[] ) => A[] =
    ( filler , xs ) =>
        xs.fill( filler )

const join : < A >( x : string ) => Unary< A[] , string > =
    delimiter => xs =>
        xs.join( delimiter )

const map : < A , B >( f : Unary< A , B > ) => Unary< A[] , B[] > =
    f => xs =>
        xs.map( f )

const padLeft : < A >( n : number , x : A ) => Endo< A[] > =
    ( maxLength , filler ) => xs =>
        $length( xs ) < maxLength
        ? concat(
            repeat( filler , maxLength - $length( xs ) )
            , xs )
        : xs

const reduce : < A , B >( f : Folder< B , A > , x : B ) => Unary< A[] , B > =
    ( f , init ) => xs =>
        xs.reduce( f , init )

const repeat : < A >( x : A , n : number ) => A[] =
    ( x , length ) =>
        fill( x , Array( length ) )

const replaceHead : < A >( f : Unary< A , A[] > ) => Endo< A[] > =
    f => ( [ head , ...tail ] ) =>
        concat( f( head ) , tail )


export  { concat
        , fill
        , join
        , map
        , padLeft
        , reduce
        , repeat
        , replaceHead }
