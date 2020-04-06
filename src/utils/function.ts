const applyTo : < A , B >( x : A , f : Unary< A , B > ) => B =
    ( x , f ) => f( x )

const cardinal : < A , B , C , D >( f : Curried2< C , A , D > ) => Curried3< Unary< B , C > , A , B , D > =
    f => g => x => y =>
        f( g( y ) )( x )

const flip : < A , B , C >( f : Curried2< A , B , C > ) => Curried2< B , A , C > =
    f => x => y =>
        f( y )( x )

const identity : < A >( x : A ) => A =
    x => x

const juxt =
    ( ...fs ) => ( ...xs ) =>
        fs.map( spread( xs ) )

const pipe =
    ( f , ...fs ) => ( ...xs ) =>
        fs.reduce( applyTo , f( ...xs ) )

const spread =
    xs => f =>
        f( ...xs )

const tap : < A >( x : A ) => A =
    x =>
        ( console.log( x )
        , x )

const tapIn =
    ( f , label = f.name ) => ( ...args ) =>
        ( console.log( { [ `${label}::in` ] : args } )
        , f( ...args) )

const tapOut =
    ( f , label = f.name ) =>
        pipe( f
            , ( x : any ) =>
                ( console.log( { [ `${label}::out` ] : x } )
                , x ) )

const tapIO =
    ( f , label = f.name ) =>
        tapOut( tapIn( f , label ) , label )

const uncurry2 : < A , B , C >( f : Curried2< A , B , C > ) => Binary< A , B , C > =
    f => ( x , y ) =>
        f( x )( y )

const unfold : < A , B >( f : Predicate< B > , g : Endo< B > , h : Unary< A , B > ) => Unary< A , B > =
    ( f , g , h ) => x => {
        let y = h( x )
        while ( f( y ) )
            y = g( y )
        return y
    }


export  { applyTo
        , cardinal
        , flip
        , identity
        , juxt
        , pipe
        , spread
        , tap
        , tapIO
        , tapIn
        , tapOut
        , uncurry2
        , unfold }


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
