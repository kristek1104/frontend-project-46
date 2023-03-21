install: #install
	npm ci
start: #start
	node bin/gendiff.js

lint:
	npx eslint 
	
test:
	node __tests__/diff.test.js
