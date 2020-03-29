export const prop : < T , Key extends keyof T>( k : Key ) => ( x : T ) => T[Key] =
    key => object =>
        object[ key ]
