let arr=[1,2,3,4,3,7,2,9,2,900,1];
let max=arr.reduce( (max, el) => {
    if ( max < el){
        return el;
    }else {
        return max;
    }
});

console.log(max);