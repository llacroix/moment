"use strict";

var moment = require("../../moment");

exports.format = {
    "format function exists" : function (test) {
        //test.expect(1);
        var b = moment(new Date(2009, 1, 14, 15, 25, 50, 125)),
            a = moment(new Date(2009, 1, 14, 15, 25, 50, 125)),
            dur = moment.duration(a, b);

        //test.equal(b.format('YY'), '09', 'YY ---> 09');
        test.equal(typeof (dur.format), "function");
        test.done();
    },

    "format a day": function (test) {
        var b = moment(new Date(2009, 1, 14, 15, 25, 50, 125)),
            a = moment(new Date(2009, 1, 14, 15, 25, 50, 125)),
            dur = moment.duration(a, b),
            result = dur.format();

        test.equal(result, "now");
        test.done();
    }
};
