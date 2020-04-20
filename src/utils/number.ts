import  { foldMap } from './array'
import  { always , identity , juxt , pipe
        , Binary , Curried2 , CurriedEndo2 , Endo , Endo2 , Unary } from './function'


const add : Endo2< number > =
    ( x , y ) =>
        x + y

const div : Endo2< number > =
    ( x , y ) =>
        x / y

const { floor } = Math

const increment : Endo< number > =
    x => add( x , 1 )

const intdiv : Endo2< number > =
    pipe( div
        , floor )

const lt : Curried2< number , number , boolean > =
    x => y =>
        y < x

const modulo : Endo2< number > =
    ( x , y ) =>
        x % y

const divmod : Binary< number , number , NumberTuple2 > =
    juxt( intdiv
        , modulo ) as Binary< number , number , NumberTuple2 >

const mult : CurriedEndo2< number > =
    x => y =>
        x * y

const sumFoldMap : < A >( f : ( x : A ) => number ) => ( xs : A[] ) => number =
    foldMap( add , always( 0 ) )

const sum : Unary< number[] , number > =
    sumFoldMap( identity )


export  { add
        , div
        , divmod
        , floor
        , increment
        , intdiv
        , lt
        , modulo
        , mult
        , sum
        , sumFoldMap }


type NumberTuple2 = [ number , number ]
