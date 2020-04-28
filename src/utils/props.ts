import  { prop } from './object.js'


const _length : < S extends Lengthwise >( x : S ) => number =
    prop( 'length' )


interface Lengthwise {
    length : number
}


export  { _length
        
        , Lengthwise }
