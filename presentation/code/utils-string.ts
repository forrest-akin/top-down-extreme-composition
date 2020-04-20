export const utilsString = `import  { Binary , Curried2 , Endo } from './function'


const padLeft : Binary< number , string , Endo< string > > =
    ( maxLength , filler ) => x =>
        x.padStart( maxLength , filler )

const split : Curried2< string , string , string[] > =
    delimiter => x =>
        x.split( delimiter )


export  { padLeft
        , split }
`