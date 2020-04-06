import  test from 'ava'
import  { sumTimeStrings } from './sumTimeStrings'

test( 'sums inputs'
    , t => {
        // given
        const input = '12:32 34:01 15:23 9:27 55:22 25:56'

        // when
        const actual = sumTimeStrings( input )

        // then
        const expected = '02:32:41'
        t.is( actual , expected ) } )
