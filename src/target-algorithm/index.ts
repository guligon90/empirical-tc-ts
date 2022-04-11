import { ECompare, defaultCompare } from "../common";

const merge = (left: number[], right: number[], compareFn: TCompareFunction): number[] => {
	let i = 0;
	let j = 0;

	const result = [];
	
	while (i < left.length && j < right.length) {
		result.push(
			compareFn(left[i], right[j]) === ECompare.LESS_THAN ? left[i++] : right[j++]
		);
	}

	return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

const mergeSort = (array: number[], compareFn: TCompareFunction = defaultCompare): number[] => {
	if (array.length > 1) {
		const { length } = array;
		const middle = Math.floor(length / 2);
		const left = mergeSort(array.slice(0, middle), compareFn);
		const right = mergeSort(array.slice(middle, length), compareFn);

		array = merge(left, right, compareFn);
	}

	return array;
}

export default mergeSort;
