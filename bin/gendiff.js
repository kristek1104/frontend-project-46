#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import gendiff from '../src/index.js';
import process from 'node:process';

const program = new Command();

program
	.version('0.1.0')
	.description('Compares two configuration files and shows a difference.')
	.arguments('<filepath1> <filepath2>')
	.option('-f, --format <type>', 'output format', 'stylish')
	.action((file1, file2, options) => {
		console.log(gendiff(file1, file2, options.format))
	});

program.parse(process.argv);
