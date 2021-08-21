(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-641b2c3c"],{1537:function(a,c,t){"use strict";t.r(c);var d=t("7a23"),e=Object(d["J"])("data-v-6c64ac8d");Object(d["t"])("data-v-6c64ac8d");var l=Object(d["g"])(" Lifecycle hooks "),o=Object(d["g"])(" 2021年8月15日08:53:00 "),i={class:"xy"},n={class:"content"},r=Object(d["h"])("h2",null,"生命周期钩子",-1),v=Object(d["f"])('<img style="width:100%;" src="https://vue3js.cn/docs/zh/images/lifecycle.png" alt="" data-v-6c64ac8d><p data-v-6c64ac8d>所有的生命周期钩子自动绑定this上下文到实例中。<small data-v-6c64ac8d>不能使用箭头函数来定义一个生命周期方法</small></p><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>beforeCreate()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>实例初始化之后</li><li data-v-6c64ac8d>data() , event / watcher 事件配置之前被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>created()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>在实例创建完成后调用</li><li data-v-6c64ac8d>已完成 data() , property方法 ， watch / event</li><li data-v-6c64ac8d>挂载还未开始 ， $el 尚未开始</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>beforeMount()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>挂载之前被调用 <small data-v-6c64ac8d>相关的render函数首次调用</small></li><li data-v-6c64ac8d>在服务器端渲染期间不被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>mounted()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>实例被挂载后</li><li data-v-6c64ac8d>mounted 不会保证所有子组件都被挂载，可以使用 $nextTick 解决</li><li data-v-6c64ac8d>在服务器端渲染期间不被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>beforeUpdate()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>数据更新时调用</li><li data-v-6c64ac8d>在服务器端渲染期间不被调用。只有初次渲染会在服务器端进行</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>update()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>数据更新完毕调用</li><li data-v-6c64ac8d>不会保证所有子组件都被重绘，可以 $nextTick 解决</li><li data-v-6c64ac8d>在服务器端渲染期间不被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>activated()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>被 <span data-v-6c64ac8d>keep-alive</span>缓存的组件 激活 时调用</li><li data-v-6c64ac8d>在服务器端渲染期间不被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>deactivated()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>被 <span data-v-6c64ac8d>keep-alive</span>缓存的组件 停用 时调用</li><li data-v-6c64ac8d>在服务器端渲染期间不被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>beforeUnmount()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>卸载组件实例之前调用</li><li data-v-6c64ac8d>在服务器端渲染期间不被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d>unmounted()</h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>卸载组件实例后调用， 此时实例不能访问</li><li data-v-6c64ac8d>在服务器端渲染期间不被调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d><a href="https://vue3js.cn/docs/zh/api/options-lifecycle-hooks.html#errorcaptured" data-v-6c64ac8d>errorCaptured() ... </a></h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>当捕获一个来自子孙组件的错误时被调用。...</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d><a href="https://vue3js.cn/docs/zh/api/options-lifecycle-hooks.html#errorcaptured" data-v-6c64ac8d>renderTracked ... </a></h4><ul data-v-6c64ac8d><li data-v-6c64ac8d>跟踪虚拟DOM 重新渲染时调用</li></ul><hr data-v-6c64ac8d><h4 data-v-6c64ac8d><a href="https://vue3js.cn/docs/zh/api/options-lifecycle-hooks.html#rendertriggered" data-v-6c64ac8d>renderTriggered ... </a></h4>',40);Object(d["r"])();var h=e((function(a,c,t,h,s,u){var p=Object(d["z"])("nav-bar"),b=Object(d["z"])("sidebarR");return Object(d["q"])(),Object(d["d"])("div",null,[Object(d["h"])(p,null,{default:e((function(){return[l]})),time:e((function(){return[o]})),_:1}),Object(d["h"])("div",i,[Object(d["h"])("div",n,[r,Object(d["h"])(b),v])])])})),s=t("d968"),u=t("1906"),p={data:function(){return{}},components:{navBar:s["a"],sidebarR:u["a"]},methods:{GoSection:function(a){document.getElementById("".concat(a)).scrollIntoView({behavior:"smooth"})}}};p.render=h,p.__scopeId="data-v-6c64ac8d";c["default"]=p},1906:function(a,c,t){"use strict";var d=t("7a23"),e={class:"right_nav"},l=Object(d["h"])("h1",null,[Object(d["h"])("a",null,[Object(d["h"])("i",{id:"top",class:"bx bx-arrow-to-top"})])],-1);function o(a,c,t,o,i,n){return Object(d["q"])(),Object(d["d"])("div",null,[Object(d["h"])("div",e,[Object(d["y"])(a.$slots,"default")]),i.top?(Object(d["q"])(),Object(d["d"])("div",{key:0,class:"icon",onClick:c[1]||(c[1]=function(){return n.goTop&&n.goTop.apply(n,arguments)})},[l])):Object(d["e"])("",!0)])}var i=t("2f14"),n={data:function(){return{height:0,scrollTop:0,top:!1}},methods:{watchScroll:function(){this.scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,this.scrollTop>500?this.top=!0:this.top=!1},goTop:function(){this.scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,this.scrollTop>1?(window.requestAnimationFrame(this.goTop),scrollTo(0,Math.floor(.85*this.scrollTop))):scrollTo(0,0),document.getElementById("top").className="bx bx-arrow-to-top bx-fade-up"}},mounted:function(){window.addEventListener("scroll",Object(i["a"])(this.watchScroll,500))},destroyed:function(){window.removeEventListener("scroll",this.watchScroll)}};t("416d");n.render=o;c["a"]=n},"416d":function(a,c,t){"use strict";t("d175")},d175:function(a,c,t){}}]);
//# sourceMappingURL=chunk-641b2c3c.5dabf35a.js.map