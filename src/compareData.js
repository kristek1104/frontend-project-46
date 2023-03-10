import _ from 'lodash';

const compareData = (file1, file2) => {
	const keys1 = _.keys(file1);
	const keys2 = _.keys(file2);
	const sortedKeys = _.sortBy(_.union(keys1, keys2));

	const result = sortedKeys.map((key) => {
		
		//add
		if (!_.has(file1, key)) {
			 return {
				         key,
				         value: file2[key],
				         type: 'added',
			};
		}
		
		//delete
		if (!_.has(file2, key)) {
			return {
				        key,
				        value: file1[key],
				        type: 'deleted',
			};
		}

		//change
		if (_.has(file1, key) && _.has(file2, key)) {
			if (file1[key] !== file2[key]) {
				return {
					        key,
					        valueBefore: file1[key],
					        valueAfter: file2[key],
					        type: 'changed',
				};
			}
			//unchange
			return {
				      key,
				      value: file1[key],
				      type: 'unchanged'
			};
		}
	});

	return result;
};

export default compareData;
