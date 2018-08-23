'use strict';

/*
 * Tasks in this file handle compiling distributable assets
 * from src/* to dist/*
 */

const CONFIG = require('../_config');
const path = require('path');
const globby = require('globby');
const { minify } = require('html-minifier');
//const CleanCSS = require('clean-css');
const LESS = require('less');
const { existsSync, ensureDirSync } = require('fs-extra');
const { readFile, writeFile } = require('./util');
const { compileOne } = require('./webpack');


// NOTE: not sure if we'll be needing this just yet.
async function buildTemplates () {
    let src = '';
    let dest = '';

    compileOne();


    /**
    let elementsDir = `${CONFIG.sourceDir}/helix-ui/elements`;
    let templatesDir = path.resolve(CONFIG.root, CONFIG.sourceDir, 'templates');

    let files = await globby('HX*Element.js', {
        cwd: elementsDir,
    });

    // This will get stringified to build/templates.json
    let templates = {};

    // assuming that files are uniquely named
    files.forEach(async (file) => {
        let _template = {
            markup: '',
            styles: '',
        };

        let element = path.basename(file, path.extname(file));
        let markupPath = `${templatesDir}/${element}.html`;
        let stylesPath = `${templatesDir}/${element}.less`;
            console.log('stylesPath', stylesPath);

        if (existsSync(markupPath)) {
            _template.markup = await readFile(markupPath, 'utf-8');
        }

        console.log('less fullPaths', CONFIG.less.fullPaths);
        if (existsSync(stylesPath)) {
            let rawStyles = await readFile(stylesPath, 'utf-8');
            try {
                let rendered = await LESS.render(rawStyles, {
                    paths: CONFIG.less.fullPaths,
                });
                _template.styles = rendered.css;
            } catch (e) {
                console.log(`error with ${stylesPath}`);
                console.log(e.message);
            }
        }

        templates[element] = _template;
    });

    // pretty print with 2-space indentation
    let content = JSON.stringify(templates, null, 2);

    let destPath = path.resolve(CONFIG.root, CONFIG.buildDir, 'templates.json');

    ensureDirSync(path.dirname(destPath));

    console.log(`Writing ${destPath}`);
    writeFile(destPath, content);

    // iterate over element files to generate build/templates.js
    // DEFINE "markup" prop:
    //  IF src/templates/{name}.html exists
    //      "markup" value is raw HTML string (compress and remove comments)
    //  ELSE
    //      "markup" value is ''
    //
    // DEFINE "styles" prop:
    //  IF src/templates/{name}.less exists
    //      "styles" value is compiled CSS string (compress and remove comments)
    //  ELSE
    //      "styles" value is ''
    */
}

module.exports = {
    buildTemplates,
}
