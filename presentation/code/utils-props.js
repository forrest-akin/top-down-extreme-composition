export const utilsProps = `import  { prop } from './object.js'


const _length : < S extends Lengthwise >( x : S ) => number =
    prop( 'length' )


export  { _length }


export interface Lengthwise {
    length : number
}
`