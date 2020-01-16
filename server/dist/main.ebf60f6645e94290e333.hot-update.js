exports.id = "main";
exports.modules = {

/***/ "./routes/auth.ts":
/*!************************!*\
  !*** ./routes/auth.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar auth_1 = __webpack_require__(/*! ~controller/auth */ \"./controllers/auth.ts\");\r\nvar passport_1 = __importDefault(__webpack_require__(/*! passport */ \"passport\"));\r\nvar router = express_1.Router();\r\nrouter.post('/login', auth_1.login);\r\nrouter.get('/logout', passport_1.default.authenticate('jwt', { session: false }), auth_1.logout);\r\nrouter.post('/register', auth_1.register);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./routes/auth.ts?");

/***/ })

};