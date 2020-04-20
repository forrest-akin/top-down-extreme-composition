import  test from 'ava'
import  { sumDurationStrings } from './sumDurationStrings'

test( 'sums inputs'
    , t => {
        // given
        const input = '12:32 34:01 15:23 9:27 55:22 25:56'

        // when
        const actual = sumDurationStrings( input )

        // then
        const expected = '02:32:41'
        t.is( actual , expected ) } )

