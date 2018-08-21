'use strict';

const _ = require('lodash');
const path = require('path');
const CONFIG = {};

// PATHS
CONFIG.root = path.resolve(__dirname);// absolute path to project directory
CONFIG.publicDir = 'public';
CONFIG.sourceDir = 'src';
CONFIG.docsDir = 'docs';
CONFIG.testDir = 'test';
CONFIG.distDir = 'dist';

// NOTE: Update rollup.config.js, too
CONFIG.styleSrcDir = `${CONFIG.sourceDir}/styles`;

// Component Explorer configuration
// Used directly for "site" rendering context
CONFIG.site = {
    title: 'HelixUI',
    language: 'en',
    baseHref: '/helix-ui/',
    // Moment.js format string
    dateFormat: 'YYYY-MM-DD',
    // Moment.js format string
    timeFormat: 'HH:mm:ss',
};

// Configuration for the LESS precompiler
CONFIG.less = {
    paths: [
        `${CONFIG.docsDir}/styles`,
        `${CONFIG.styleSrcDir}`
    ],
};

/* Define Exports */
module.exports = CONFIG;
