import  { duration , imperative , compositional , test , topDown , utilsArray , utilsFunction
        , utilsLogic , utilsNumber , utilsObject , utilsProps , utilsString } from './code'
import  { aperlis1 , habelson1 , habelson2 , habelson3 , jguttag1 , skell1 } from './quotes'
import  { BulletSlide , CodeSlide , ImageSlide , QuoteSlide , SectionSlide , TitleSlide } from './utils'


const slides =
    [ SectionSlide( { section : `Hello, JS.LA!` } )
    , SectionSlide( { section : `I want to show you some code.` , fontSize : 90 } )
    , CodeSlide( compositional )
    , CodeSlide( duration )
    // , BulletSlide(
    //     { header : 'But...'
    //     , bullets :
    //         [ '"...so many functions to walk through!"'
    //         , '"...how do I even debug this?"'
    //         , '"...what about performance?!"'
    //         , `this ain't that!` ] } )
    , SectionSlide( { section : `I didn't always write code like this.` , fontSize : 90 } )
    , CodeSlide( imperative )
    , CodeSlide( topDown )
    , CodeSlide( compositional )
    , SectionSlide( { section : `!( Bad → Good )` } )
    , SectionSlide( { section : `( Values , Value ) → Values` , fontSize : 110 } )
    // , ImageSlide( { src : 'https://i.imgur.com/Ht8slfp.png' } )
    , ImageSlide( { src : 'https://i.imgur.com/NCRWGUV.png' } )
    , TitleSlide()
    , BulletSlide(
        { header : 'Date-Based Pricing'
        , headerSize : 100
        , bullets :
            [ 'Solo full-stack project'
            , 'New service to own pricing logic'
            , 'Implement date-based pricing' ] } )
    , BulletSlide(
        { header : 'Problems'
        , headerSize : 100
        , bullets :
            [ 'Vague requirements'
            , 'Ad-hoc pricing logic everywhere'
            , 'Crippling tech debt'
            , 'New kid on the block' ] } )
    , SectionSlide( { section : `Challenges` } )
    , BulletSlide(
        { header : 'Testing'
        , headerSize : 100
        , bullets :
            [ `...I didn't`
            , 'More mental processing, less velocity'
            , 'Many unexpected regressions'
            , `You win! I'll write some tests` ] } )
    , BulletSlide(
        { header : 'Tech Debt'
        , headerSize : 100
        , bullets :
            [ `Legacy code === untested code you didn't write`
            , 'Behemoth functions'
            , 'Side-effects everywhere'
            , `In-house framework magic` ] } )
    , BulletSlide(
        { header : 'Long Solo Project'
        , headerSize : 100
        , bullets :
            [ `Constantly discovering more landmines`
            , 'Several all-nighters'
            , 'Very lonely' ] } )
    , SectionSlide( { section : `So I went searching for answers.` , fontSize : 90 } )
    , BulletSlide(
        { header : 'Search to Understand'
        , headerSize : 100
        , bulletSize : 60
        , bullets :
            [ `How does code become like this?`
            , `It's values all the way down!` ] } )
    , SectionSlide( { section : `Understanding helped me be less resentful.` , fontSize : 70 } )
    , BulletSlide(
        { header : 'Search to Overcome'
        , headerSize : 100
        , bulletSize : 60
        , bullets :
            [ 'What can I do to prevent code from becoming like this?'
            , `Down the functional rabbit hole`
            , 'New heroes' ] } )
    , SectionSlide( { section : `Learning helped me keep my sanity.` , fontSize : 80 } )
    , BulletSlide(
        { header : 'Search to Belong'
        , headerSize : 100
        , bulletSize : 60
        , bullets :
            [ 'Getting involved in community'
            , `filter( isQualityValued )`
            , 'Hello, CJ!' ] } )
    , SectionSlide( { section : `I've found more of who I am and who I want to be.` , fontSize : 60 } )
    , BulletSlide(
        { header : 'In Closing'
        , headerSize : 100
        , bullets :
            [ `Sometimes work is the worst`
            , 'Use that energy to fuel your own explorations'
            , `It's dangerous to go alone!` ] } )
    , TitleSlide() ]


export  { slides }
