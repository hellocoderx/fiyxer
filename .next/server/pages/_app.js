(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/layout/PreLoader.js

const PreLoader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "preloader",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "custom-loader"
        })
    });
};
/* harmony default export */ const layout_PreLoader = (PreLoader);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/_app.js





function App({ Component , pageProps  }) {
    const [loaded, setLoaded] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoaded(true);
        }, 1500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Dev Next Gen"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "assets/image/icon/DevNextGen.NET.jpg",
                        type: "image/x-icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/flaticon.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/fontawesome-5.14.0.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/bootstrap.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/magnific-popup.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/nice-select.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/animate.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/slick.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/style.css"
                    })
                ]
            }),
            !loaded && /*#__PURE__*/ jsx_runtime_.jsx(layout_PreLoader, {}),
            loaded && /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3683));
module.exports = __webpack_exports__;

})();