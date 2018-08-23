'use strict';

const CONFIG = require('../_config');
const path = require('path');
const webpack = require('webpack');

/**
 * @param {String} srcPath - absolute path to source file
 * @param {String} destPath - path to generated output (relative to project root)
 */
function compileOne(srcPath, destPath) {
    let outputPath = path.resolve(CONFIG.root, path.dirname(destPath));
    let outputName = path.basename(destPath);

    console.log(`Compiling "${outputName}" to ${outputPath}`);

    let compiler = webpack({
        // mode must be 'none' or 'development' to retain import order
        mode: 'none',
        entry: srcPath,
        output: {
            path: outputPath,
            filename: outputName,
        },
        target: 'node',
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    use: 'svg-inline-loader',
                },
                {
                    test: /\.html$/,
                    use: 'raw-loader'
                },
                {
                    test: /\.less$/,
                    use: [
                        { loader: 'raw-loader' },
                        {
                            loader: 'less-loader',
                            options: {
                                paths: CONFIG.less.paths
                            }
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        'babel-loader',
                        'eslint-loader',
                    ]
                },
            ],
        },
    });

    compiler.run((err, stats) => {
        if (err) {
            console.log('ERROR: running running webpack');
            console.log(err.message);
        }

        console.log(stats.toString({
            chunks: false,  // Makes the build much quieter
            colors: true    // Shows colors in the console
        }))
    });
}//compileOne()

module.exports = {
    compileOne,
};
