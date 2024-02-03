const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

//Serialized URL - both of these are the same
console.log(myUrl.href)
console.log(myUrl.toString())

//Host (root domain)
console.log(myUrl.host)

//Hostname (doesn't include the port)
console.log(myUrl.hostname)

//Pathname - gives the file
console.log(myUrl.pathname)

//Serialized query
console.log(myUrl.search)

//Params Object
console.log(myUrl.searchParams)

//Add params
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
