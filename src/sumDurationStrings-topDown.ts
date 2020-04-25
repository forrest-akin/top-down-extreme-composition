const sumDurationStrings = // String -> DurationString
    ( input ) => {
        const durationStrings = parse( input )
        const seconds = durationsStringsToSeconds( durationStrings )
        const durationString = secondsToDurationString( seconds )
        return durationString
    }

const parse = // String -> DurationString[]
    ( input ) => {
        const durationStrings = input.split( ' ' )
        return durationStrings
    }

const durationsStringsToSeconds = // DurationString[] -> Seconds
    ( durationStrings ) => {
        const seconds =
            durationStrings.reduce(
                ( seconds , durationString ) =>
                    seconds + durationsStringToSeconds( durationString )
                , 0 )
        return seconds
    }

const durationsStringToSeconds = // DurationString -> Seconds
    ( durationString ) => {
        const [ minutesPart , secondsPart ] = durationStringToDuration( durationString )
        const seconds = minutesPart * 60 + secondsPart
        return seconds
    }

const durationStringToDuration = // DurationString -> Duration
    ( durationString ) => {
        const duration = durationString.split( ':' ).map( Number )
        return duration
    }

const secondsToDurationString = // Seconds -> DurationString
    ( seconds ) => {
        const duration = secondsToDuration( seconds )
        const durationString = durationToString( duration )
        return durationString
    }

const secondsToDuration = // Seconds -> Duration
    ( seconds ) => {
        const secondsPart = seconds % 60
        const minutes = Math.floor( seconds / 60 )
        const minutesPart = minutes % 60
        const hoursPart = Math.floor( minutes / 60 )
        const duration = [ hoursPart , minutesPart , secondsPart ]
        return duration
    }

const durationToString = // Duration -> DurationString
    ( duration ) => {
        const formattedDurationParts = duration.map( formatDurationPart )
        const durationString = formattedDurationParts.join( ':' )
        return durationString
    }

const formatDurationPart = // Number -> String
    ( durationPart ) => {
        const formattedDurationPart = String( durationPart ).padStart( 2 , '0' )
        return formattedDurationPart
    }


export  { sumDurationStrings }
