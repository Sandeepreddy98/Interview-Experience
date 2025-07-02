const arr1 = [1,2,3]
// op - [1], [1, 2], [1, 2, 3], [2], [2, 3], [3]

// [1],[1,]

function findSubArrays(arr){
    let subArrays = []
    // let start = 0
    // let end = 0
    for(let i=0 ;i<arr.length;i++){
        // let subArray = []
        // for(let j = i;j<arr.length;j++){
        //    subArray.push(arr.slice(i,j))
        // }
        // subArrays.push(subArray)

    }
    return subArrays
}

// 1+2+3+n = (n*n+1)/2
// console.log(findSubArrays(arr1));

//REST - 


function memoryLeak(){
    let obj = {
        data : new Array(10000).fill("x")
    }

    setInterval(() => {
        console.log(obj.data);
    },2000)
}

console.log(memoryLeak());
