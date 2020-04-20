import  test from 'ava'


test( 'returns duration string of summed input duration strings'
    , t => {
        // given
        const input = '12:32 34:01 15:23 9:27 55:22 25:56'

        // when
        const actual = sumDurationStrings( input )

        // then
        const expected = '02:32:41'
        t.is( actual , expected ) } )


const sumDurationStrings =
    ( input ) => {
        const durationStrings = input.split( ' ' )
        const seconds = durationsStringsToSeconds( durationStrings )
        const durationString = secondsToDurationString( seconds )
        return durationString
    }

const durationsStringsToSeconds =
    ( durationStrings ) => {
        const seconds =
            durationStrings.reduce(
                ( seconds , durationString ) =>
                    seconds + durationsStringToSeconds( durationString )
                , 0 )
        return seconds
    }

const durationsStringToSeconds =
    ( durationString ) => {
        const [ minutesPart , secondsPart ] = durationString.split( ':' )
        const seconds = minutesPart * 60 + secondsPart
        return seconds
    }

const secondsToDurationString =
    ( seconds ) => {
        const secondsPart = seconds % 60
        const minutes = Math.floor( seconds / 60 )
        const minutesPart = minutes % 60
        const hoursPart = Math.floor( minutes / 60 )
        const duration = [ hoursPart , minutesPart , secondsPart ]
        const formattedDurationParts = duration.map( formatDurationPart )
        const durationString = formattedDurationParts.join( ':' )
        return durationString
    }

const formatDurationPart =
    ( durationPart ) => {
        const formattedDurationPart = String( durationPart ).padStart( 2 , '0' )
        return formattedDurationPart
    }
