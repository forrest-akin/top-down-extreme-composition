const always =
    x => () => x

const apply =
    f => xs =>
        f( ...xs )

const applyTo =
    x => f =>
        f( x )

const applyTo2 : < A , B >( x : A , f : Unary< A , B > ) => B =
    ( x , f ) =>
        f( x )

const binary : < A , B , C >( f : Curried2< A , B , C > ) => Binary< A , B , C > =
    f => ( x , y ) =>
        f( x )( y )

const collectArgs =
    ( ...xs ) => xs

const converge =
    ( f , ...fs ) =>
        pipe( juxt( ...fs )
            , apply( f ) )

const flip : < A , B , C >( f : Binary< A , B , C > , x : B ) => Unary< A , C > =
    ( f , x ) => y =>
        f( y , x )

const identity : < A >( x : A ) => A =
    x => x

const juxt =
    ( ...fs ) => ( ...xs ) =>
        fs.map( spread( xs ) )

const logWithLabel =
    label =>
        tap( x => console.log( { [ label ] : x } ) )

const logInput =
    ( f , label = '' ) =>
        pipe( collectArgs
            , logWithLabel( `${ label || f.name }::in` )
            , apply( f ) )

const logOutput =
    ( f , label = '' ) =>
        pipe( f
            , logWithLabel( `${ label || f.name }::out` ) )

const logIO =
    ( f , label = '' ) =>
        logOutput( logInput( f , label ) , label )

const pipe =
    ( f , ...fs ) => ( ...xs ) =>
        fs.reduce( applyTo2 , f( ...xs ) )

const second =
    ( _ , y ) => y

const spread =
    xs => f =>
        f( ...xs )

const tap =
    f => x =>
        ( f( x )
        , x )

const unary =
    f => x =>
        f( x )


export  { always
        , apply
        , applyTo
        , binary
        , collectArgs
        , converge
        , flip
        , identity
        , juxt
        , logInput
        , logIO
        , logOutput
        , logWithLabel
        , pipe
        , second
        , spread
        , tap
        , unary }


export interface Predicate< A > {
    ( x : A ) : boolean
}

export interface Folder< A , B > {
    ( y : A , x : B ) : A
}

export interface Unary< A , B > {
    ( x : A ) : B
}

export interface Binary< A , B , C > {
    ( x : A , y : B ) : C
}

export interface Ternary< A , B , C , D > {
    ( x : A , y : B , z : C ) : D
}

export interface Curried2< A , B , C > {
    ( x : A ) : Unary< B , C >
}

export interface Curried3< A , B , C , D > {
    ( x : A ) : Curried2< B , C , D >
}

export interface Endo< A > {
    ( x : A ) : A
}

export interface Endo2< A > {
    ( x : A , y : A ) : A
}

export interface CurriedEndo2< A > {
    ( x : A ): Endo< A >
}
