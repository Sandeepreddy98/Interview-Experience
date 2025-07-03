const fs = require('fs')
const path = require('path')

const recursiveDirectory = (dir) => {
    let results = []
    let list = fs.readdirSync(dir)
    for(let file of list){
        const  path = path.join(dir,file)
        if(fs.statSync(path).isDirectory()){
            recursiveDirectory(path,file)
        }else if (path.endsWith('.js')){
            results.push(path)
        }
    }
    return results
}

function countClass(files){
    const regex = '/class'
    const usageCount = {}
    const classDefinitions = new Set()
    for(let file of files){
        // const content = fs.readFileSync(file)
        // let match
        // while(match = regex.exec(content)!== null){
        //     const className = match[1]
        //     classDefinitions.add(className)
        //     usageCount[className] = usageCount[className] || 0
        // }
        const content = fs.readFileSync(file)
        const contentArray = content.split(" ")
        // for (let item of contentArray){
        //     if(item === 'Class'){

        //     }
        // }
        for(let i = 0;i < contentArray.length;i++){
            if(contentArray[i] === 'Class'){
                usageCount[contentArray[i]]
            }
        }
    }
}

const res = {
    "sandeep" : 2,
    "sudheer" : 1
}

