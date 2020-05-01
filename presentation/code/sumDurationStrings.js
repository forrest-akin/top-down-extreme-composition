export const sumDurationStrings = `// '12:32 34:01 15:23 9:27 55:22 25:56' => '02:32:41'
const sumDurationStrings : Unary< string , DurationString > =
    pipe( split( ' ' )
        , durationStringsToSeconds
        , secondsToDurationString )
`