/* eslint-disable no-console */
interface Test<T> {
  [propName: string]: T
}
const test: Test<number> = {
  a: 1,
  b: 2,
}
console.log('test: ', test.a)

// interface Person {
//   readonly id: number
//   name: string
//   age?: number
//   [propName: string]: any
// }

// const tom: Person = {
//   id: 89757,
//   name: 'Tom',
//   gender: 'male',
// }

// tom.id = 9527
interface SearchFunc {
  (source: string, subString: string): boolean
}

const mySearch: SearchFunc = function (source: string, subString: string) {
  return source.search(subString) !== -1
}
console.log(mySearch('a', 'b'))

let tom: [string, number]
// eslint-disable-next-line prefer-const
tom = ['Tom', 25]
tom.push('male')
console.log('tom: ', tom)
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
console.log(Days.Sun === 0) // true
console.log(Days.Mon === 1) // true
console.log(Days.Tue === 2) // true
console.log(Days.Sat === 6) // true

console.log(Days[0] === 'Sun') // true
console.log(Days[1] === 'Mon') // true
console.log(Days[2] === 'Tue') // true
console.log(Days[6] === 'Sat') // true
