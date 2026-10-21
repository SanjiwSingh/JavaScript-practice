// ? Strings

// let fname = 'Pawan'
// let lname = "Kalyan"
// let surname = `Konidela`

// console.log(typeof fname)
// console.log(typeof lname)
// console.log(typeof surname)
// console.log("My name is "+fname+" "+lname+" "+surname)
// console.log(`My name is ${fname} ${lname} ${surname}`) // string interpolation

// let str = 'javascript'
// let res = str.toUpperCase()
// console.log(res)
// console.log(res.toLowerCase())
// console.log(str)

// let str='javascript'
// let res=str.toUpperCase()
// console.log(res)
// console.log(res.toLowerCase)
// console.log(str)

// let str2='    javascript     '
// console.log(str2.trimStart())
// console.log(str2.trimEnd())
// console.log(str2.trim())
// console.log(str2)

// ? replace("search string","new string")
// let str3='javascript'
// console.log(str3.replace('j',"J"))
// console.log(str3.replace('java',"Live"))
// console.log(str3.replace('Java',"bava")) // no change
// console.log(str3.replace('a',"i"))

// ? replaceAll("search string","new string")
// let str4='javascript'
// console.log(str4.replace('j',"J"))
// console.log(str4.replace('java',"Live"))
// console.log(str4.replace('Java',"bava")) // no change
// console.log(str4.replaceAll('a',"i"))
// console.log(str4)

// console.log(str4.replaceAll(" ",""))
// console.log(str4)

// ? slice(SI,EI)
// let str5='javascript'
// console.log(str5.slice(4))
// console.log(str5.slice(0,4))
// console.log(str5.slice(6,9))
// console.log(str5.slice(4,0))// empty
// console.log(str5.slice(-6,-1))
// console.log(str5.slice(-1,-6))// empty 

// ? concat():
// console.log("java".concat("script"))
// console.log("java".concat("script"," is a ","scripting language"))

// ? charAt(index):
// let str6="lalan yadav"
// console.log(str6.charAt(4))
// console.log(str6.charAt(6))
// console.log(str6.charAt(26))

//? indexOf():
// console.log(str6.indexOf('v'))
// console.log(str6.indexOf('d'))
// console.log(str6.indexOf('l'))
// console.log(str6.indexOf('s'))

//? lastIndexOf():
// console.log(str6.lastIndexOf('v'))
// console.log(str6.lastIndexOf('d'))
// console.log(str6.lastIndexOf('l'))
// console.log(str6.lastIndexOf('a'))
// console.log(str6.lastIndexOf('b'))

//? index of 3rd occurence of 'a'
// let n=3
// let index=-1
// for (let i= 1; i <= n; i++) { 
//    index=str6.indexOf('a',index + 1)
//    if(index===-1) break
// }
// console.log(index)

// ? includes()
// let str7="lalan yadav"
// console.log(str7.includes('a'))
// console.log(str7.includes('c'))
// console.log(str7.includes('lala'))
// console.log(str7.includes('Lala'))

// ? split("separator"):
let str8="lalan yadav"
// console.log(str8.split())
// console.log(str8.split(""))
// console.log(str8.split(" "))
// console.log(str8.split("a")) 

// ? startsWith("string")
// console.log(str8.startsWith('l'))
// console.log(str8.startsWith('lala'))
// console.log(str8.startsWith('yad'))

// ? endsWith("string")
// console.log(str8.endsWith('l'))
// console.log(str8.endsWith('v'))
// console.log(str8.endsWith('yadav'))

// ? repeat(number)
// console.log(str8.repeat(3))
// console.log(str8.repeat(-3)) // error

// console.log('javascript'.length)
// console.log('javascript'.slice())

// ? toString()
let a=10
console.log(a)
console.log(typeof a)
let c=a.toString()
console.log( typeof c)
