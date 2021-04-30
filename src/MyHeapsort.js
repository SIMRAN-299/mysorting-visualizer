
let animations=[];
function heapify(array,n,i) 
{ 
    let largest = i; 
    let l = 2 * i + 1; // left = 2*i + 1 
    let r = 2 * i + 2; // right = 2*i + 2 
  
    // If left child is larger than root 
    if (l < n && array[l] > array[largest]) 
        largest = l; 
  
    // If right child is larger than largest so far 
    if (r < n && array[r] > array[largest]) 
        largest = r; 
  
    // If largest is not root 
    if (largest != i) { 
        //swap(array[i], array[largest]); 
        const [h1,h2]=[array[i],array[largest]];
    
        array[i]=h2;
        array[largest]=h1;
        animations.push(["swap",[[i,h2],[largest,h1]]]);
  
        // Recursively heapify the affected sub-tree 
        heapify(array, n, largest); 
    } 
} 
  
// main function to do heap sort 
function myheapsort(array,n) 
{ 
    // Build heap (rearrange array) 
    for (let i = n / 2 - 1; i >= 0; i--) 
        heapify(array, n, i); 
  
    // One by one extract an element from heap 
    for (let i = n - 1; i >= 0; i--) { 
        // Move current root to end
        const [h1,h2]=[array[0],array[i]];
    
        array[i]=h1;
        array[0]=h2;
        animations.push(["swap",[[i,h1],[0,h2]]]); 
        //swap(array[0], array[i]); 
  
        // call max heapify on the reduced heap 
        heapify(array, i, 0); 
    } 
} 
function heapSort(array){
     animations=[];
      myheapsort(array,array.length)
      return animations;
}
export default heapSort;