const path = require('path');
const preprocess = require('svelte-preprocess');

module.exports = {
    preprocess: preprocess({
        defaults: {
            script: 'typescript'
        },

        typescript: {
            tsconfigFile: path.resolve(__dirname, 'tsconfig.json')
        }
    })
};
