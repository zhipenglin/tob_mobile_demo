const { getLoader } = require("react-app-rewired");

const createRewireRem=(loaderOptions={})=>{
    return function(config, env) {
        const cssRules=getLoader(config.module.rules,rule => String(rule.test) === String(/\.css$/));
        cssRules.use.push({
            loader:require.resolve("px2rem-loader"),
            options:loaderOptions
        });
        return config;
    };
};

const rewireRem=createRewireRem();

rewireRem.withLoaderOptions=createRewireRem;

module.exports=rewireRem;
