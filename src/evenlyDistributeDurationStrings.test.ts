import  test from 'ava'
import  { evenlyDistributeDurationStrings } from './evenlyDistributeDurationStrings'

test( 'evenly distributes sum of inputs'
    , t => {
        // given
        const input = '12:32 34:01 15:23 9:27 55:22 25:56'

        // when
        const actual = evenlyDistributeDurationStrings( input )

        // then
        const expected = '25:27 25:27 25:27 25:27 25:27 25:26'
        t.is( actual , expected ) } )
