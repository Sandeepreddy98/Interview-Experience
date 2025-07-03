function x() {
  for (var i = 1; i <= 10; i++) {
    function close(i){
        setTimeout(function () {
            console.log(i);
          }, i * 1000);
    }
    return close(i)
  }
}
x();

function ele() {
    const element = document.createElement('h1')
  const myDiv = document.getElementById('root')
  element.innerText= 'Hello World'
  myDiv.appendChild(element)
}

// {
//     path : '/user',
//     component :component
//     canActivate : []
// }

// names= [
//     {
//         namae : "sandeep",
//         age : 27,
//         add : ''
//     }
// ]

// *ngFor = "let name of names | async : "

