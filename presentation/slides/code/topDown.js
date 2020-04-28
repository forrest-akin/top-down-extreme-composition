import  { sumDurationStringsTopDown as code } from '../../code/sumDurationStrings-topDown'


const heading = 'Top-Down'
const init = { start : 1 , end : 67 , size : 22 }
const steps =
    [
    //   { start : 7 , end : 7 , size : 30 }
    // , { start : 6 , end : 7 , size : 30 }
    // , { start : 5 , end : 7 , size : 30 }
    // , { start : 4 , end : 7 , size : 30 }
    // , { start : 1 , end : 7 , size : 30 }
    // , { start : 4 , end : 4 , size : 30 }
    // , { start : 10 , end : 10 , size : 30 }
    // , { start : 13 , end : 14 , size : 30 }
    // , { start : 12 , end : 14 , size : 30 }
    // , { start : 10 , end : 14 , size : 30 }
    // , { start : 4 , end : 4 , size : 30 }
    // , { start : 5 , end : 5 , size : 30 }
    // , { start : 16 , end : 16 , size : 29 }
    // , { start : 23 , end : 24 , size : 29 }
    // , { start : 18 , end : 19 , size : 29 }
    // , { start : 20 , end : 21 , size : 29 }
    // , { start : 16 , end : 24 , size : 29 }
    // , { start : 21 , end : 21 , size : 29 }
    // , { start : 26 , end : 26 , size : 24 }
    // , { start : 30 , end : 31 , size : 24 }
    // , { start : 29 , end : 31 , size : 24 }
    // , { start : 28 , end : 31 , size : 24 }
    // , { start : 26 , end : 31 , size : 24 }
    // , { start : 28 , end : 28 , size : 24 }
    // , { start : 33 , end : 33 , size : 32 }
    // , { start : 36 , end : 37 , size : 32 }
    // , { start : 35 , end : 37 , size : 32 }
    // , { start : 33 , end : 37 , size : 32 }
    // , { start : 28 , end : 28 , size : 24 }
    // , { start : 26 , end : 31 , size : 24 }
    // , { start : 21 , end : 21 , size : 29 }
    // , { start : 16 , end : 24 , size : 29 }
    // , { start : 5 , end : 5 , size : 30 }
    // , { start : 6 , end : 6 , size : 30 }
    // , { start : 39 , end : 39 , size : 32 }
    // , { start : 43 , end : 44 , size : 32 }
    // , { start : 42 , end : 44 , size : 32 }
    // , { start : 41 , end : 44 , size : 32 }
    // , { start : 39 , end : 44 , size : 32 }
    // , { start : 41 , end : 41 , size : 32 }
    // , { start : 46 , end : 46 , size : 31 }
    // , { start : 53 , end : 54 , size : 31 }
    // , { start : 52 , end : 54 , size : 31 }
    // , { start : 48 , end : 54 , size : 31 }
    // , { start : 46 , end : 54 , size : 31 }
    // , { start : 41 , end : 41 , size : 32 }
    // , { start : 42 , end : 42 , size : 32 }
    // , { start : 56 , end : 56 , size : 29 }
    // , { start : 60 , end : 61 , size : 29 }
    // , { start : 59 , end : 61 , size : 29 }
    // , { start : 58 , end : 61 , size : 29 }
    // , { start : 56 , end : 61 , size : 29 }
    // , { start : 58 , end : 58 , size : 29 }
    // , { start : 63 , end : 63 , size : 26 }
    // , { start : 66 , end : 67 , size : 26 }
    // , { start : 65 , end : 67 , size : 26 }
    // , { start : 63 , end : 67 , size : 26 }
    // , { start : 58 , end : 58 , size : 29 }
    // , { start : 56 , end : 61 , size : 29 }
    // , { start : 42 , end : 42 , size : 32 }
    // , { start : 39 , end : 44 , size : 32 }
    // , { start : 6 , end : 6 , size : 30 }
    // , { start : 1 , end : 7 , size : 30 }
    // , { start : 1 , end : 68 , size : 24 }
    ]

const topDown = { init , code , steps }


export  { topDown }
