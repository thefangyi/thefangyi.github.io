(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-641b2c3c"],{1537:function(a,e,t){"use strict";t.r(e);var l=t("7a23"),d=Object(l["E"])("data-v-01667aae");Object(l["t"])("data-v-01667aae");var o=Object(l["g"])(" Lifecycle hooks "),i=Object(l["g"])(" 2021年8月15日08:53:00 "),c={class:"xy"},n={class:"content"},r=Object(l["h"])("h2",null,"生命周期钩子",-1),v=Object(l["f"])('<img style="width:100%;" src="https://vue3js.cn/docs/zh/images/lifecycle.png" alt="" data-v-01667aae><p data-v-01667aae>所有的生命周期钩子自动绑定this上下文到实例中。<small data-v-01667aae>不能使用箭头函数来定义一个生命周期方法</small></p><hr data-v-01667aae><h4 data-v-01667aae>beforeCreate()</h4><ul data-v-01667aae><li data-v-01667aae>实例初始化之后</li><li data-v-01667aae>data() , event / watcher 事件配置之前被调用</li></ul><hr data-v-01667aae><h4 data-v-01667aae>created()</h4><ul data-v-01667aae><li data-v-01667aae>在实例创建完成后调用</li><li data-v-01667aae>已完成 data() , property方法 ， watch / event</li><li data-v-01667aae>挂载还未开始 ， $el 尚未开始</li></ul><hr data-v-01667aae><h4 data-v-01667aae>beforeMount()</h4><ul data-v-01667aae><li data-v-01667aae>挂载之前被调用 <small data-v-01667aae>相关的render函数首次调用</small></li><li data-v-01667aae>在服务器端渲染期间不被调用</li></ul><hr data-v-01667aae><h4 data-v-01667aae>mounted()</h4><ul data-v-01667aae><li data-v-01667aae>实例被挂载后</li><li data-v-01667aae>mounted 不会保证所有子组件都被挂载，可以使用 $nextTick 解决</li><li data-v-01667aae>在服务器端渲染期间不被调用</li></ul><hr data-v-01667aae><h4 data-v-01667aae>beforeUpdate()</h4><ul data-v-01667aae><li data-v-01667aae>数据更新时调用</li><li data-v-01667aae>在服务器端渲染期间不被调用。只有初次渲染会在服务器端进行</li></ul><hr data-v-01667aae><h4 data-v-01667aae>update()</h4><ul data-v-01667aae><li data-v-01667aae>数据更新完毕调用</li><li data-v-01667aae>不会保证所有子组件都被重绘，可以 $nextTick 解决</li><li data-v-01667aae>在服务器端渲染期间不被调用</li></ul><hr data-v-01667aae><h4 data-v-01667aae>activated()</h4><ul data-v-01667aae><li data-v-01667aae>被 <span data-v-01667aae>keep-alive</span>缓存的组件 激活 时调用</li><li data-v-01667aae>在服务器端渲染期间不被调用</li></ul><hr data-v-01667aae><h4 data-v-01667aae>deactivated()</h4><ul data-v-01667aae><li data-v-01667aae>被 <span data-v-01667aae>keep-alive</span>缓存的组件 停用 时调用</li><li data-v-01667aae>在服务器端渲染期间不被调用</li></ul><hr data-v-01667aae><h4 data-v-01667aae>beforeUnmount()</h4><ul data-v-01667aae><li data-v-01667aae>卸载组件实例之前调用</li><li data-v-01667aae>在服务器端渲染期间不被调用</li></ul><hr data-v-01667aae><h4 data-v-01667aae>unmounted()</h4><ul data-v-01667aae><li data-v-01667aae>卸载组件实例后调用， 此时实例不能访问</li><li data-v-01667aae>在服务器端渲染期间不被调用</li></ul><hr data-v-01667aae><h4 data-v-01667aae><a href="https://vue3js.cn/docs/zh/api/options-lifecycle-hooks.html#errorcaptured" data-v-01667aae>errorCaptured() ... </a></h4><ul data-v-01667aae><li data-v-01667aae>当捕获一个来自子孙组件的错误时被调用。...</li></ul><hr data-v-01667aae><h4 data-v-01667aae><a href="https://vue3js.cn/docs/zh/api/options-lifecycle-hooks.html#errorcaptured" data-v-01667aae>renderTracked ... </a></h4><ul data-v-01667aae><li data-v-01667aae>跟踪虚拟DOM 重新渲染时调用</li></ul><hr data-v-01667aae><h4 data-v-01667aae><a href="https://vue3js.cn/docs/zh/api/options-lifecycle-hooks.html#rendertriggered" data-v-01667aae>renderTriggered ... </a></h4>',40);Object(l["r"])();var h=d((function(a,e,t,h,s,u){var p=Object(l["y"])("nav-bar"),b=Object(l["y"])("sidebarR");return Object(l["q"])(),Object(l["d"])("div",null,[Object(l["h"])(p,null,{default:d((function(){return[o]})),time:d((function(){return[i]})),_:1}),Object(l["h"])("div",c,[Object(l["h"])("div",n,[r,Object(l["h"])(b),v])])])})),s=t("d968"),u=t("1906"),p=(t("c197"),{data:function(){return{}},components:{navBar:s["a"],sidebarR:u["a"]},methods:{GoSection:function(a){document.getElementById("".concat(a)).scrollIntoView({behavior:"smooth"})}}});p.render=h,p.__scopeId="data-v-01667aae";e["default"]=p},1906:function(a,e,t){"use strict";var l=t("7a23"),d={class:"right_nav"},o=Object(l["h"])("h1",null,[Object(l["h"])("a",null,[Object(l["h"])("i",{id:"top",class:"bx bx-arrow-to-top"})])],-1);function i(a,e,t,i,c,n){return Object(l["q"])(),Object(l["d"])("div",null,[Object(l["h"])("div",d,[Object(l["x"])(a.$slots,"default")]),c.top?(Object(l["q"])(),Object(l["d"])("div",{key:0,class:"icon",onClick:e[1]||(e[1]=function(){return n.goTop&&n.goTop.apply(n,arguments)})},[o])):Object(l["e"])("",!0)])}var c=t("2f14"),n={data:function(){return{height:0,scrollTop:0,top:!1}},methods:{watchScroll:function(){this.scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,this.scrollTop>500?this.top=!0:this.top=!1},goTop:function(){this.scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,this.scrollTop>1?(window.requestAnimationFrame(this.goTop),scrollTo(0,Math.floor(.85*this.scrollTop))):scrollTo(0,0),document.getElementById("top").className="bx bx-arrow-to-top bx-fade-up"}},mounted:function(){window.addEventListener("scroll",Object(c["a"])(this.watchScroll,500))},destroyed:function(){window.removeEventListener("scroll",this.watchScroll)}};t("416d");n.render=i;e["a"]=n},"416d":function(a,e,t){"use strict";t("d175")},d175:function(a,e,t){}}]);
//# sourceMappingURL=chunk-641b2c3c.8b7c5aa1.js.map