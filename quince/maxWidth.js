function maxWidth(words, maxwidth) {
    let startIndex = 0
    let count = 0;
    let line = []
    for(let i = 0;i < words.length;i++){
        count = count + words[i].length + 1
        console.log("count",count);
        if(count > maxwidth){
            console.log("Entered",i);
            console.log(startIndex,i);
            
            const lineString = (words.slice(startIndex,i)).join(' ')
            console.log(lineString,"lineString");
            line.push(lineString)
            startIndex = i
            count = 0

        }
    }
    return line
}

console.log(
  maxWidth(["This", "is", "an", "example", "of", "text", "justification."], 16)
);

console.log(["justification."].slice(0,1));


