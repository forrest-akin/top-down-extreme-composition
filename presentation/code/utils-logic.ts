export const utilsLogic = `import  { Unary } from './function'


const eq : < A >( x : A ) => Unary< A , boolean > =
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
`