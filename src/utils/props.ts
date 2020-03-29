import { prop } from './object.js'


export const $length : < A >( x : { length : A } ) => A =
    prop( 'length' )
