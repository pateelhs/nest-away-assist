"use strict";

const chai = require("chai"),
    expect = chai.expect,
    sinon = require("sinon");

chai.config.includeStack = true;

const lambda = require("../index");

describe("index.js", function() {

    let callback;

    beforeEach(function() {
        callback = sinon.spy();
    });

    it("should return helloworld JSON when called", function() {
        let expected = {
            "result": "helloworld"
        };

        lambda.handler(null, null, callback);

        expect(callback.calledWith(expected)).to.be.true;
    });
});