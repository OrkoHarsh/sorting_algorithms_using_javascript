function newsort(arr, left, right){    

for(var i= left; i < right; ++i){
    var min = i;
    for (var j = i; j < right; ++j){
        if (arr[min] > arr[j]){
        min = j;
        }
    }

var temp = arr[min];
arr[min] = arr[i];
arr[i] = temp;  

}
return arr;
