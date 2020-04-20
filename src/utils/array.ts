import  { applyTo , converge , identity , logIO , pipe , unary
        , Endo , Folder , Unary } from './function'
import  { ifElse } from './logic'
import  { _length } from './props'


const concat : < A >( xs : A[] , ys : A[] ) => A[] =
    ( xs , ys ) =>
        xs.concat( ys )

const fill : < A >( x : A , xs : A[] ) => A[] =
    ( filler , xs ) =>
        xs.fill( filler )

const foldMap =
    ( append , empty ) => f =>
        reduce(
            ( x , y ) => append( x , f( y ) )
            , empty() )

const fold =
    pipe( foldMap
        , applyTo( identity ) )

const head : < A >( xs : A[] ) => A =
    ( [ x ] = [] ) => x

const join : < A >( x : string ) => Unary< A[] , string > =
    delimiter => xs =>
        xs.join( delimiter )

const map : < A , B >( f : Unary< A , B > ) => Unary< A[] , B[] > =
    f => xs =>
        xs.map( f )

const padLeft : < A >( n : number , x : A ) => Endo< A[] > =
    ( maxLength , filler ) => xs =>
        _length( xs ) < maxLength
        ? concat(
            repeat( filler , maxLength - _length( xs ) )
            , xs )
        : xs

const reduce : < A , B >( f : Folder< B , A > , x : B ) => Unary< A[] , B > =
    ( f , init ) => xs =>
        xs.reduce( f , init )

const repeat : < A >( x : A , n : number ) => A[] =
    ( x , length ) =>
        fill( x , Array( length ) )

const replaceHead : < A >( f : Unary< A , A[] > ) => Endo< A[] > =
    f =>
        converge( concat
            , pipe( head , f )
            , tail )

const tail : < A >( xs : A[] ) => A[] =
    ( [ , ...xs ] = [] ) => xs

const unfold =
    ( next , f ) =>
        ifElse( next
            , x => unfold( next , f )( f( x ) )
            , identity )


export  { concat
        , fill
        , fold
        , foldMap
        , head
        , join
        , map
        , padLeft
        , reduce
        , repeat
        , replaceHead
        , tail
        , unfold }
