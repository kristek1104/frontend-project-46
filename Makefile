install:
	npm ci

publish:
	npm publish --dry-run

help:
	node bin/gendiff.js -h

lint:
	npx eslint 
	
test:
	npm test

run:
	gendiff '__fixtures__/file1.json' '__fixtures__/file2.json'
