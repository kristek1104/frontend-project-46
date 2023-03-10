const twoSpaces = '  ';
const fourSpaces = '    ';
const iter = (diff) => diff.map((node) => {
	if (node.type === 'deleted') {
		return `${twoSpaces}- ${node.key}: ${node.value}`;
	}
	if (node.type === 'added') {
		return `${twoSpaces}+ ${node.key}: ${node.value}`;
	}
	if (node.type === 'changed') {
		return `${twoSpaces}- ${node.key}: ${node.valueBefore}\n${twoSpaces}+ ${node.key}: ${node.valueAfter}`;
	}
	if (node.type === 'unchanged') {
		return `${fourSpaces}${node.key}: ${node.value}`;
	}
	throw new Error(`Unknown type of node '${node.type}'.`);
});

const formatStylish = (tree) => {
	const result = iter(tree);
	return `{\n${result.join('\n')}\n}`;

};
export default formatStylish;
