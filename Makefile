install:
	npm ci

publish:
	npm publish --dry-run

help:
	node bin/gendiff.js -h

lint:
	npx eslint .

fix:
	npx eslint . --fix
	
test:
	npm test

diff1:
	gendiff '__fixtures__/file1.json' '__fixtures__/file2.json'

diff2:
	gendiff '__fixtures__/file1.yml' '__fixtures__/file2.yml'

plain1:
	gendiff -f 'plain' '__fixtures__/file1.json' '__fixtures__/file2.json'

plain2: 
	gendiff -f 'plain' '__fixtures__/file1.yml' '__fixtures__/file2.yml'

json1:
	gendiff -f 'json' '__fixtures__/file1.json' '__fixtures__/file2.json'

json2:
	gendiff -f 'json' '__fixtures__/file1.yml' '__fixtures__/file2.yml'

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test
