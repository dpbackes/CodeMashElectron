const chai = require( "chai" );
chai.should();
const electron = require( "electron" );
const app = electron.app;

describe( "renderer tests", () => {
    it( "there should be a button", () => {
        const button = document.getElementById( "clickme" );
        version.should.be.a( "string" );
        version.should.not.be.empty;
    } );
} );