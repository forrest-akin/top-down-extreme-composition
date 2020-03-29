export const padLeft : ( n : number , y : string ) => ( x : string ) => string =
    ( maxLength , filler ) => x =>
        x.padStart( maxLength , filler )

export const split : ( d : string ) => ( x : string ) => string[] =
    delimiter => x =>
        x.split( delimiter )
