import { execute } from '../test';

function isMonotonic(nums: number[]): boolean {
  const n = nums.length;
  const last = n - 1;

  if (n <= 1) {
    return true;
  }

  let pointer = 0;
  let i = 1;

  if (nums[pointer] === nums[last]) {
    while (i != n) {
      if (nums[i] != nums[pointer]) {
        return false;
      }
      i++;
      pointer++;
    }
  }

  if (nums[pointer] < nums[last]) {
    while (i != n) {
      if (nums[pointer] > nums[i]) {
        return false;
      }
      i++;
      pointer++;
    }
  }

  if (nums[pointer] > nums[last]) {
    while (i != n) {
      if (nums[pointer] < nums[i]) {
        return false;
      }
      i++;
      pointer++;
    }
  }
  return true;
}

let testes = [
  [1, 2, 2, 3],
  [6, 5, 4, 4],
  [1, 3, 2],
];

execute(testes, isMonotonic);
