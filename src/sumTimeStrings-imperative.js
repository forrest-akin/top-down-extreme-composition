function sumTimeStrings ( input ) {
    const strings = input.split( ' ' )
    let sum = 0

    for ( const string of strings ) {
        const [ minutes , seconds ] = string.split( ':' )
        sum += Number( seconds ) + Number( minutes ) * 60
    }

    const seconds = sum % 60
    const minutes = Math.floor( sum / 60 )
    const hours = Math.floor( minutes / 60 )
    const timeParts = [ hours , minutes % 60 , seconds ]

    for ( let i = 0 ; i < timeParts.length ; i++ ) {
        const timePart = timeParts[ i ]
        timeParts[ i ] = String( timePart ).padStart( 2 , '0' )
    }
    
    return timeParts.join( ':' )
}


export  { sumTimeStrings }
