exports.id = "main";
exports.modules = {

/***/ "./routes/category.ts":
/*!****************************!*\
  !*** ./routes/category.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar passport_1 = __importDefault(__webpack_require__(/*! passport */ \"passport\"));\r\nvar category_1 = __webpack_require__(/*! ~controller/category */ \"./controllers/category.ts\");\r\nvar router = express_1.Router();\r\nrouter.post('/base/add', passport_1.default.authenticate('jwt', { session: false }), category_1.addBaseCategory);\r\nrouter.get('/base/get', passport_1.default.authenticate('jwt', { session: false }), category_1.getBaseCategory);\r\nrouter.post('/product/add', passport_1.default.authenticate('jwt', { session: false }), category_1.addProductCategory);\r\nrouter.get('/product/get', passport_1.default.authenticate('jwt', { session: false }), category_1.getProductCategory);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./routes/category.ts?");

/***/ })

};