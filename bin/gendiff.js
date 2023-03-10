#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import genDiff from '../src/index.js';

const program = new Command();

program
	.version('0.1.0')
	.description('Compares two configuration files and shows a difference.')
	.argument('<filepath1>')
	.argument('<filepath2>')
	.option('-f, --format <type>', 'output format')
	.action((file1, file2, options) => {
		console.log(genDiff(file1, file2, options.format))
	});

program.parse(process.argv);
