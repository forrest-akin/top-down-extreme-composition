const eq : < A >( x : A ) => ( y : A ) => boolean =
    x => y =>
        x === y

const ifElse =
    ( f , g , h ) => ( ...xs ) =>
        f( ...xs ) ? g( ...xs )
        : h( ...xs )

const not : < A >( x : A ) => boolean =
    x => !x


export  { eq
        , ifElse
        , not }
