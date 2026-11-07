// ? DOM: Document object model

// ! 1.  document.getElementById('id')

// let h1 = document.getElementById('dom')
// console.log(h1)

//? to read content

// innerHtml
//innerText
//textContent


// console.log(h1.innerHTML)
// console.log(h1.innerText)
// console.log(h1.textContent)

// let div = document.getElementById('div')
// console.log(div)
// console.log(div.innerText)
// console.log(div.innerHTML)
// console.log(div.textContent)

// !2. document.getElementsByClassName('class'):
//return a htmlCollection which is similar to array but not a orignal array and to access elements use index values

// let paras = document.getElementsByClassName('para')
// console.log(paras)
// console.log(paras[0].textContent)
// console.log(paras[1].textContent)

// !3. document.getElementsByTagName('tag'):
//return a htmlCollection which is similar to array but not a orignal array and to access elements use index values

// let paras = document.getElementsByTagName('p')
// console.log(paras)
// console.log(paras[0].textContent)
// console.log(paras[1].textContent)

//  !  4 document.querySelector('css selector')
// let h1 = document.querySelector('#dom')
// console.log(h1)

// let para = document.querySelector('.para')
// console.log(para)

// ? Modification

// let h1 = document.querySelector('#dom')
 // console.log(h1)
// h1.textContent="Document object model"

// let h2 = document.querySelector("#h2")
// h2.textContent='javaScript is a scripting language'

// let para = document.querySelectorAll('.para')
// console.log(para)
// para[2].textContent= 'We love java Script'

//? CSS styling : 

let h1 = document.querySelector('#dom')
h1.style.backgroundColor='blue'
h1.style.color='white'
h1.style.fontFamily='sans-serif'
h1.style.fontSize='50px'
console.log(h1)


























