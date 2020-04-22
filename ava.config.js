export default {
    files : [ '!presentation/**/*' ],
    typescript :
        { rewritePaths :
            { 'src/' : 'dist/' } } }
