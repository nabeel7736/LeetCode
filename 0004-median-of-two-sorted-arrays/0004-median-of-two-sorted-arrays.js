/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merge = [...nums1,...nums2].sort((a,b)=>a-b)
    let mid =Math.floor(merge.length/2)
    if(merge.length%2==0){
        return (merge[mid]+merge[mid-1])/2
    }
    return merge[mid]
};