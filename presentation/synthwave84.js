/*
Name: Duotone Dark
Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
*/

    // code[class*="language-"],
    // pre[class*="language-"] {
    //     color: #f92aad;
    //     text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
    //     background: none;
    //     font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    //     font-size: 1em;
    //     text-align: left;
    //     white-space: pre;
    //     word-spacing: normal;
    //     word-break: normal;
    //     word-wrap: normal;
    //     line-height: 1.5;

    //     -moz-tab-size: 4;
    //     -o-tab-size: 4;
    //     tab-size: 4;

    //     -webkit-hyphens: none;
    //     -moz-hyphens: none;
    //     -ms-hyphens: none;
    //     hyphens: none;

    // }

    // /* Code blocks */
    // pre[class*="language-"] {
    //     padding: 1em;
    //     margin: .5em 0;
    //     overflow: auto;
    // }

    // :not(pre)>code[class*="language-"],
    // pre[class*="language-"] {
    //     background-color: transparent !important;
    //     background-image: linear-gradient(to bottom, #2a2139 75%, #34294f);
    // }

    // /* Inline code */
    // :not(pre)>code[class*="language-"] {
    //     padding: .1em;
    //     border-radius: .3em;
    //     white-space: normal;
    // }
const theme = {
    plain: {
        background: 'none',
        backgroundColor: 'transparent !important',
        backgroundImage: 'linear-gradient(to bottom, #2a2139 75%, #34294f)',
        color: '#f92aad',
        textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3',
    },

        // .token.comment,
        // .token.block-comment,
        // .token.prolog,
        // .token.doctype,
        // .token.cdata {
        //     color: #8e8e8e;
        // }
    styles:
        [   { types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata']
            , style: { color: "#8e8e8e" }
            }
        // .token.punctuation {
        //     color: #ccc;
        // }            
        ,   { types: ["punctuation"]
            , style: { color: "#ccc" }
            }
        // .token.tag,
        // .token.attr-name,
        // .token.namespace,
        // .token.number,
        // .token.unit,
        // .token.hexcode,
        // .token.deleted {
        //     color: #e2777a;
        // }
        ,   { types: ['tag', 'attr-name', 'namespace', 'number', 'unit', 'hexcode', 'deleted']
            , style: { color: "#e2777a" }
            }
        // .token.property,
        // .token.selector {
        //     color: #72f1b8;
        //     text-shadow: 0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475;
        // }
        ,   { types: ['property', 'selector']
            , style: { color: "#72f1b8", textShadow: '0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475' }
            }
        // .token.function-name {
        //     color: #6196cc;
        // }
        ,   { types: ["function-name"]
            , style: { color: "#6196cc" }
            }
        // .token.boolean,
        // .token.selector .token.id,
        // .token.function {
        //     color: #fdfdfd;
        //     text-shadow: 0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975;
        
        // }
        ,   { types: ['boolean', 'selector-id', 'function']
            , style: { color: "#fdfdfd", textShadow: '0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975' }
            }
        // .token.class-name {
        //     color: #fff5f6;
        //     text-shadow: 0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75;
        // }
        ,   { types: ['class-name', 'maybe-class-name']
            , style: { color: '#fff5f6', textShadow: '0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75' }
            }
        // .token.constant,
        // .token.symbol {
        //     color: #f92aad;
        //     text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
        // }
        ,   { types: ['constant', 'symbol']
            , style: { color: "#f92aad", textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3' }
            }
        // .token.important,
        // .token.atrule,
        // .token.keyword,
        // .token.selector .token.class,
        // .token.builtin {
        //     color: #f4eee4;
        //     text-shadow: 0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575;
        // }
        ,   { types: ['important', 'atrule', 'keyword', 'selector-class', 'builtin']
            , style: { color: "#f4eee4", textShadow: '0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575' }
            }
        // .token.string,
        // .token.char,
        // .token.attr-value,
        // .token.regex,
        // .token.variable {
        //     color: #f87c32;
        // }
        ,   { types: ['string', 'char', 'attr-value', 'regex', 'variable']
            , style: { color: "#f87c32" }
            }
        // .token.operator,
        // .token.entity,
        // .token.url {
        //     color: #67cdcc;
        // }            
        ,   { types: ["operator", "entity", 'url']
            , style: { color: "#67cdcc" }
            }
        // .token.important,
        // .token.bold {
        //     font-weight: bold;
        // }
        ,   { types: ["important", 'bold']
            , style: { fontWeight: "bold" }
            }
        // .token.italic {
        //     font-style: italic;
        // }
        ,   { types: ["italic"]
            , style: { fontStyle: "italic" }
            }
        // .token.entity {
        //     cursor: help;
        // }
        ,   { types: ["entity"]
            , style: { cursor: "help" }
            }
        // .token.inserted {
        //     color: green;
        // }
        ,   { types: ["inserted"]
            , style: { color: "green" }
            }
        ]
    }
  
export  { theme }
