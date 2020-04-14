const heading = 'sumTimeStrings (imperative)'

const code =
`function sumTimeStrings ( input ) {
    const timeStrings = input.split( ' ' );
    let sum = 0;

    for ( let i = 0 ; i < timeStrings.length ; i++ ) {
        const timeString = timeStrings[ i ];
        const [ minutes , seconds ] = timeString.split( ':' );
        sum += Number( seconds ) + Number( minutes ) * 60;
    }

    const minutes = Math.floor( sum / 60 );
    const timeParts = [ Math.floor( minutes / 60 ) , minutes % 60 , sum % 60 ];
    const timeStringParts = [];

    for ( let i = 0 ; i < timeParts.length ; i++ ) {
        const timePart = timeParts[ i ];
        const formattedTimePart = String( timePart ).padStart( 2 , '0' );
        timeStringParts.push( formattedTimePart );
    }

    return timeStringParts.join( ':' );
}


export  { sumTimeStrings }`

const steps =
    [ ]

const imperative =
    { type : 'code'
    , props : { heading , code , steps } }


export  { imperative }
