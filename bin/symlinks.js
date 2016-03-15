#!/usr/bin/env node

'use strict';

var lib = require('../index.js'),
	path = require('path'),
	fs = require('fs'),
	currentDir = process.cwd(),
	symlinksConf = path.resolve(currentDir, 'symlinks.json');

fs.readFile(symlinksConf, 'utf8', function (error, config) {
	if (error) {
		config = {};
		console.error('Not found file: symlinks.json')
	} else {
		config = JSON.parse(config)
	}

	var symlinks = new lib();
	symlinks.init(config);
});