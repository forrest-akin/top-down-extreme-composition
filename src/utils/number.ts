import { juxt } from './function'


export const add : ( x : number ) => ( y : number ) => number =
    x => y => x + y

export const div : ( x : number , y : number ) => number =
    ( x , y ) => x / y

export const { floor } = Math

export const intdiv : ( x : number , y : number ) => number =
    ( x , y ) =>
        floor( div( x , y ) )

export const lt : ( x : number ) => ( y : number ) => boolean =
    x => y => y < x

export const modulo : ( x : number , y : number ) => number =
    ( x , y ) => x % y

export const divmod : ( x : number , y : number ) => number[] =
    juxt( [ intdiv , modulo ] )

export const mult : ( x : number ) => ( y : number ) => number =
    x => y => x * y
