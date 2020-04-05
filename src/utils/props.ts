import  { prop } from './object.js'


const $length : < S extends Lengthwise >( x : S ) => number =
    prop( 'length' )


export  { $length }


interface Lengthwise {
    length : number
}
