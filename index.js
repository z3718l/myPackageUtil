(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.MyUtil = factory());
}(this, (function () { 'use strict';

    function strFun(ops) {
      // console.log(ops, '00000');
      return ops.toString();
    }

    //     console.log(options, '-------')
    //     const strArr = strFun(options);
    //     return strArr;
    // }
    // MyUtil.prototype.strArr = function (ops) {
    //     console.log(ops, '-------opts')
    //   return ops.toString();
    // };

    var MyUtil = {
      strFun: strFun
    };
    // let obj = require("mypackage_tro32");
    // console.log(obj);

    return MyUtil;

})));
//# sourceMappingURL=index.js.map
