export const sumDurationStringsImperative = `export function sumDurationStrings ( input ) {
    const durationStrings = input.split( ' ' );
    let sum = 0;

    for ( let i = 0 ; i < durationStrings.length ; i++ ) {
        const durationString = durationStrings[ i ];
        const [ minutes , seconds ] = durationString.split( ':' );
        sum += Number( seconds ) + Number( minutes ) * 60;
    }

    const secondsPart = sum % 60;
    const minutes = Math.floor( sum / 60 );
    const minutesPart = minutes % 60;
    const hoursPart = Math.floor(minutes / 60);
    const duration = [ hoursPart , minutesPart , secondsPart ];
    const formattedDurationParts = [];

    for ( let i = 0 ; i < duration.length ; i++ ) {
        const durationPart = duration[ i ];
        const formattedDurationPart = String( durationPart ).padStart( 2 , '0' );
        formattedDurationParts.push( formattedDurationPart );
    }

    return formattedDurationParts.join( ':' );
}
`