const heading = 'utils/function'

const code =
`const apply =
    f => xs =>
        f( ...xs )

const applyTo : < A , B >( x : A , f : Unary< A , B > ) => B =
    ( x , f ) => f( x )

const collectArgs =
    ( ...xs ) => xs

const converge =
    ( g , ...fs ) => ( ...xs ) =>
        g( ...fs.map( f => f( ...xs ) ) )

const flip : < A , B , C >( f : Curried2< A , B , C > ) => Curried2< B , A , C > =
    f => x => y =>
        f( y )( x )

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
            , logWithLabel( \`\${label || f.name}::in\` )
            , apply( f ) )

const logOutput =
    ( f , label = '' ) =>
        pipe( f
            , logWithLabel( \`\${label || f.name}::out\` ) )

const logIO =
    ( f , label = '' ) =>
        logOutput( logInput( f , label ) , label )

const pipe =
    ( f , ...fs ) => ( ...xs ) =>
        fs.reduce( applyTo , f( ...xs ) )

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

const uncurry2 : < A , B , C >( f : Curried2< A , B , C > ) => Binary< A , B , C > =
    f => ( x , y ) =>
        f( x )( y )


export  { apply
        , applyTo
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
        , spread
        , tap
        , unary
        , uncurry2 }


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
}`

const steps =
    [  ]

const utilsFunction =
    { type : 'code'
    , props : { heading , code , steps } }


export  { utilsFunction }
