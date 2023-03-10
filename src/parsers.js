const parse = (data, format) => {
	if (format === 'json') {
		return JSON.parse(data);
	}
	throw new Error(`${format} is not supported`);
};
export default parse;
