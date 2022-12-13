"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Web),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: ../../packages/ui/dist/index.js
var dist = __webpack_require__(135);
;// CONCATENATED MODULE: ./pages/index.tsx


function Web({ user  }) {
    // const [user, setUser] = useState(null);
    // const fetchUser = async () => {
    //   const response = await fetch('http://localhost:1337/api/users');
    //   const data = await response.json();
    //   setUser(data);
    // };
    // useEffect(() => {
    //   fetchUser();
    // }, []);
    if (!user) {
        return(/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
            children: "Loading"
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h1", {
                children: "Web www"
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                children: JSON.stringify(user)
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(dist.Button, {
                children: "Hello World"
            })
        ]
    }));
};
async function getStaticProps() {
    // const response = await fetch(`${process.env.STRAPI_URL}/api/users`);
    // const data = await response.json();
    return {
        props: {
            user: {
                data: 'd'
            }
        }
    };
}


/***/ }),

/***/ 135:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var m = Object.create;
var n = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var B = Object.getOwnPropertyNames;
var f = Object.getPrototypeOf, d = Object.prototype.hasOwnProperty;
var a = (t)=>n(t, "__esModule", {
        value: !0
    })
;
var R = (t, o)=>{
    for(var r in o)n(t, r, {
        get: o[r],
        enumerable: !0
    });
}, c = (t, o, r, u)=>{
    if (o && typeof o == "object" || typeof o == "function") for (let e of B(o))!d.call(t, e) && (r || e !== "default") && n(t, e, {
        get: ()=>o[e]
        ,
        enumerable: !(u = s(o, e)) || u.enumerable
    });
    return t;
}, l = (t, o)=>c(a(n(t != null ? m(f(t)) : {}, "default", !o && t && t.__esModule ? {
        get: ()=>t.default
        ,
        enumerable: !0
    } : {
        value: t,
        enumerable: !0
    })), t)
, x = ((t)=>(o, r)=>t && t.get(o) || (r = c(a({}), o, 1), t && t.set(o, r), r)
)(typeof WeakMap != "undefined" ? new WeakMap : 0);
var b = {};
R(b, {
    Button: ()=>p
});
var i = l(__webpack_require__(689));
function p(t) {
    return i.createElement("button", null, t.children);
}
p.displayName = "Button";
module.exports = x(b);
0 && (0);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(605));
module.exports = __webpack_exports__;

})();