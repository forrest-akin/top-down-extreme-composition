import { tapIO , Folder , Mapper } from './function'
import { $length } from './props'


export const concat : <A>( xs : A[] , ys : A[] ) => A[] =
    ( xs , ys ) =>
        xs.concat( ys )

export const fill : <A>( x : A , xs : A[] ) => A[] =
    ( filler , xs ) =>
        xs.fill( filler )

export const join : ( x : string ) => <A>( xs : A[] ) => string =
    delimiter => xs =>
        xs.join( delimiter )

export const map : < A , B >( f : Mapper< A , B > ) => ( xs : A[] ) => B[] =
    f => xs =>
        xs.map( f )

export const padLeft : < A >( n : number , x : A ) => ( xs : A[] ) => A[] =
    ( maxLength , filler ) => xs =>
        $length( xs ) < maxLength
        ? concat( repeat( filler , maxLength - $length( xs ) ) , xs )
        : xs

export const reduce : < A , B >( f : Folder< A , B > ) => ( x : B ) => ( xs : A[] ) => B =
    f => init => xs =>
        xs.reduce( f , init )

export const repeat : <A>( x : A , n : number ) => A[] =
    ( x , length ) =>
        fill( x , Array( length ) )

export const replaceHead : < A >( f : ( x : A ) => A[] ) => ( xs : A[] ) => A[] =
    f => ( [ head , ...tail ] ) =>
        concat( f( head ) , tail )
