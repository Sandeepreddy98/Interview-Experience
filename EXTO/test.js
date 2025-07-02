//110001111001

function consecutive(string,val){
    let maxCount = 0;
    let currentCount =0;
    let maxstartIndex = -1;
    let currentStartIndex = -1

    for(let i = 0 ;i<string.length;i++){
        if(string[i] === val){
            if(currentCount === 0){
                currentStartIndex = i
            }
            currentCount++
        }else{
            if(currentCount > maxCount){
                maxCount = currentCount
                maxstartIndex = currentStartIndex
            }
            currentCount =0
        }
    }

    if(currentCount > maxCount){
        maxCount = currentCount;
        maxstartIndex = currentStartIndex
    }
    return {maxCount,maxstartIndex}
}

//110001111001

console.log(consecutive("11000111100111111","1"));

var,let ,const
