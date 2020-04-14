const heading = 'utils/object'

const code =
`import  { Unary } from './function'


const prop : < T , Key extends keyof T >( k : Key ) => Unary< T , T[ Key ] > =
    key => object =>
        object[ key ]


export  { prop }`

const steps =
    [ ]

const utilsObject =
    { type : 'code'
    , props : { heading , code , steps } }


export  { utilsObject }
