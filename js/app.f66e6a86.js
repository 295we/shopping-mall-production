(function(){"use strict";var t={4253:function(t,e,r){var a={};r.r(a),r.d(a,{reqAddOrUpdateShopCart:function(){return F},reqAddressInfo:function(){return Q},reqCartList:function(){return B},reqCategoryList:function(){return j},reqDelSku:function(){return z},reqFloorList:function(){return R},reqGETBannerList:function(){return G},reqGetCode:function(){return K},reqGetSearchInfo:function(){return Z},reqGoodsInfo:function(){return D},reqLogout:function(){return J},reqMyorderList:function(){return rt},reqOrderInfo:function(){return W},reqPayInfo:function(){return tt},reqPayStatus:function(){return et},reqSubmitOrder:function(){return X},reqUpdateCheckedById:function(){return H},reqUserInfo:function(){return Y},reqUserLogin:function(){return V},reqUserRegister:function(){return M}});var o=r(7881),s=r.n(o),n=r(6369),i=function(){var t=this,e=t._self._c;return e("div",[e("Header"),e("router-view"),e("Footer",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.show,expression:"$route.meta.show"}]})],1)},c=[],u=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"loginList"},[e("p",[t._v("尚品汇欢迎您！")]),t.userName?e("p",[e("a",[t._v(t._s(t.userName))]),e("a",{staticClass:"register",on:{click:t.logOut}},[t._v("退出登录")])]):e("p",[e("span",[t._v("请")]),e("router-link",{attrs:{to:"/login"}},[t._v("登录")]),e("router-link",{staticClass:"register",attrs:{to:"/register"}},[t._v("免费注册")])],1)]),e("div",{staticClass:"typeList"},[e("router-link",{attrs:{to:"/center"}},[t._v("我的订单")]),e("router-link",{attrs:{to:"/shopcart"}},[t._v("我的购物车")]),e("a",[t._v("我的尚品汇")]),e("a",[t._v("尚品汇会员")]),e("a",[t._v("企业采购")]),e("a",[t._v("关注尚品汇")]),e("a",[t._v("合作招商")]),e("a",[t._v("商家后台")])],1)])]),e("div",{staticClass:"bottom"},[e("h1",{staticClass:"logoArea"},[e("router-link",{staticClass:"logo",attrs:{title:"尚品汇",to:"/home"}},[e("img",{attrs:{src:r(587),alt:""}})])],1),e("div",{staticClass:"searchArea"},[e("form",{staticClass:"searchForm",attrs:{action:"###"}},[e("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.keyword,expression:"keyword",modifiers:{lazy:!0}}],staticClass:"input-error input-xxlarge",attrs:{type:"text",id:"autocomplete"},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goSearch.apply(null,arguments)},change:function(e){t.keyword=e.target.value}}}),e("button",{staticClass:"sui-btn btn-xlarge btn-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.goSearch.apply(null,arguments)}}},[t._v(" 搜索 ")])])])])])},l=[],d={name:"Header",data(){return{keyword:""}},mounted(){this.$bus.$on("clear",(()=>{this.keyword=""}))},computed:{userName(){return this.$store.state.user.userInfo.name}},methods:{goSearch(){this.$route.query&&this.$router.push({name:"search",params:{keyword:this.keyword||void 0},query:this.$route.query})},async logOut(){try{await this.$store.dispatch("userLogout"),this.$router.push({path:"/home"})}catch(t){throw t}}}},m=d,p=r(1001),g=(0,p.Z)(m,u,l,!1,null,"4abc28b0",null),f=g.exports,h=function(){var t=this;t._self._c;return t._m(0)},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footerList"},[e("div",{staticClass:"footerItem"},[e("h4",[t._v("购物指南")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("购物流程")]),e("li",[t._v("会员介绍")]),e("li",[t._v("生活旅行/团购")]),e("li",[t._v("常见问题")]),e("li",[t._v("购物指南")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("配送方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("上门自提")]),e("li",[t._v("211限时达")]),e("li",[t._v("配送服务查询")]),e("li",[t._v("配送费收取标准")]),e("li",[t._v("海外配送")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("支付方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("货到付款")]),e("li",[t._v("在线支付")]),e("li",[t._v("分期付款")]),e("li",[t._v("邮局汇款")]),e("li",[t._v("公司转账")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("售后服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("售后政策")]),e("li",[t._v("价格保护")]),e("li",[t._v("退款说明")]),e("li",[t._v("返修/退换货")]),e("li",[t._v("取消订单")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("特色服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("夺宝岛")]),e("li",[t._v("DIY装机")]),e("li",[t._v("延保服务")]),e("li",[t._v("尚品汇E卡")]),e("li",[t._v("尚品汇通信")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("帮助中心")]),e("img",{attrs:{src:r(2552)}})])]),e("div",{staticClass:"copyright"},[e("ul",{staticClass:"helpLink"},[e("li",[t._v(" 关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 联系我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 商家入驻 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们")])]),e("p",[t._v("地址：北京市昌平区宏福科技园综合楼6层")]),e("p",[t._v("京ICP备19006430号")])])])])}],y={name:"Footer"},_=y,C=(0,p.Z)(_,h,v,!1,null,"d687b8e8",null),b=C.exports,w={name:"App",components:{Header:f,Footer:b},mounted(){this.$store.dispatch("categoryList")}},I=w,k=(0,p.Z)(I,i,c,!1,null,null,null),L=k.exports,N=r(2631),S=[{name:"home",path:"/home",component:()=>r.e(164).then(r.bind(r,6164)),meta:{show:!0}},{path:"/login",component:()=>r.e(499).then(r.bind(r,8499)),meta:{show:!1}},{path:"/register",component:()=>r.e(30).then(r.bind(r,4030)),meta:{show:!1}},{name:"search",path:"/search/:keyword?",component:()=>r.e(270).then(r.bind(r,4270)),meta:{show:!0}},{name:"detail",path:"/detail/:skuid",component:()=>r.e(363).then(r.bind(r,8363)),meta:{show:!0}},{name:"addcartsuccess",path:"/addcartsuccess",component:()=>r.e(191).then(r.bind(r,8191)),meta:{show:!0}},{name:"shopcart",path:"/shopcart",component:()=>r.e(786).then(r.bind(r,5786)),meta:{show:!0}},{name:"trade",path:"/trade",component:()=>r.e(976).then(r.bind(r,976)),meta:{show:!0},beforeEnter:(t,e,r)=>{"/shopcart"==e.path||"/login"==e.path?r():r(!1)}},{name:"pay",path:"/pay",component:()=>r.e(209).then(r.bind(r,209)),meta:{show:!0},beforeEnter:(t,e,r)=>{"/trade"==e.path?r():r(!1)}},{name:"paysuccess",path:"/paysuccess",component:()=>r.e(300).then(r.bind(r,6300)),meta:{show:!0}},{name:"center",path:"/center",component:()=>r.e(901).then(r.bind(r,901)),meta:{show:!0},children:[{name:"myorder",path:"myorder",component:()=>r.e(162).then(r.bind(r,3162))},{name:"grouporder",path:"grouporder",component:()=>r.e(807).then(r.bind(r,8807))},{path:"/center",redirect:"/center/myorder"}]},{path:"*",redirect:"/home"}],E=r(3822),x=(r(1703),r(6265)),O=r.n(x),P=r(530),T=r.n(P);const A=O().create({baseURL:"/api",timeout:5e3});A.interceptors.request.use((t=>(T().start(),wt.state.detail.uuid_token&&(t.headers.userTempId=wt.state.uuid_token),wt.state.user.token&&(t.headers.token=wt.state.user.token),t))),A.interceptors.response.use((t=>(T().done(),t.data)),(t=>Promise.reject(new Error("fail"))));var $=A;const U=O().create({baseURL:"/mock",timeout:5e3});U.interceptors.request.use((t=>(T().start(),t))),U.interceptors.response.use((t=>(T().done(),t.data)),(t=>Promise.reject(new Error("fail"))));var q=U;const j=()=>$({url:"/product/getBaseCategoryList",method:"GET"}),G=()=>q({url:"/banner",method:"GET"}),R=()=>q.get("/floor"),Z=(t={})=>$({method:"POST",url:"/list",data:t}),D=t=>$.get(`/item/${t}`),F=(t,e)=>$.post(`/cart/addToCart/${t}/${e}`),B=()=>$.get("/cart/cartList"),z=t=>$["delete"](`/cart/deleteCart/${t}`),H=(t,e)=>$.get(`/cart/checkCart/${t}/${e}`),K=t=>$({url:`/user/passport/sendCode/${t}`,method:"GET"}),M=t=>$.post("/user/passport/register",t),V=t=>$.post("/user/passport/login",t),Y=()=>$.get("/user/passport/auth/getUserInfo"),J=()=>$.get("/user/passport/logout"),Q=()=>$.get("/user/userAddress/auth/findUserAddressList"),W=()=>$.get("/order/auth/trade"),X=(t,e)=>$.post(`/order/auth/submitOrder?tradeNo=${t}`,e),tt=t=>$.get(`/payment/weixin/createNative/${t}`),et=t=>$.get(`/payment/weixin/queryPayStatus/${t}`),rt=(t,e)=>$.get(`/order/auth/${t}/${e}`),at={categoryList:[],bannerList:[],floorList:[]},ot={CATEGORYLIST(t,e){t.categoryList=e},BANNERLIST(t,e){t.bannerList=e},FLOORLIST(t,e){t.floorList=e}},st={async categoryList(t){let e=await j();200==e.code&&t.commit("CATEGORYLIST",e.data)},async bannerList(t){let e=await G();200==e.code&&t.commit("BANNERLIST",e.data)},async floorList(t){let e=await R();200==e.code&&t.commit("FLOORLIST",e.data)}},nt={};var it={state:at,mutations:ot,actions:st,getters:nt};const ct={searchList:{}},ut={GETSEARCHLIST(t,e){t.searchList=e}},lt={async getSearchList(t,e){let r=await Z(e);200==r.code&&t.commit("GETSEARCHLIST",r.data)}},dt={goodsList(t){return t.searchList.goodsList||[]},trademarkList(t){return t.searchList.trademarkList||[]},attrsList(t){return t.searchList.attrsList||[]}};var mt={state:ct,mutations:ut,actions:lt,getters:dt},pt=r(536);const gt=()=>{let t=localStorage.getItem("UUIDTOKEN");return t||(t=(0,pt.Z)(),localStorage.setItem("UUIDTOKEN",t)),t};var ft={state:{goodInfo:{},uuid_token:gt()},mutations:{GETGOODINFO(t,e){t.goodInfo=e}},actions:{async getGoodInfo(t,e){let r=await D(e);200==r.code&&t.commit("GETGOODINFO",r.data)},async addOrUpdateShopCart({commit:t},e){let r=await F(e.skuId,e.skuNum);return 200!=r.code?Promise.reject(r.code):"Success"}},getters:{categoryView(t){return t.goodInfo.categoryView||{}},skuInfo(t){return t.goodInfo.skuInfo||{}},spuSaleAttrList(t){return t.goodInfo.spuSaleAttrList||[]}}},ht={state:{cartList:[]},mutations:{GETCARTLIST(t,e){t.cartList=e}},actions:{async getCartList({commit:t}){let e=await B();200==e.code&&t("GETCARTLIST",e.data)},async deleteCartListBySkuId({commit:t},e){let r=await z(e);return 200==r.code?"Success":Promise.reject(r.code)},async updateChecked({commit:t},{skuId:e,isChecked:r}){let a=await H(e,r);return 200==a.code?"Success":Promise.reject(a.code)},deleteAllCheckedCart(t){let e=t.getters.cartList.cartInfoList,r=[];return e.forEach((e=>{let a=1==e.isChecked?t.dispatch("deleteCartListBySkuId",e.skuId):"";r.push(a)})),Promise.all(r)},updateAllChecked(t,e){let r=t.getters.cartList.cartInfoList,a=[];return r.forEach((r=>{let o=t.dispatch("updateChecked",{skuId:r.skuId,isChecked:e});a.push(o)})),Promise.all(a)}},getters:{cartList(t){return t.cartList[0]||{}}}};const vt=t=>{localStorage.setItem("TOKEN",t)},yt=()=>localStorage.getItem("TOKEN"),_t=()=>localStorage.removeItem("TOKEN");var Ct={state:{code:"",token:yt(),userInfo:{}},mutations:{GETCODE(t,e){t.code=e},USERLOGIN(t,e){t.token=e},GETUSERINFO(t,e){t.userInfo=e},CLEAR(t){t.token="",t.userInfo={},_t()}},actions:{async getCode({commit:t},e){let r=await K(e);return 200==r.code?(t("GETCODE",r.data),"Success"):Promise.reject(r.code)},async userRegister({commit:t},e){let r=await M(e);return 200==r.code?"Success":Promise.reject(r)},async userLogin({commit:t},e){let r=await V(e);return 200==r.code?(t("USERLOGIN",r.data.token),vt(r.data.token),"Success"):Promise.reject(r.code)},async getUserInfo({commit:t}){let e=await Y();return 200==e.code?(t("GETUSERINFO",e.data),"Success"):Promise.reject(e.code)},async userLogout({commit:t}){let e=await J();return 200==e.code?(t("CLEAR"),"Success"):Promise.reject(e.code)}},getters:{}},bt={state:{address:[],orderInfo:{}},mutations:{GETUSERADDRESS(t,e){t.address=e},GETORDERINFO(t,e){t.orderInfo=e}},actions:{async getUserAddress({commit:t}){let e=await Q();200==e.code&&t("GETUSERADDRESS",e.data)},async getOrderInfo({commit:t}){let e=await W();200==e.code&&t("GETORDERINFO",e.data)}},getters:{}};n["default"].use(E.ZP);var wt=new E.ZP.Store({modules:{home:it,search:mt,detail:ft,shopcart:ht,user:Ct,trade:bt}});n["default"].use(N.ZP);let It=N.ZP.prototype.push;N.ZP.prototype.push=function(t,e,r){e&&r?It.call(this,t,e,r):It.call(this,t).catch((t=>t))};let kt=N.ZP.prototype.replace;N.ZP.prototype.replace=function(t,e,r){e&&r?kt.call(this,t,e,r):kt.call(this,t,(()=>{}),(()=>{}))};let Lt=new N.ZP({routes:S,scrollBehavior(t,e,r){return{y:0}}});Lt.beforeEach(((t,e,r)=>{let a=wt.state.user.token,o=wt.state.user.userInfo.name;if(a)"/login"==t.path||"/register"==t.path?(alert("你已经登录，请不要重复登录"),r("/home")):o?r():wt.dispatch("getUserInfo").then((t=>{r()})).catch((t=>{alert("用户信息已过期,请重新登录"),wt.dispatch("userLogout"),r("/login")}));else{let e=t.path;-1!=e.indexOf("/trade")||-1!=e.indexOf("/pay")||-1!=e.indexOf("/center")?(alert("请先登录"),r("/login?redirect="+e)):r()}}));var Nt=Lt,St=function(){var t=this,e=t._self._c;return e("div",{staticClass:"type-nav"},[e("div",{staticClass:"container"},[e("div",{on:{mouseleave:t.leaveShow,mouseenter:t.enterShow}},[e("h2",{staticClass:"all"},[t._v("全部商品分类")]),e("transition",{attrs:{name:"sort"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"sort"},[e("div",{staticClass:"all-sort-list2",on:{click:t.goSearch}},t._l(t.categoryList.slice(0,16),(function(r,a){return e("div",{key:r.categoryId,staticClass:"item",class:{cur:t.currentIndex==a}},[e("h3",{on:{mouseenter:function(e){return t.changeIndex(a)}}},[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category1id":r.categoryId}},[t._v(t._s(r.categoryName))])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex==a,expression:"currentIndex == index"}],staticClass:"item-list clearfix"},t._l(r.categoryChild,(function(r){return e("div",{key:r.categoryId,staticClass:"subitem"},[e("dl",{staticClass:"fore"},[e("dt",[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category2id":r.categoryId}},[t._v(t._s(r.categoryName))])]),e("dd",t._l(r.categoryChild,(function(r){return e("em",{key:r.categoryId},[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category3id":r.categoryId}},[t._v(t._s(r.categoryName))])])})),0)])])})),0)])})),0)])])],1),t._m(0)])])},Et=[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"nav"},[e("a",{attrs:{href:"###"}},[t._v("服装城")]),e("a",{attrs:{href:"###"}},[t._v("美妆馆")]),e("a",{attrs:{href:"###"}},[t._v("尚品汇超市")]),e("a",{attrs:{href:"###"}},[t._v("全球购")]),e("a",{attrs:{href:"###"}},[t._v("闪购")]),e("a",{attrs:{href:"###"}},[t._v("团购")]),e("a",{attrs:{href:"###"}},[t._v("有趣")]),e("a",{attrs:{href:"###"}},[t._v("秒杀")])])}],xt=r(9289),Ot=r.n(xt),Pt={name:"TypeNav",data(){return{currentIndex:-1,show:!0}},mounted(){"/home"!=this.$route.path&&(this.show=!1)},computed:{...(0,E.rn)({categoryList:t=>t.home.categoryList})},methods:{changeIndex:Ot()((function(t){this.currentIndex=t}),50),goSearch(t){let{categoryname:e,category1id:r,category2id:a,category3id:o}=t.target.dataset;if(e){let t={name:"search"},s={categoryName:e};r?s.category1Id=r:a?s.category2Id=a:s.category3Id=o,this.$route.params&&(t.params=this.$route.params,t.query=s,this.$router.push(t))}},enterShow(){"/home"!=this.$route.path&&(this.show=!0)},leaveShow(){"/home"!=this.$route.path&&(this.show=!1),this.currentIndex=-1}}},Tt=Pt,At=(0,p.Z)(Tt,St,Et,!1,null,"84657100",null),$t=At.exports,Ut=function(){var t=this,e=t._self._c;return e("div",{ref:"cur",staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.list,(function(t){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("img",{attrs:{src:t.imgUrl}})])})),0),e("div",{staticClass:"swiper-pagination"}),e("div",{staticClass:"swiper-button-prev"}),e("div",{staticClass:"swiper-button-next"})])},qt=[],jt=r(781),Gt={name:"Carousel",props:["list"],watch:{list:{immediate:!0,handler(){this.$nextTick((()=>{new jt.Z(this.$refs.cur,{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}))}}}},Rt=Gt,Zt=(0,p.Z)(Rt,Ut,qt,!1,null,null,null),Dt=Zt.exports,Ft=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("button",{attrs:{disabled:1==t.pageNo},on:{click:function(e){return t.$emit("getPageNo",t.pageNo-1)}}},[t._v(" 上一页 ")]),t.StartNumAndEndNum.start>1?e("button",{class:{active:1==t.pageNo},on:{click:function(e){return t.$emit("getPageNo",1)}}},[t._v(" 1 ")]):t._e(),t.StartNumAndEndNum.start>2?e("button",[t._v("···")]):t._e(),t._l(t.StartNumAndEndNum.end,(function(r,a){return e("button",{directives:[{name:"show",rawName:"v-show",value:r>=t.StartNumAndEndNum.start,expression:"page >= StartNumAndEndNum.start"}],key:a,class:{active:t.pageNo==r},on:{click:function(e){return t.$emit("getPageNo",r)}}},[t._v(" "+t._s(r)+" ")])})),t.StartNumAndEndNum.end<t.totalPage-1?e("button",[t._v("···")]):t._e(),t.StartNumAndEndNum.end<t.totalPage?e("button",{class:{active:t.pageNo==t.totalPage},on:{click:function(e){return t.$emit("getPageNo",t.totalPage)}}},[t._v(" "+t._s(t.totalPage)+" ")]):t._e(),e("button",{attrs:{disabled:t.pageNo==t.totalPage},on:{click:function(e){return t.$emit("getPageNo",t.pageNo+1)}}},[t._v(" 下一页 ")]),e("button",{staticStyle:{"margin-left":"30px"}},[t._v("共 "+t._s(t.total)+" 条")])],2)},Bt=[],zt={name:"Pagination",props:["pageNo","pageSize","total","continues"],computed:{totalPage(){return Math.ceil(this.total/this.pageSize)},StartNumAndEndNum(){let t=0,e=0;return this.continues>this.totalPage?(t=1,e=this.totalPage):(t=this.pageNo-parseInt(this.continues/2),e=this.pageNo+parseInt(this.continues/2),t<1&&(t=1,e=this.continues),e>this.totalPage&&(e=this.totalPage,t=e-this.continues+1)),{start:t,end:e}}}},Ht=zt,Kt=(0,p.Z)(Ht,Ft,Bt,!1,null,"163ad75d",null),Mt=Kt.exports,Vt=r(7634),Yt=r.n(Vt),Jt=JSON.parse('[{"id":"1","imgUrl":"/images/banner1.jpg"},{"id":"2","imgUrl":"/images/banner2.jpg"},{"id":"3","imgUrl":"/images/banner3.jpg"},{"id":"4","imgUrl":"/images/banner4.jpg"}]'),Qt=JSON.parse('[{"id":"001","name":"家用电器","keywords":["节能补贴","4K电视","空气净化器","IH电饭煲","滚筒洗衣机","电热水器"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门"},{"url":"#","text":"大家电"},{"url":"#","text":"生活电器"},{"url":"#","text":"厨房电器"},{"url":"#","text":"应季电器"},{"url":"#","text":"空气/净水"},{"url":"#","text":"高端电器"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"},{"id":"002","name":"手机通讯","keywords":["节能补贴2","4K电视2","空气净化器2","IH电饭煲2","滚筒洗衣机2","电热水器2"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门2"},{"url":"#","text":"大家电2"},{"url":"#","text":"生活电器2"},{"url":"#","text":"厨房电器2"},{"url":"#","text":"应季电器2"},{"url":"#","text":"空气/净水2"},{"url":"#","text":"高端电器2"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"}]');Yt().mock("/mock/banner",{code:200,data:Jt}),Yt().mock("/mock/floor",{code:200,data:Qt});var Wt=r(6112),Xt=r.p+"img/dj-lazy.f24a7bda.gif",te=r(5708),ee=r(8892),re=r.n(ee);n["default"].use(te.ZP),te.ZP.Validator.localize("zh_CN",{messages:{...re().messages,is:t=>`${t}必须与密码相同`},attributes:{phone:"手机号",code:"验证码",password:"密码",password1:"确认密码",agree:"协议"}}),te.ZP.Validator.extend("agree",{validate:t=>t,getMessage:t=>t+"必须同意"}),n["default"].component("TypeNav",$t),n["default"].component("Carousel",Dt),n["default"].component("Pagination",Mt),n["default"].use(Wt.Z,{loading:Xt}),n["default"].prototype.$msgbox=s(),n["default"].prototype.$alert=s().alert,n["default"].config.productionTip=!1;new n["default"]({beforeCreate(){n["default"].prototype.$bus=this,n["default"].prototype.$API=a},render:t=>t(L),router:Nt,store:wt}).$mount("#app")},2552:function(t,e,r){t.exports=r.p+"img/wx_cz.5d92bf53.jpg"},587:function(t,e,r){t.exports=r.p+"img/logo.d600ca2b.png"}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,a,o,s){if(!a){var n=1/0;for(l=0;l<t.length;l++){a=t[l][0],o=t[l][1],s=t[l][2];for(var i=!0,c=0;c<a.length;c++)(!1&s||n>=s)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(i=!1,s<n&&(n=s));if(i){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[a,o,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,a){return r.f[a](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{30:"df4896d4",162:"e59e6756",164:"45a96af0",191:"1a1e01e5",209:"2c54e942",270:"fe586a65",300:"927cd783",363:"f977dbae",499:"30d533e4",786:"ca0070ff",807:"236cd297",901:"8ff2b030",976:"c89b3618"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{30:"952328a5",164:"e422249c",191:"cb754217",209:"b48d1377",270:"66fce52e",300:"5dcd9004",363:"144cad33",499:"75dc0087",786:"274e20c5",901:"42df81c5",976:"73fe056e"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="app:";r.l=function(a,o,s,n){if(t[a])t[a].push(o);else{var i,c;if(void 0!==s)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+s){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+s),i.src=a),t[a]=[o];var m=function(e,r){i.onerror=i.onload=null,clearTimeout(p);var o=t[a];if(delete t[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(r)})),e)return e(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t=function(t,e,r,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(s){if(o.onerror=o.onload=null,"load"===s.type)r();else{var n=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=n,c.request=i,o.parentNode.removeChild(o),a(c)}};return o.onerror=o.onload=s,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=r[a],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===t||s===e))return o}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){o=n[a],s=o.getAttribute("data-href");if(s===t||s===e)return o}},a=function(a){return new Promise((function(o,s){var n=r.miniCssF(a),i=r.p+n;if(e(n,i))return o();t(a,i,o,s)}))},o={143:0};r.f.miniCss=function(t,e){var r={30:1,164:1,191:1,209:1,270:1,300:1,363:1,499:1,786:1,901:1,976:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=a(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};r.f.j=function(e,a){var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var s=new Promise((function(r,a){o=t[e]=[r,a]}));a.push(o[2]=s);var n=r.p+r.u(e),i=new Error,c=function(a){if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,o[1](i)}};r.l(n,c,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,n=a[0],i=a[1],c=a[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var l=c(r)}for(e&&e(a);u<n.length;u++)s=n[u],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(l)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(4253)}));a=r.O(a)})();
//# sourceMappingURL=app.f66e6a86.js.map