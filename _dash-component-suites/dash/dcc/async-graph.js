(self.webpackChunkdash_core_components=self.webpackChunkdash_core_components||[]).push([[196],{13564:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return U}});var n=r(99196),o=r.n(n),i=r(91850),a=r(91296),u=r.n(a),s=r(93096),c=r.n(s),l=function(e,t){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},l(e,t)};var f=function(e){return"function"==typeof e},p=function(){return"undefined"==typeof window},d=function(e){return e instanceof Element||e instanceof HTMLDocument},h=function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!p()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(p())return null;if(t)return document.querySelector(t);if(n&&d(n))return n;if(r.targetRef&&d(r.targetRef.current))return r.targetRef.current;var o=(0,i.findDOMNode)(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,u=t.onResize;if(o||a){var s=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&f(e)&&e(i,a),{width:i,height:a})}))}}(u,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!p()&&s({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,o=e.children;return f(t)?"renderProp":f(o)?"childFunction":(0,n.isValidElement)(o)?"child":Array.isArray(o)?"childArray":"parent"};var o=t.skipOnMount,a=t.refreshMode,s=t.refreshRate,l=void 0===s?1e3:s,h=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=o,r.targetRef=(0,n.createRef)(),r.observableElement=null,p()||(r.resizeHandler=function(e,t,r,n){switch(t){case"debounce":return u()(e,r,n);case"throttle":return c()(e,r,n);default:return e}}(r.createResizeHandler,a,l,h),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}return function(e,t){function r(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){p()||(this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,u=this.state,s={width:u.width,height:u.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(s);case"childFunction":return(e=o)(s);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(s,["targetRef"]);return(0,n.cloneElement)(e,c)}return(0,n.cloneElement)(e,s);case"childArray":return(e=o).map((function(e){return!!e&&(0,n.cloneElement)(e,s)}));default:return n.createElement(a,null)}},t}(n.PureComponent);p()?n.useEffect:n.useLayoutEffect;var v=r(18865),y=r(45596),g=r(79724),b=r(76943),m=r(36864),O=r(80042),_=r(77584),w=r(29278),j=r(69064),P=r.n(j),D=r(49069);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Z(e,t){return Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Z(e,t)}function z(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return A(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var C={autosize:!0,height:void 0,width:void 0},L={},M={autosize:!1},H={responsive:!0},F={},W={responsive:!1},$=function(e,t,r){var n;if((0,v.Z)(r,["click","hover","selected"])){var o=[];if((0,y.Z)(t))return null;for(var i=e.data,a=0;a<t.points.length;a++){var u=t.points[a],s=(0,g.Z)((function(e){return!(0,v.Z)((0,b.Z)(e),["Object","Array"])}),u);(0,m.Z)("bbox",u)&&(s.bbox=u.bbox),(0,m.Z)("curveNumber",u)&&(0,m.Z)("pointNumber",u)&&(0,m.Z)("customdata",i[s.curveNumber])&&(s.customdata=i[s.curveNumber].customdata[u.pointNumber]),(0,m.Z)("pointNumbers",u)&&(s.pointNumbers=u.pointNumbers),o[a]=s}n={points:o}}else"relayout"!==r&&"restyle"!==r||(n=t);return(0,m.Z)("range",t)&&(n.range=t.range),(0,m.Z)("lassoPoints",t)&&(n.lassoPoints=t.lassoPoints),n},G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&Z(e,t)}(u,e);var t,r,n,i,a=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(n);if(i){var r=N(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return z(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=a.call(this,e)).gd=o().createRef(),t._hasPlotted=!1,t._prevGd=null,t.bindEvents=t.bindEvents.bind(A(t)),t.getConfig=t.getConfig.bind(A(t)),t.getConfigOverride=t.getConfigOverride.bind(A(t)),t.getLayout=t.getLayout.bind(A(t)),t.getLayoutOverride=t.getLayoutOverride.bind(A(t)),t.graphResize=t.graphResize.bind(A(t)),t.isResponsive=t.isResponsive.bind(A(t)),t.state={override:{},originals:{}},t}return t=u,r=[{key:"plot",value:function(e){var t=this,r=e.figure,n=e.config,o=e.animate,i=e.animation_options,a=e.responsive,u=this.gd.current;if(r=e._dashprivate_transformFigure(r,u),n=e._dashprivate_transformConfig(n,u),o&&this._hasPlotted&&r.data.length===u.data.length)return Plotly.animate(u,r,i);var s=this.getConfig(n,a),c=this.getLayout(r.layout,a);return u.classList.add("dash-graph--pending"),Plotly.react(u,{data:r.data,layout:c,frames:r.frames,config:s}).then((function(){var e=t.gd.current;e&&(e.classList.remove("dash-graph--pending"),t._hasPlotted&&e!==t._prevGd&&(t._prevGd&&t._prevGd.removeAllListeners&&(t._prevGd.removeAllListeners(),Plotly.purge(t._prevGd)),t._hasPlotted=!1),t._hasPlotted||(t.bindEvents(),t.graphResize(!0),t._hasPlotted=!0,t._prevGd=e))}))}},{key:"mergeTraces",value:function(e,t,r){var n=this,o=e.clearState;e[t].forEach((function(e){var t,o,i,a,u;if(Array.isArray(e)&&"object"===x(e[0])){var s=(u=3,function(e){if(Array.isArray(e))return e}(a=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(a,u)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}(a,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());t=s[0],o=s[1],i=s[2]}else t=e;if(!o){function e(e){return e[Object.keys(e)[0]]}function r(t){return Array.from(Array(e(t).length).keys())}o=r(t)}var c=n.gd.current;return Plotly[r](c,t,o,i)})),o(t)}},{key:"getConfig",value:function(e,t){return(0,O.Z)(e,this.getConfigOverride(t))}},{key:"getLayout",value:function(e,t){if(!e)return e;var r=this.getLayoutOverride(t),n=this.state,o=n.override,i=n.originals,a={};for(var u in r)e[u]!==o[u]?a[u]=e[u]:i.hasOwnProperty(u)&&(a[u]=i[u]);for(var s in this.setState({override:r,originals:a}),i)e[s]===o[s]&&(e[s]=i[s]);for(var c in r)e[c]=r[c];return e}},{key:"getConfigOverride",value:function(e){switch(e){case!1:return W;case!0:return H;default:return F}}},{key:"getLayoutOverride",value:function(e){switch(e){case!1:return M;case!0:return C;default:return L}}},{key:"isResponsive",value:function(e){var t=e.config,r=e.figure,n=e.responsive;return"Boolean"===(0,b.Z)(n)?n:Boolean(t.responsive&&(!r.layout||(r.layout.autosize||(0,y.Z)(r.layout.autosize))&&((0,y.Z)(r.layout.height)||(0,y.Z)(r.layout.width))))}},{key:"graphResize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||this.isResponsive(this.props)){var t=this.gd.current;t&&(t.classList.add("dash-graph--pending"),Plotly.Plots.resize(t).catch((function(){})).finally((function(){return t.classList.remove("dash-graph--pending")})))}}},{key:"bindEvents",value:function(){var e=this.props,t=e.setProps,r=e.clear_on_unhover,n=e.relayoutData,o=e.restyleData,i=e.hoverData,a=e.selectedData,u=this.gd.current;u.on("plotly_click",(function(e){var r=$(u,e,"click");(0,y.Z)(r)||t({clickData:r})})),u.on("plotly_clickannotation",(function(e){var r=(0,_.Z)(["event","fullAnnotation"],e);t({clickAnnotationData:r})})),u.on("plotly_hover",(function(e){var r=$(u,e,"hover");(0,y.Z)(r)||(0,w.Z)(r,i)||t({hoverData:r})})),u.on("plotly_selected",(function(e){var r=$(u,e,"selected");(0,y.Z)(r)||(0,w.Z)(r,a)||t({selectedData:r})})),u.on("plotly_deselect",(function(){t({selectedData:null})})),u.on("plotly_relayout",(function(e){var r=$(u,e,"relayout");(0,y.Z)(r)||(0,w.Z)(r,n)||t({relayoutData:r})})),u.on("plotly_restyle",(function(e){var r=$(u,e,"restyle");(0,y.Z)(r)||(0,w.Z)(r,o)||t({restyleData:r})})),u.on("plotly_unhover",(function(){r&&t({hoverData:null})}))}},{key:"componentDidMount",value:function(){var e,t;this.plot(this.props),this.props.prependData&&this.mergeTraces(this.props,"prependData","prependTraces"),this.props.extendData&&this.mergeTraces(this.props,"extendData","extendTraces"),(null!==(e=this.props.prependData)&&void 0!==e&&e.length||null!==(t=this.props.extendData)&&void 0!==t&&t.length)&&this.props._dashprivate_onFigureModified(this.props.figure)}},{key:"componentWillUnmount",value:function(){var e=this.gd.current;e&&e.removeAllListeners&&(e.removeAllListeners(),this._hasPlotted&&Plotly.purge(e))}},{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||JSON.stringify(this.props.style)!==JSON.stringify(e.style)||JSON.stringify(this.props.loading_state)!==JSON.stringify(e.loading_state)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t,r;this.props.id!==e.id||(this.props.figure===e.figure&&this.props._dashprivate_transformConfig===e._dashprivate_transformConfig&&this.props._dashprivate_transformFigure===e._dashprivate_transformFigure||this.plot(e),this.props.prependData!==e.prependData&&this.mergeTraces(e,"prependData","prependTraces"),this.props.extendData!==e.extendData&&this.mergeTraces(e,"extendData","extendTraces"),(null!==(t=this.props.prependData)&&void 0!==t&&t.length||null!==(r=this.props.extendData)&&void 0!==r&&r.length)&&this.props._dashprivate_onFigureModified(this.props.figure))}},{key:"componentDidUpdate",value:function(e){e.id!==this.props.id&&this.plot(this.props)}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.id,n=e.style,i=e.loading_state;return o().createElement("div",{id:r,key:r,"data-dash-is-loading":i&&i.is_loading||void 0,className:t,style:n},o().createElement(h,{handleHeight:!0,handleWidth:!0,refreshMode:"debounce",refreshOptions:{trailing:!0},refreshRate:50,onResize:this.graphResize}),o().createElement("div",{ref:this.gd,style:{height:"100%",width:"100%"}}))}}],r&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(n.Component);G.propTypes=E(E({},D.GR),{},{prependData:P().arrayOf(P().oneOfType([P().array,P().object])),extendData:P().arrayOf(P().oneOfType([P().array,P().object])),clearState:P().func.isRequired}),G.defaultProps=E(E({},D.OD),{},{prependData:[],extendData:[]});var U=G},91296:function(e,t,r){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,c="object"==typeof self&&self&&self.Object===Object&&self,l=s||c||Function("return this")(),f=Object.prototype.toString,p=Math.max,d=Math.min,h=function(){return l.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=i.test(e);return r||a.test(e)?u(e.slice(2),r?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,r){var n,o,i,a,u,s,c=0,l=!1,f=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function m(e){return c=e,u=setTimeout(_,t),l?b(e):a}function O(e){var r=e-s;return void 0===s||r>=t||r<0||f&&e-c>=i}function _(){var e=h();if(O(e))return w(e);u=setTimeout(_,function(e){var r=t-(e-s);return f?d(r,i-(e-c)):r}(e))}function w(e){return u=void 0,g&&n?b(e):(n=o=void 0,a)}function j(){var e=h(),r=O(e);if(n=arguments,o=this,s=e,r){if(void 0===u)return m(s);if(f)return u=setTimeout(_,t),b(s)}return void 0===u&&(u=setTimeout(_,t)),a}return t=y(t)||0,v(r)&&(l=!!r.leading,i=(f="maxWait"in r)?p(y(r.maxWait)||0,t):i,g="trailing"in r?!!r.trailing:g),j.cancel=function(){void 0!==u&&clearTimeout(u),c=0,n=s=o=u=void 0},j.flush=function(){return void 0===u?a:w(h())},j}},93096:function(e,t,r){var n="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,l="object"==typeof self&&self&&self.Object===Object&&self,f=c||l||Function("return this")(),p=Object.prototype.toString,d=Math.max,h=Math.min,v=function(){return f.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=a.test(e);return r||u.test(e)?s(e.slice(2),r?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return y(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),function(e,t,r){var o,i,a,u,s,c,l=0,f=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError(n);function m(t){var r=o,n=i;return o=i=void 0,l=t,u=e.apply(n,r)}function O(e){return l=e,s=setTimeout(w,t),f?m(e):u}function _(e){var r=e-c;return void 0===c||r>=t||r<0||p&&e-l>=a}function w(){var e=v();if(_(e))return j(e);s=setTimeout(w,function(e){var r=t-(e-c);return p?h(r,a-(e-l)):r}(e))}function j(e){return s=void 0,b&&o?m(e):(o=i=void 0,u)}function P(){var e=v(),r=_(e);if(o=arguments,i=this,c=e,r){if(void 0===s)return O(c);if(p)return s=setTimeout(w,t),m(c)}return void 0===s&&(s=setTimeout(w,t)),u}return t=g(t)||0,y(r)&&(f=!!r.leading,a=(p="maxWait"in r)?d(g(r.maxWait)||0,t):a,b="trailing"in r?!!r.trailing:b),P.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=c=i=s=void 0},P.flush=function(){return void 0===s?u:j(v())},P}(e,t,{leading:o,maxWait:t,trailing:i})}}}]);
//# sourceMappingURL=async-graph.js.map
