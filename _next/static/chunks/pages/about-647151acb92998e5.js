(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{2730:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(2934)}])},2934:function(e,t,r){"use strict";r.r(t);var n=r(2322),o=r(7729),a=r(9097),i=r.n(a),u=r(2556),l=r.n(u);t.default=function(){return(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"Monorepo About page"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:l().main,children:[(0,n.jsx)("h1",{className:l().title,children:"About page"}),(0,n.jsxs)("div",{className:l().grid,children:[(0,n.jsx)(i(),{passHref:!0,href:"/",children:(0,n.jsxs)("a",{className:l().card,children:[(0,n.jsx)("h2",{className:" text-brandblue ",children:"Home \u2192"}),(0,n.jsx)("p",{children:"Go to home Page."})]})}),(0,n.jsx)(i(),{passHref:!0,href:"/project",children:(0,n.jsxs)("a",{className:l().card,children:[(0,n.jsx)("h2",{children:"Project \u2192"}),(0,n.jsx)("p",{children:"Go to Project Page!"})]})})]})]})]})}},1088:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=r(2784))&&a.__esModule?a:{default:a},u=r(4e3),l=r(2203),c=r(8599);var f={};function s(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),a=i.default.useMemo((function(){var t=o(u.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,h=i.default.useRef(d),m=i.default.useRef(p),v=e.children,y=e.replace,_=e.shallow,b=e.scroll,g=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var j=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,x=o(c.useIntersection({rootMargin:"200px"}),3),w=x[0],E=x[1],L=x[2],M=i.default.useCallback((function(e){m.current===p&&h.current===d||(L(),m.current=p,h.current=d),w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[p,j,d,L,w]);i.default.useEffect((function(){var e=E&&r&&u.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,E,g,r,n]);var A={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:i}))}(e,n,d,p,y,_,b,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof g?g:n&&n.locale,H=n&&n.isLocaleDomain&&u.getDomainLocale(p,C,n&&n.locales,n&&n.domainLocales);A.href=H||u.addBasePath(u.addLocale(p,C,n&&n.defaultLocale))}return i.default.cloneElement(t,A)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},8599:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],h=o(a.useState(t?t.current:null),2),m=h[0],v=h[1],y=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:r}))}),[n,m,r,d]),_=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[y,d,_]};var a=r(2784),i=r(1424),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},2556:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},7729:function(e,t,r){e.exports=r(7016)},9097:function(e,t,r){e.exports=r(1088)}},function(e){e.O(0,[774,888,179],(function(){return t=2730,e(e.s=t);var t}));var t=e.O();_N_E=t}]);