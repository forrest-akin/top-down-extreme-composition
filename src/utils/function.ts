export const applyTo : < A , B >( x : A , f : ( x : A ) => B ) => B =
    ( x , f ) => f( x )

export const arity2 : < A , B , C >( f : ( x : A ) => ( y : B ) => C ) => ( x : A , y : B ) => C =
    f => ( x , y ) => f( x )( y )

export const flip =
    f => x => y =>
        f( y , x )

export const cardinal =
    f => g => x => y =>
        f( g( y ) )( x )

export const juxt =
    ( ...fs ) => ( ...xs ) =>
        fs.map( f => f( ...xs ) )

export const pipe =
    ( f , ...fs ) => ( ...xs ) =>
        fs.reduce( applyTo , f( ...xs ) )

export const tap : < A >( x : A ) => A =
    x =>
        ( console.log( x )
        , x )

export const tapIn =
    ( f , label = f.name ) => ( ...args ) =>
        ( console.log( { [ `${label}::in` ] : args } )
        , f( ...args) )

export const tapOut =
    ( f , label = f.name ) =>
        pipe( f
            , ( x : any ) =>
                ( console.log( { [ `${label}::out` ] : x } )
                , x ) )

export const tapIO =
    ( f , label = f.name ) =>
        tapOut( tapIn( f , label ) , label )

export const unfold : < A >( f : Predicate< A > ) => ( g : Endo< A > ) => ( x : A ) => A =
    f => g => x => {
        while ( f( x ) )
            x = g( x )
        return x
    }

interface Predicate< A > {
    ( x : A ) : boolean
}

export interface Folder< A , B > {
    ( y : B , x : A ) : B
}

export interface Mapper< A , B > {
    ( x : A ) : B
}

export interface Endo< A > {
    ( x : A ) : A
}
