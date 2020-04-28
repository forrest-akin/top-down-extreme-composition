const source = 'Hal Abelson'

const [ habelson1 , habelson2 , habelson3 ] =
    [ 'Programs must be written for people to read, and only incidentally for machines to execute.'
    , `When some field is just getting started and you don't really understand it very well, it's very easy to confuse the essence of what you're doing with the tools that you use.`
    , 'This is the approach of statified design, the notion that a complex system should be structured as a sequence of levels that are described using a sequence of languages. The language used at each level of a stratified design has primitives, means of combination, and means of abstraction appropriate to that level of detail.'
    ].map( quote => ( { quote , source } ) )


export  { habelson1
        , habelson2
        , habelson3 }
