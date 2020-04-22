const fs = require('fs')
const path = require('path')


const walkDir =
    ( dir
    , prefix = '' ) =>
        fs.readdir( dir , inspectFiles( dir , prefix ) )

const inspectFiles = 
    ( dir , prefix ) => ( err , files ) =>
        err ? throwError( err )
        : files.forEach( file => inspectFile( dir , prefix , file ) )

const inspectFile =
    ( dir , prefix , file
    , filepath = path.join( dir , file ) ) =>
        fs.stat( filepath , handleFile( filepath , prefix , file ) )

const handleFile =
    ( filepath , prefix , file ) => ( err , stats ) =>
        err ? throwError( err )
        : stats.isDirectory() ? walkDir( filepath , prefix + file + '-' )
        : copyFile( filepath , prefix , file )

const copyFile =
    ( filepath , prefix , file ) =>
        fs.readFile( filepath , 'utf8' , writeFile( prefix , file ) )

const writeFile =
    ( prefix , file
    , [ exportName ] = file.split( '.' )
    , fileName = `presentation/code/${ prefix }${ file }` ) => ( err , fileText ) =>
        err ? throwError( err )
        : fs.writeFile( path.resolve( __dirname , fileName )
            , `export const ${ exportName } = \`${ fileText }\``
            , handleWrite( fileName ) )

const handleWrite =
    ( fileName ) => ( err , result ) =>
        err ? throwError( err )
        : console.log( `> ${ fileName }` )

const throwError =
    ( error ) => { throw error }


walkDir( path.resolve( __dirname , 'src' ) )
