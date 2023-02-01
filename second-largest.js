function secondLargestNum(arr){
    var firstLargest= arr[0] ;
    var secondLargest = arr[0];
    for(var i = 0; i <= arr.length-1; i++){
    if(arr[i] > firstLargest){
    secondLargest = firstLargest;
    firstLargest = arr[i];
    }
    else if( arr[i] > secondLargest && arr[i] != firstLargest){
    secondLargest = arr[i];
    }
    }
    console.log(secondLargest);
    }
    var arr = [12, 35, 1, 10, 34, 1]
    secondLargestNum(arr);
    