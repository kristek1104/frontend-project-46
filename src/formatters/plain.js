import _ from 'lodash';

const stringify = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  return data;
};

const iter = (nodes, path) => nodes.flatMap((node) => {
  const { key } = node;
  const newPath = [...path, key];

  switch (node.type) {
    case 'added':
      return `Property '${newPath.join('.')}' was added with value: ${stringify(node.value)}`;
    case 'deleted':
      return `Property '${newPath.join('.')}' was removed`;
    case 'changed':
      return `Property '${newPath.join('.')}' was updated. From ${stringify(node.valueBefore)} to ${stringify(node.valueAfter)}`;
    case 'nested':
      return iter(node.children, newPath);
    case 'unchanged':
      return [];
    default:
      throw new Error(`Unknown type: ${node.type}`);
  }
});
const formatPlain = (tree) => `${iter(tree, []).join('\n')}`;

export default formatPlain;
