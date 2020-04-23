import  { duration , imperative , compositional , test , topDown
        , utilsArray , utilsFunction , utilsLogic , utilsNumber , utilsObject
        , utilsProps , utilsString } from './code'
import  { aperlis1 , habelson1 , habelson2 , habelson3 , jguttag1 , skell1 } from './quotes'


export const slides =
    [ { type : 'title' }
    ,   { type : 'bullet'
        , props :
            { header : 'Purpose'
            , bullets :
                [ 'Introduce Top-Down Design'
                , 'Introduce Compositional JS'
                , 'Encourage you to have fun and experiment!' ] } }
    ,   { type : 'bullet'
        , props :
            { header : 'Motivation'
            , bullets :
                [ 'Why high-level programming languages?'
                ] } }
    , habelson1
    ,   { type : 'bullet'
        , props :
            { header : 'Motivation'
            , startFrom : 1
            , bullets :
                [ 'Why high-level programming languages?'
                , 'What is abstraction?' ] } }
    , jguttag1
    ,   { type : 'bullet'
        , props :
            { header : 'Motivation'
            , startFrom : 2
            , bullets :
                [ 'Why high-level programming languages?'
                , 'What is abstraction?'
                , `What's the problem?` ] } }
    , skell1
    ,   { type : 'bullet'
        , props :
            { header : 'Motivation'
            , startFrom : 3
            , bullets :
                [ 'Why high-level programming languages?'
                , 'What is abstraction?'
                , `What's the problem?` ] } }
    ,   { type : 'section'
        , props : { section : 'sumDurationStrings' } }
    , test
    , imperative
    , topDown
    , compositional
    , duration
    , habelson3
    ,   { type : 'bullet'
        , props :
            { header : 'Wrap Up'
            , bullets :
                [ 'Experiment with Compositional Top-Down Programming'
                , 'Have fun!' ] } }
    , aperlis1 ]
