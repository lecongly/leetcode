// T=O(log n)
function SearchInRotatedSortedArray(nums: number[], target: number): boolean {
    const helper = (left: number, right: number): boolean => {
        if (left > right) return false
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return true;
        } else if (nums[mid] > target) {
            return helper(left, mid - 1) || (nums[mid] >= nums[right] ? helper(mid + 1, right) : false);
        } else if (nums[mid] < target) {
            return helper(mid + 1, right) || (nums[mid] <= nums[left] ? helper(left, mid - 1) : false);
        }

    }
    return helper(0, nums.length - 1)
};

console.log(SearchInRotatedSortedArray([1, 0, 1, 1, 1], 0))