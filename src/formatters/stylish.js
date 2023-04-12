import _ from 'lodash';

const space = ' ';
const spacesCount = 4;

const getTwoOrSixSpaces = (depth) => {
  const factSpaces = depth * spacesCount;
  return space.repeat(factSpaces - 2);
};

const getFourOrEightSpaces = (depth) => {
  const factSpaces = depth * spacesCount;
  return space.repeat(factSpaces);
};

const stringify = (data, depth) => {
  if (!_.isPlainObject(data)) {
    return String(data);
  }
  const lines = Object.entries(data).map(
    ([key, value]) => `${getFourOrEightSpaces(depth + 1)}${key}: ${stringify(
      value,
      depth + 1,
    )}`,
  );
  return `{\n${lines.join('\n')}\n${getFourOrEightSpaces(depth)}}`;
};

const iter = (nodes, depth) => nodes.map((node) => {
  if (node.type === 'deleted') {
    return `${getTwoOrSixSpaces(depth)}- ${node.key}: ${stringify(
      node.value,
      depth,
    )}`;
  }
  if (node.type === 'added') {
    return `${getTwoOrSixSpaces(depth)}+ ${node.key}: ${stringify(
      node.value,
      depth,
    )}`;
  }
  if (node.type === 'nested') {
    const lines = iter(node.children, depth + 1);
    return `${getFourOrEightSpaces(depth)}${node.key}: {\n${lines.join('\n')}\n${getFourOrEightSpaces(depth)}}`;
  }
  if (node.type === 'changed') {
    return `${getTwoOrSixSpaces(depth)}- ${node.key}: ${stringify(
      node.valueBefore,
      depth,
    )}\n${getTwoOrSixSpaces(depth)}+ ${node.key}: ${stringify(
      node.valueAfter,
      depth,
    )}`;
  }
  if (node.type === 'unchanged') {
    return `${getFourOrEightSpaces(depth)}${node.key}: ${stringify(
      node.value,
      depth,
    )}`;
  }
  throw new Error(`Unknown type of node '${node.type}'.`);
});

const formatStylish = (tree) => {
  const result = iter(tree);
  return `{\n${result.join('\n')}\n}`;
};
export default formatStylish;
