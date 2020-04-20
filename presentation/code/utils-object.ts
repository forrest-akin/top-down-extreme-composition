export const utilsObject = `import  { Unary } from './function'


const prop : < T , Key extends keyof T >( k : Key ) => Unary< T , T[ Key ] > =
    key => object =>
        object[ key ]


export  { prop }
`