/*
 AngularJS v1.3.0-beta.19
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(n,e,A){'use strict';function w(r,h,f){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,d,b,g,v){function x(){p&&(p.remove(),p=null);k&&(k.$destroy(),k=null);l&&(f.leave(l,function(){p=null}),p=l,l=null)}function u(){var b=r.current&&r.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),c=r.current;l=v(b,function(c){f.enter(c,null,l||d,function(){!e.isDefined(q)||q&&!a.$eval(q)||h()});x()});k=c.scope=b;k.$emit("$viewContentLoaded");k.$eval(t)}else x()}
    var k,l,p,q=b.autoscroll,t=b.onload||"";a.$on("$routeChangeSuccess",u);u()}}}function y(e,h,f){return{restrict:"ECA",priority:-400,link:function(a,d){var b=f.current,g=b.locals;d.html(g.$template);var v=e(d.contents());b.controller&&(g.$scope=a,g=h(b.controller,g),b.controllerAs&&(a[b.controllerAs]=g),d.data("$ngControllerController",g),d.children().data("$ngControllerController",g));v(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function r(a,d){return e.extend(new (e.extend(function(){},
    {prototype:a})),d)}function h(a,e){var b=e.caseInsensitiveMatch,g={originalPath:a,regexp:a},f=g.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,d,b){a="?"===b?b:null;b="*"===b?b:null;f.push({name:d,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(b&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");g.regexp=RegExp("^"+a+"$",b?"i":"");return g}var f={};this.when=function(a,d){f[a]=e.extend({reloadOnSearch:!0},d,a&&h(a,d));if(a){var b=
    "/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";f[b]=e.extend({redirectTo:a},h(b,d))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,d,b,g,h,n,u,k){function l(){var c=p(),m=s.current;if(c&&m&&c.$$route===m.$$route&&e.equals(c.pathParams,m.pathParams)&&!c.reloadOnSearch&&!t)m.params=c.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(c||m)t=!1,a.$broadcast("$routeChangeStart",
    c,m),(s.current=c)&&c.redirectTo&&(e.isString(c.redirectTo)?d.path(q(c.redirectTo,c.params)).search(c.params).replace():d.url(c.redirectTo(c.pathParams,d.path(),d.search())).replace()),g.when(c).then(function(){if(c){var a=e.extend({},c.resolve),b,d;e.forEach(a,function(c,b){a[b]=e.isString(c)?h.get(c):h.invoke(c,null,null,b)});e.isDefined(b=c.template)?e.isFunction(b)&&(b=b(c.params)):e.isDefined(d=c.templateUrl)&&(e.isFunction(d)&&(d=d(c.params)),d=k.getTrustedResourceUrl(d),e.isDefined(d)&&(c.loadedTemplateUrl=
    d,b=n.get(d,{cache:u}).then(function(c){return c.data})));e.isDefined(b)&&(a.$template=b);return g.all(a)}}).then(function(d){c==s.current&&(c&&(c.locals=d,e.copy(c.params,b)),a.$broadcast("$routeChangeSuccess",c,m))},function(b){c==s.current&&a.$broadcast("$routeChangeError",c,m,b)})}function p(){var c,a;e.forEach(f,function(b,g){var f;if(f=!a){var h=d.path();f=b.keys;var l={};if(b.regexp)if(h=b.regexp.exec(h)){for(var k=1,p=h.length;k<p;++k){var n=f[k-1],q=h[k];n&&q&&(l[n.name]=q)}f=l}else f=null;
else f=null;f=c=f}f&&(a=r(b,{params:e.extend({},d.search(),c),pathParams:c}),a.$$route=b)});return a||f[null]&&r(f[null],{params:{},pathParams:{}})}function q(a,b){var d=[];e.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];d.push(b[f]);d.push(e[2]||"");delete b[f]}});return d.join("")}var t=!1,s={routes:f,reload:function(){t=!0;a.$evalAsync(l)},updateParams:function(a){if(this.current&&this.current.$$route){var b={},f=this;e.forEach(Object.keys(a),
    function(d){f.current.pathParams[d]||(b[d]=a[d])});a=e.extend({},this.current.params,a);d.path(q(this.current.$$route.originalPath,a));d.search(e.extend({},d.search(),b))}else throw z("norout");}};a.$on("$locationChangeSuccess",l);return s}]});var z=e.$$minErr("ngRoute");n.provider("$routeParams",function(){this.$get=function(){return{}}});n.directive("ngView",w);n.directive("ngView",y);w.$inject=["$route","$anchorScroll","$animate"];y.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map