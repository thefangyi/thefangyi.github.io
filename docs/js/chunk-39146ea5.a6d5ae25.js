(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39146ea5"],{1906:function(t,a,n){"use strict";var d=n("7a23"),r={class:"right_nav"},e=Object(d["h"])("h1",null,[Object(d["h"])("a",null,[Object(d["h"])("i",{id:"top",class:"bx bx-arrow-to-top"})])],-1);function l(t,a,n,l,o,i){return Object(d["r"])(),Object(d["d"])("div",null,[Object(d["h"])("div",r,[Object(d["z"])(t.$slots,"default")]),o.top?(Object(d["r"])(),Object(d["d"])("div",{key:0,class:"icon",onClick:a[1]||(a[1]=function(){return i.goTop&&i.goTop.apply(i,arguments)})},[e])):Object(d["e"])("",!0)])}var o=n("2f14"),i={data:function(){return{height:0,scrollTop:0,top:!1}},methods:{watchScroll:function(){this.scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,this.scrollTop>500?this.top=!0:this.top=!1},goTop:function(){this.scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,this.scrollTop>1?(window.requestAnimationFrame(this.goTop),scrollTo(0,Math.floor(.85*this.scrollTop))):scrollTo(0,0),document.getElementById("top").className="bx bx-arrow-to-top bx-fade-up"}},mounted:function(){window.addEventListener("scroll",Object(o["a"])(this.watchScroll,500))},destroyed:function(){window.removeEventListener("scroll",this.watchScroll)}};n("416d");i.render=l;a["a"]=i},"416d":function(t,a,n){"use strict";n("d175")},d175:function(t,a,n){},f7e3:function(t,a,n){"use strict";n.r(a);var d=n("7a23"),r=Object(d["K"])("data-v-7f53d254");Object(d["u"])("data-v-7f53d254");var e=Object(d["g"])(" Vue Basis "),l=Object(d["g"])(" 2021年8月14日14:31:04 "),o={class:"xy"},i={class:"content"},s=Object(d["h"])("h2",null,"指令",-1),v=Object(d["f"])("<ol data-v-7f53d254><li data-v-7f53d254>v-text : v-text=&quot;msg&quot; == { {msg} }</li><li data-v-7f53d254>v-html : 将value转化为 HTML 插入</li><li data-v-7f53d254>v-show : 切换 CSS·display</li><li data-v-7f53d254>v-if : 根据 value 的真假值来切换</li><li data-v-7f53d254>v-else : 为 v-if / else-if 添加 else 模块</li><li data-v-7f53d254>v-else-if : v-if 的 else if 模块(可链式调用)</li><li data-v-7f53d254>v-for : 遍历value</li><li data-v-7f53d254>v-on[@] : 绑定事件监听器 <ul data-v-7f53d254> 修饰符 <li data-v-7f53d254>.stop : 调用 event.stopPropagation()</li><li data-v-7f53d254>.prevent : 调用 event.preventDefault()</li><li data-v-7f53d254>.capture : 添加事件侦听器时使用capture 模式</li><li data-v-7f53d254>.self : 只当事件是从侦听器绑定的元素本身触发时才触发回调</li><li data-v-7f53d254>.{keyAlias} : 仅当事件是从特定键触发时才触发回调</li><li data-v-7f53d254>.once ：只触发一次回调</li><li data-v-7f53d254>.left : 只当点击鼠标左键时触发</li><li data-v-7f53d254>.right : 只当点击鼠标右键时触发</li><li data-v-7f53d254>.middle : 只当点击鼠标中键时触发</li><li data-v-7f53d254>.passive : { passive : true } 模式添加侦听器</li></ul></li><li data-v-7f53d254>v-bind[:] : 动态绑定</li><li data-v-7f53d254>v-model : 双向绑定</li><li data-v-7f53d254>v-slot[#] : 插槽</li><li data-v-7f53d254>v-pre : 显示原始标签</li><li data-v-7f53d254>v-cloak : 隐藏未编译的标签 直到组件准备完毕</li><li data-v-7f53d254>v-once : 只渲染组件一次</li><li data-v-7f53d254>v-is : 修改HTML解析规则的限制,使某些标签能够在原本不能渲染的标签内渲染</li></ol><hr data-v-7f53d254><h2 data-v-7f53d254>Vue 关键词</h2><h4 data-v-7f53d254>props</h4><p data-v-7f53d254>可以是数组或对象，接收来自<span data-v-7f53d254>父组件</span>的数据</p><ul data-v-7f53d254> 基于<span data-v-7f53d254>对象</span>的情况 <li data-v-7f53d254>type(String Number ...) : 用于检查传入值是否匹配</li><li data-v-7f53d254>default(any) : 指定一个默认值，当定义但未传入该值，使用默认值</li><li data-v-7f53d254>required(Boolean) : 设定该值是否必须传入</li><li data-v-7f53d254>validator(function) : 自定义验证函数，验证失败则返回 false ,控制台警告</li></ul><hr data-v-7f53d254><h4 data-v-7f53d254>computed 计算属性</h4><p data-v-7f53d254>计算属性的结果会被缓存</p><hr data-v-7f53d254><h4 data-v-7f53d254>methods 方法</h4><hr data-v-7f53d254><h4 data-v-7f53d254>watch 侦听</h4><p data-v-7f53d254>侦听组件实例上的响应式 Property 或函数计算结果的变化</p><hr data-v-7f53d254><h4 data-v-7f53d254>emits</h4><hr data-v-7f53d254><h2 data-v-7f53d254>组件之间的通信</h2><h4 data-v-7f53d254>数据 父传子 @</h4><pre data-v-7f53d254>in parent\r\n    &lt;son&gt; :str=&#39;s&#39; :a=&#39;a&#39;&gt;&lt;/son&gt;\r\n    data() {\r\n        return {\r\n            s : &#39;str&#39;\r\n            a : [&#39;a&#39; , &#39;r&#39;]\r\n        }\r\n    }\r\n\r\n\r\nin son \r\n    props: {\r\n        str: {\r\n            type: String, // 类型\r\n            required: true, // 是否必须传入\r\n            default: &#39;string&#39;, // 默认值\r\n            validator: (value)=&gt; {\r\n                return [&#39;s&#39; , &#39;str&#39;].indexOf(value) !== -1\r\n            } // 传入的值必须匹配 数组内的值\r\n        },\r\n        a: {\r\n            type: Array;\r\n        }\r\n    }</pre><hr data-v-7f53d254><h4 data-v-7f53d254>数据 子传父 $emit</h4><pre data-v-7f53d254>in son \r\n    data() {\r\n        return {\r\n            num : 10\r\n        }\r\n    },\r\n    methods: {\r\n        outPar(){\r\n            this.$emit(&#39;par&#39; , this.num)\r\n        }\r\n    },\r\n    &lt;button @click=&#39;outPar&#39;&gt;&lt;button&gt;\r\n\r\n\r\nin par\r\n    &lt;son @par=&#39;getson&#39;&gt;&lt;son&gt;\r\n    methods: {\r\n        getson(value){\r\n            console.log(value);\r\n        }\r\n    },</pre><hr data-v-7f53d254><h4 data-v-7f53d254>调用父组件 $parent</h4><pre data-v-7f53d254>fun(){\r\n    this.$parent.value, // 访问父组件的值\r\n    this.$parent.method(), // 方法\r\n    this.$parent.$parent..., // 父组件的父组件的...\r\n    this.$root. ... // 根组件\r\n}</pre><hr data-v-7f53d254><h4 data-v-7f53d254>调用子组件 $children</h4><pre data-v-7f53d254>in par \r\n    &lt;son ref=&#39;name&#39;&gt;&lt;/son&gt;\r\n    fun(){\r\n        this.refs.name . ... // 子组件\r\n    }</pre><hr data-v-7f53d254><h2 data-v-7f53d254>插槽</h2><h4 data-v-7f53d254>默认插槽</h4><pre data-v-7f53d254>&lt;component&gt;\r\n    插槽内容\r\n&lt;/component&gt;\r\n\r\nin component\r\n    &lt;.&gt;\r\n        &lt;slot&gt;&lt;/slot&gt;\r\n        // &lt;slot&gt; 设置默认值 &lt;/slot&gt;\r\n    &lt;/.&gt;\r\n\r\n== &lt;button&gt;插槽内容&lt;/button&lt;&gt;/code&lt;&gt;/pre&gt;\r\n</pre><hr data-v-7f53d254><h4 data-v-7f53d254>具名插槽</h4><pre data-v-7f53d254>&lt;slot name=&#39;str&#39;&gt;&lt;/slot&gt;\r\n\r\nin component \r\n&lt;template v-slot:header&gt;\r\n    any\r\n&lt;/template&gt;\r\n        </pre><p data-v-7f53d254>不具名的情况下自动为 default</p><hr data-v-7f53d254>",38);Object(d["s"])();var f=r((function(t,a,n,f,c,p){var h=Object(d["A"])("nav-bar"),u=Object(d["A"])("sidebarR");return Object(d["r"])(),Object(d["d"])("div",null,[Object(d["h"])(h,null,{default:r((function(){return[e]})),time:r((function(){return[l]})),_:1}),Object(d["h"])("div",o,[Object(d["h"])("div",i,[s,Object(d["h"])(u),v])])])})),c=n("d968"),p=n("1906"),h={data:function(){return{}},components:{navBar:c["a"],sidebarR:p["a"]},methods:{GoSection:function(t){document.getElementById("".concat(t)).scrollIntoView({behavior:"smooth"})}}};h.render=f,h.__scopeId="data-v-7f53d254";a["default"]=h}}]);
//# sourceMappingURL=chunk-39146ea5.a6d5ae25.js.map