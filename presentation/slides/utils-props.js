const heading = 'utils/props'

const code =
`import  { prop } from './object.js'


const $length : < S extends Lengthwise >( x : S ) => number =
    prop( 'length' )


export  { $length }


export interface Lengthwise {
    length : number
}`

const steps =
    [ ]

const utilsProps =
    { type : 'code'
    , props : { heading , code , steps } }


export  { utilsProps }
