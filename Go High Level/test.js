const timer = () => {
    // Write a function timer that returns true after 5 seconds.
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("true")
        }, 5000)
        
    })
    }
    
    const main = async () => {
    // Calls timer accepts the value returned by timer , 
    // stores it in a variable data and do a console.log(data) 
    const data = await timer()
    console.log(data);
    
    console.log("1")
    }
    
    main()

//     console.log('1')
// setTimeout(() => {
//   console.log('2')
// })
// console.log('3')

