(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d23019c"],{eb9b:function(n,r,e){"use strict";e.r(r);var t=e("7a23"),a=Object(t["g"])(" TypeScript basis "),u=Object(t["g"])(" 2021年7月23日 "),b=Object(t["h"])("div",{class:"xy"},[Object(t["h"])("div",{class:"content"},[Object(t["h"])("pre",null,'let a: number = 10; // 指定number类型\r\nfunction num(a: number, b: number): number {\r\n  //设置返回值为 number类型\r\n  return a + b;\r\n}\r\n// num(123,\'456\',789)//ts 报错\r\n\r\nlet b: "male" | "famle"; // 联合类型\r\nb = "male";\r\nb = "famle";\r\n\r\nlet d: any; //任意类型 相当于关闭了TS功能\r\n// 避免隐式any let d;\r\nd = 10;\r\nd = "10";\r\n\r\nlet e: unknown; // 表示未知类型值\r\ne = "10";\r\n\r\n// 类型断言 两种语法\r\nlet s: string;\r\ns = e as string;\r\ns = <string>e;\r\n\r\n//void 表示没有返回值的函数\r\nfunction fn(): void {\r\n  return;\r\n  // return undefined;\r\n}\r\n\r\n//never 表示空 ， 不能是任何值\r\nfunction fn2(): never {\r\n  throw new Error("报错");\r\n}\r\n\r\n// object 对象形式\r\nlet o: object;\r\no = {};\r\no = () => {};\r\n\r\n// 必须有一个string的name , 可选 number的age , 可选任意类型的值\r\nlet na: { name: string; age?: number; [propsName: string]: any };\r\nna = { name: "", age: 18, all: "all" };\r\n\r\n// 必须有两个数字类型且返回值为number\r\nlet f: (a: number, b: number, c?: any) => number;\r\nf = function(n1, n2, n3) {\r\n  return n1 + n2;\r\n};\r\n\r\n// 创建数组\r\nlet arr: string[];\r\nlet ar: Array<number>;\r\n\r\n// 创建元组 ，固定长度的数组\r\nlet ya: [string, number];\r\n\r\n//创建枚举\r\nenum Gender {\r\n  male, // 0\r\n  famle, // 1\r\n}\r\nlet i: { name: string; gender: Gender };\r\ni = {\r\n  name: "str",\r\n  // gender: Gender.male\r\n  gender: 1, // i.gender === Gender.famle // true\r\n};\r\n\r\n// & |\r\n// & 表示同时 ，\r\nlet q: { name: string } & { age: number };\r\nq = { name: "s", age: 18 };\r\n\r\n// 类型的别名\r\ntype myType = 1 | 2 | 3;\r\nlet t: myType;\r\n'),Object(t["h"])("h4",null,"面向对象")])],-1);function l(n,r,e,l,m,c){var i=Object(t["A"])("nav-bar");return Object(t["r"])(),Object(t["d"])("div",null,[Object(t["h"])(i,null,{default:Object(t["I"])((function(){return[a]})),time:Object(t["I"])((function(){return[u]})),_:1}),b])}var m=e("d968"),c={components:{navBar:m["a"]}};c.render=l;r["default"]=c}}]);
//# sourceMappingURL=chunk-2d23019c.c81e5a5e.js.map