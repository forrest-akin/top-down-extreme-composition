const fs = require('fs')
const path = require('path')


const walkDir =
    ( dir
    , prefix = '' ) =>
        fs.readdir( dir
            , ( err , files ) =>
                err ? throwError( err )
                : inspectFiles( dir , prefix ,files ) )

const inspectFiles = 
    ( dir , prefix , files ) =>
        files.forEach(
            file => inspectFile( dir , prefix , file ) )

const inspectFile =
    ( dir , prefix , file
    , filepath = path.join( dir , file ) ) =>
        fs.stat( filepath
            , ( err , stats ) =>
                err ? throwError( err )
                : handleFile( stats , filepath , prefix , file ) )

const handleFile =
    ( stats , filepath , prefix , file ) =>
        stats.isDirectory()
        ? walkDir( filepath , prefix + file + '-' )
        : copyFile( filepath , prefix , file )

const copyFile =
    ( filepath , prefix , file ) =>
        fs.readFile( filepath
            , 'utf8'
            , ( err , fileText ) =>
                err ? throwError( err )
                : writeFile( prefix , file , flieText ) )

const writeFile =
    ( prefix , file , fileText
    , [ exportName ] = file.split( '.' )
    , fileName = `presentation/code/${ prefix }${ file }` ) =>
        fs.writeFile( path.resolve( __dirname , fileName )
            , `export const ${ exportName } = \`${ fileText }\``
            , ( err , result ) =>
                err ? throwError( err )
                : console.log( `> ${ fileName }` ) )

const throwError =
    ( error ) => { throw error }


walkDir( path.resolve( __dirname , 'src' ) )
