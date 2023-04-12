import _ from 'lodash';

const compareData = (file1, file2) => {
  const keys1 = _.keys(file1);
  const keys2 = _.keys(file2);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  return sortedKeys.map((key) => {
    // add
    if (!_.has(file1, key)) {
      return {
        key,
        value: file2[key],
        type: 'added',
      };
    }

    // delete
    if (!_.has(file2, key)) {
      return {
        key,
        value: file1[key],
        type: 'deleted',
      };
    }

    // nested
    if (_.isPlainObject(file1[key]) && _.isPlainObject(file2[key])) {
      return {
        key,
        children: compareData(file1[key], file2[key]),
        type: 'nested',
      };
    }

    // change
    if (!_.isEqual(file1[key], file2[key])) {
      return {
        key,
        valueBefore: file1[key],
        valueAfter: file2[key],
        type: 'changed',
      };
    }
    // unchange
    return {
      key,
      value: file1[key],
      type: 'unchanged',
    };
  });
};

export default compareData;
