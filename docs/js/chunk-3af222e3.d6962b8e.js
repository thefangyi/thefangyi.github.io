(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3af222e3"],{1906:function(t,a,d){"use strict";var c=d("7a23"),r={class:"right_nav"},l=Object(c["h"])("h1",null,[Object(c["h"])("a",null,[Object(c["h"])("i",{id:"top",class:"bx bx-arrow-to-top"})])],-1);function e(t,a,d,e,o,i){return Object(c["q"])(),Object(c["d"])("div",null,[Object(c["h"])("div",r,[Object(c["y"])(t.$slots,"default")]),o.top?(Object(c["q"])(),Object(c["d"])("div",{key:0,class:"icon",onClick:a[1]||(a[1]=function(){return i.goTop&&i.goTop.apply(i,arguments)})},[l])):Object(c["e"])("",!0)])}var o=d("2f14"),i={data:function(){return{height:0,scrollTop:0,top:!1}},methods:{watchScroll:function(){this.scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,this.scrollTop>500?this.top=!0:this.top=!1},goTop:function(){this.scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,this.scrollTop>1?(window.requestAnimationFrame(this.goTop),scrollTo(0,Math.floor(.85*this.scrollTop))):scrollTo(0,0),document.getElementById("top").className="bx bx-arrow-to-top bx-fade-up"}},mounted:function(){window.addEventListener("scroll",Object(o["a"])(this.watchScroll,500))},destroyed:function(){window.removeEventListener("scroll",this.watchScroll)}};d("416d");i.render=e;a["a"]=i},"22b9":function(t,a,d){"use strict";d.r(a);var c=d("7a23"),r=Object(c["J"])("data-v-144d1c71");Object(c["t"])("data-v-144d1c71");var l=Object(c["g"])(" Router "),e=Object(c["g"])(" 2021年8月15日10:34:35 "),o={class:"xy"},i={class:"content"},u=Object(c["h"])("h2",null,"动态路由匹配",-1),n=Object(c["f"])('<h4 data-v-144d1c71>参数传递</h4><pre data-v-144d1c71>in router \r\n{\r\n    path: &#39;/str/:id&#39;,\r\n    name: &#39;str&#39;,\r\n    component: str, \r\n  }\r\n\r\nin son \r\n{ { $route.params.id } }\r\n// { {$route.query.id } } // 两种传值方式\r\n\r\nin parent\r\n&lt;li v-for=&quot;item in value&quot; &gt;&lt;router-link :to=&quot;&#39;/str/&#39; + item.id&quot;&gt;&lt;{ { item.title} }&gt; &lt;/li&gt;\r\n// &lt;li v-for=&quot;item in value&quot; &gt;&lt;router-link :to={ path: &#39;/str&#39; , query: {id: 1}}&gt;&lt;{ { item.title} }&gt; &lt;/li&gt;\r\n\r\n自定义 router\r\n&lt;button @click=&quot;$router.push( {path: &#39;&#39; , query: {}} )&quot;&gt;&lt;/button&gt;\r\n  </pre><hr data-v-144d1c71><h4 data-v-144d1c71>编程式导航</h4><ul data-v-144d1c71><li data-v-144d1c71>通过 this.$router.push() 来访问路由 ， 会向 history 栈添加一个新的记录</li><li data-v-144d1c71>&lt;router-link :to=&#39;...&#39; replace&gt; / router.replace() / router.push({path: &#39;&#39; , replace: true})<br data-v-144d1c71> 导航时不会向 history 添加记录</li><li data-v-144d1c71>window.history.go(number) 表示在 history 栈中前进或后退多少步</li></ul><hr data-v-144d1c71><h2 data-v-144d1c71>命名路由</h2><ul data-v-144d1c71> 优点 <li data-v-144d1c71>没有硬编码的 URL</li><li data-v-144d1c71>params 的自动编码/解码</li><li data-v-144d1c71>防止在URL 中出错</li><li data-v-144d1c71>绕过路径排序</li></ul><h4 data-v-144d1c71>命名 导航</h4><ul data-v-144d1c71><li data-v-144d1c71>&lt;router-link :to=&quot;{name: &#39;命名路由&#39; , params: {...}}&quot;&gt; ... &lt;/router-link&gt;</li><li data-v-144d1c71>router.push({ name: &#39;命名路由&#39; , params: {...}})</li></ul><hr data-v-144d1c71><h4 data-v-144d1c71><a href="https://next.router.vuejs.org/zh/guide/essentials/named-views.html" data-v-144d1c71></a> 命名 视图</h4><p data-v-144d1c71>一个页面显示多个导航区域，仅需设置命名视图</p><hr data-v-144d1c71><h2 data-v-144d1c71><a href="https://next.router.vuejs.org/zh/guide/essentials/redirect-and-alias.html" data-v-144d1c71></a> 重定向和别名</h2><h4 data-v-144d1c71>重定向</h4><ul data-v-144d1c71><li data-v-144d1c71>将/a 重定向 到 /b</li></ul><hr data-v-144d1c71><h4 data-v-144d1c71>别名</h4><ul data-v-144d1c71><li data-v-144d1c71>url 不同，但是访问的目标相同</li></ul><hr data-v-144d1c71><h2 data-v-144d1c71>路由组件传参</h2><ul data-v-144d1c71><li data-v-144d1c71></li></ul><hr data-v-144d1c71><h2 data-v-144d1c71>历史模式</h2><ul data-v-144d1c71><li data-v-144d1c71></li></ul><hr data-v-144d1c71><h2 data-v-144d1c71>导航守卫</h2><ul data-v-144d1c71><li data-v-144d1c71></li></ul><hr data-v-144d1c71><h2 data-v-144d1c71>路由元信息</h2><ul data-v-144d1c71><li data-v-144d1c71></li></ul><hr data-v-144d1c71><h2 data-v-144d1c71>数据获取</h2><ul data-v-144d1c71><li data-v-144d1c71></li></ul><hr data-v-144d1c71><h2 data-v-144d1c71>setup()中</h2><ul data-v-144d1c71><pre data-v-144d1c71>import { useRouter, useRoute } from &#39;vue-router&#39;\r\nsetup() {\r\n    const router = useRouter()\r\n    const route = useRoute()\r\n...\r\n    router.push(...)\r\n}\r\n        </pre></ul><hr data-v-144d1c71><h2 data-v-144d1c71>过渡动效</h2><ul data-v-144d1c71><li data-v-144d1c71></li></ul><hr data-v-144d1c71><h2 data-v-144d1c71>滚动效果</h2><ul data-v-144d1c71><li data-v-144d1c71></li></ul><hr data-v-144d1c71><h2 data-v-144d1c71>路由懒加载</h2><ul data-v-144d1c71><li data-v-144d1c71></li></ul><hr data-v-144d1c71><h2 data-v-144d1c71>扩展 router-link </h2><ul data-v-144d1c71><li data-v-144d1c71></li></ul><hr data-v-144d1c71><h2 data-v-144d1c71>导航故障</h2><ul data-v-144d1c71><li data-v-144d1c71></li></ul><hr data-v-144d1c71><h2 data-v-144d1c71>动态路由</h2><ul data-v-144d1c71><li data-v-144d1c71></li></ul><hr data-v-144d1c71>',57);Object(c["r"])();var h=r((function(t,a,d,h,v,s){var p=Object(c["z"])("nav-bar"),b=Object(c["z"])("sidebarR");return Object(c["q"])(),Object(c["d"])("div",null,[Object(c["h"])(p,null,{default:r((function(){return[l]})),time:r((function(){return[e]})),_:1}),Object(c["h"])("div",o,[Object(c["h"])("div",i,[u,Object(c["h"])(b),n])])])})),v=d("d968"),s=d("1906"),p=(d("bc3a"),{data:function(){return{}},components:{navBar:v["a"],sidebarR:s["a"]},methods:{GoSection:function(t){document.getElementById("".concat(t)).scrollIntoView({behavior:"smooth"})}}});d("9e7c");p.render=h,p.__scopeId="data-v-144d1c71";a["default"]=p},"416d":function(t,a,d){"use strict";d("d175")},"5a30":function(t,a,d){},"9e7c":function(t,a,d){"use strict";d("5a30")},d175:function(t,a,d){}}]);
//# sourceMappingURL=chunk-3af222e3.d6962b8e.js.map