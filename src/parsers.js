import { load } from 'js-yaml';

const parse = (data, format) => {
		if (format === 'json') {
					return JSON.parse(data);
				}
		if (format === 'yml') {
					return load(data);
				}
		if (format === 'yaml') {
					return load(data);
				}
		throw new Error(`${format} is not supported`);
};
export default parse;
