var algorithms = ['Linear Search','Binary Search', 'Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort', 'Heap Sort', 'Bucket Sort', 'Radix Sort', 'Tim Sort', 'Shell Sort']
var besttime = ['O(1)', 'O(1)', 'O(n)', 'O(n^2)', 'O(n)', 'O(nlogn)', 'O(nlogn)', 'O(nlogn)', 'O(n+k)', 'O(nk)', 'O(n)', 'O(n)']
var avgtime = ['O(n)', 'O(logn)', 'O(n^2)', 'O(n^2)', 'O(n^2)', 'O(nlogn)', 'O(nlogn)', 'O(nlogn)', 'O(n+k)', 'O(nk)', 'O((nlogn)^2)']
var worsttime = ['O(n)', 'O(logn)', 'O(n^2)', 'O(n^2)', 'O(n^2)', 'O(nlogn)', 'O(n^2)', 'O(nlogn)', 'O(n^2)', 'O(nk)', 'O((nlogn)^2)']

document.getElementById("algo").addEventListener("click", newComplexity);

function newComplexity() {
    var random = Math.floor(Math.random() * (algorithms.length));
    document.getElementById('algorithm').innerText = algorithms[random];
    document.getElementById('best').innerHTML = besttime[random];
    document.getElementById('avg').innerHTML = avgtime[random];
    document.getElementById('worst').innerHTML = worsttime[random];
}

newComplexity()