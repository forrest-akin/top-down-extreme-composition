import  test from 'ava'
const { sumDurationStrings } = require( './sumDurationStrings-compositional' )


test( `given a string of space-delimited mm:ss durations
       returns a summed duration string`
    , t => {
        // given
        const input = '12:32 34:01 15:23 9:27 55:22 25:56'

        // when
        const actual = sumDurationStrings( input )

        // then
        const expected = '02:32:41'
        t.is( actual , expected ) } )
