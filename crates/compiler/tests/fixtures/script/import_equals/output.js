//index.js:
 var entry = function() {
    var __farm_global_this__ = {
        __FARM_TARGET_ENV__: "browser"
    };
    (function(modules, entryModule) {
        var cache = {};
        function require(id) {
            if (cache[id]) return cache[id].exports;
            var module = {
                id: id,
                exports: {}
            };
            modules[id](module, module.exports, require);
            cache[id] = module;
            return module.exports;
        }
        require(entryModule);
    })({
        "d2214aaa": function(module, exports, farmRequire, dynamicRequire) {
            "use strict";
            console.log("runtime/index.js");
            __farm_global_this__.__farm_module_system__.setPlugins([]);
        }
    }, "d2214aaa");
    (function(modules) {
        for(var key in modules){
            __farm_global_this__.__farm_module_system__.register(key, modules[key]);
        }
    })({
        "363fc137": function(module, exports, farmRequire, dynamicRequire) {
            console.log("utils.js");
        },
        "b5d64806": function(module, exports, farmRequire, dynamicRequire) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            const fs = farmRequire("e4b1dea3");
            const utils = farmRequire("363fc137");
            console.log(fs, utils);
        }
    });
    var farmModuleSystem = __farm_global_this__.__farm_module_system__;
    farmModuleSystem.bootstrap();
    return farmModuleSystem.require("b5d64806");
}();


//484f1c65.js:
 (function(modules) {
    for(var key in modules){
        __farm_global_this__.__farm_module_system__.register(key, modules[key]);
    }
})({
    "e4b1dea3": function(module, exports, farmRequire, dynamicRequire) {
        console.log("fs-extra");
    }
});
