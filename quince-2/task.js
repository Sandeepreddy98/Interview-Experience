// Const tasks = {
//     “A”: 500,
//     “B”: 300,
//     “C”: 200,
//     “D”: 200 // [“A”, “”B]
//     “E”: 100 // [“C”, “D”]
//     }
    
    
//     Design a library such that you have to pass tasks in such a way that it should be execute according to given order.
    
    
//     // A————| - D—| 
//     // B————|          |————E
//     // C——————— |
    
    
//     const run(tasks, callback){
//     } 

const config = {
    taskA : {
        exec :  () => {
            return new Promise((resolve,reject) => {
                console.log("Task A started");
                const timer = setTimeout(() => {
                    console.log("Task A finished");
                    resolve(true)
                    clearTimeout(timer)
                },500)
            })
        }
    },
    taskB : {
        exec : () => {
            return new Promise((resolve,reject) => {
                console.log("Task B started");
                const timer = setTimeout(() => {
                    console.log("Task B finished");
                    resolve(true)
                    clearTimeout(timer)
                },300)
            })
        }
    },
    taskC : {
        exec : () => {
            return new Promise((resolve,reject) => {
                console.log("Task C started");
                const timer = setTimeout(() => {
                    console.log("Task C finished");
                    resolve(true)
                    clearTimeout(timer)
                },200)
            })
        }
    },
    taskD : {
        exec : () => {
            return new Promise((resolve,reject) => {
                console.log("Task D started");
                const timer = setTimeout(() => {
                    console.log("Task D finished");
                    resolve(true)
                    clearTimeout(timer)
                },200)
            })
        },
        dependencies : ["taskA","taskB"]
    },
    taskE : {
        exec : () => {
            return new Promise((resolve,reject) => {
                console.log("Task E resolved");
                const timer = setTimeout(() => {
                    console.log("Task E finished");
                    resolve(true);
                    clearTimeout(timer)
                }, 100);
            })
        },
        dependencies : ["taskC","taskD"]
    }
}

const run  = (tasks,callback) => {
    //Take tasks array and call back function
    const taskStatus = {};

    for(let task of tasks){
        if(task.dependencies){
            allset[ask.dependencies]
        }
    }

    


    callback()
}

run(["task1","task"], () => {

})
    