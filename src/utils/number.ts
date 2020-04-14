import  { juxt , pipe
        , Binary , Curried2 , CurriedEndo2 , Endo2 } from './function'


const add : Endo2< number > =
    ( x , y ) =>
        x + y

const div : Endo2< number > =
    ( x , y ) =>
        x / y

const { floor } = Math

const intdiv : Endo2< number > =
    pipe( div
        , floor )

const lt : Curried2< number , number , boolean > =
    x => y =>
        y < x

const modulo : Endo2< number > =
    ( x , y ) =>
        x % y

const divmod : Binary< number , number , Tuple2< number > > =
    juxt( intdiv
        , modulo ) as Binary< number , number , Tuple2< number > >

const mult : CurriedEndo2< number > =
    x => y =>
        x * y


export  { add
        , div
        , divmod
        , floor
        , intdiv
        , lt
        , modulo
        , mult }


type Tuple2< A > = [ A , A ]
