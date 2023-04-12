
import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);
const readFixture = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8').trim();

const expectedResult1 = readFixture('fileOutput_.txt');
const expectedResult2 = readFixture('fileOutput_plain.txt');
const expectedResult3 = readFixture('fileOutput_json.txt');

test('JSON', () => {
		const file1 = getFixturePath('file1.json');
		const file2 = getFixturePath('file2.json');

		expect(gendiff(file1, file2)).toEqual(expectedResult1);
		expect(gendiff(file1, file2, 'stylish')).toEqual(expectedResult1);
		expect(gendiff(file1, file2, 'plain')).toEqual(expectedResult2);
		expect(gendiff(file1, file2, 'json')).toEqual(expectedResult3);
});
test('YML', () => {
		const file1 = getFixturePath('file1.yml');
		const file2 = getFixturePath('file2.yml');

		expect(gendiff(file1, file2)).toEqual(expectedResult1);
		expect(gendiff(file1, file2, 'stylish')).toEqual(expectedResult1);
		expect(gendiff(file1, file2, 'plain')).toEqual(expectedResult2);
		expect(gendiff(file1, file2, 'json')).toEqual(expectedResult3);
});
