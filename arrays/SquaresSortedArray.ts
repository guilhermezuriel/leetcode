import { execute } from '../test';

function sortedSquares(nums: number[]): number[] {
  let n = nums.length;
  const sortedSquareNums = new Array(n);

  let start = 0;
  let end = n - 1;

  let sortedIndex = n - 1;

  while (start <= end) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      sortedSquareNums[sortedIndex--] = nums[start] ** 2;
      start++;
    } else {
      sortedSquareNums[sortedIndex--] = nums[end] ** 2;
      end--;
    }
  }

  return sortedSquareNums;
}

let testes = [
  [-4, -1, 0, 3, 10],
  [-7, -3, 2, 3, 11],
];

execute(testes, sortedSquares);
