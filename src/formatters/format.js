import formatStylish from './stylish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

const format = (tree, formatName) => {
		switch (formatName) {
					case 'stylish':
							return formatStylish(tree);
						case 'plain':
							return formatPlain(tree);
						case 'json':
							return formatJson(tree);
						default:
							throw new Error(`The ${formatName} format is not supported.\nSupported formats: stylish, plain, json.`);
					}
};
export default format;
