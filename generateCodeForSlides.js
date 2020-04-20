const fs = require('fs')
const path = require('path')


const walkDir =
    ( dir
    , prefix = '' ) =>
        fs.readdir( dir
            , ( err , files ) => {
                if ( err ) throw err
                files.forEach( file => inspectFile( dir , prefix , file ) ) } )

const inspectFile =
    ( dir , prefix , file
    , filepath = path.join( dir , file ) ) =>
        fs.stat( filepath
            , ( err , stats ) => {
                if ( err ) throw err
                handleFile( stats , filepath , prefix , file ) } )

const handleFile =
    ( stats , filepath , prefix , file ) =>
        stats.isDirectory()
        ? walkDir( filepath , prefix + file + '-' )
        : copyFile( filepath , prefix , file )

const copyFile =
    ( filepath , prefix , file ) =>
        fs.readFile( filepath
            , 'utf8'
            , ( err , fileText ) => {
                if ( err ) throw err
                writeFile( prefix , file , flieText ) } )

const writeFile =
    ( prefix , file , fileText
    , [ exportName ] = file.split( '.' )
    , fileName = `presentation/code/${ prefix }${ file }`) =>
        fs.writeFile( path.resolve( __dirname , fileName )
            , `export const ${ exportName } = \`${ fileText }\``
            , ( err , result ) => {
                if ( err ) throw err
                console.log( `> ${ fileName }` ) } )


walkDir( path.resolve( __dirname , 'src' ) )
