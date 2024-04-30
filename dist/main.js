/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/HashMap.js":
/*!************************!*\
  !*** ./src/HashMap.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HashMap)\n/* harmony export */ });\nfunction HashMap() {\n  this.map = {};\n  this.hash = hash;\n  this.set = set;\n  this.get = get;\n  this.has = has;\n  this.remove = remove;\n  this.getLength = length;\n  this.clear = clear;\n  this.keys = keys;\n  this.values = values;\n  this.entries = entries;\n}\nfunction hash(key) {\n  let hash = 5381;\n  for (let i = 0; i < key.length; i++) {\n    hash = hash * 33 + key.charCodeAt(i);\n  }\n  return hash >>> 0;\n}\nfunction set(key, value) {\n  const index = this.hash(key);\n  if (!this.map[index]) {\n    this.map[index] = [[key, value]];\n  } else {\n    for (let i = 0; i < this.map[index].length; i++) {\n      if (this.map[index][i][0] === key) {\n        this.map[index][i][1] = value;\n        return;\n      }\n    }\n    this.map[index].push([key, value]);\n  }\n}\nfunction get(key) {\n  const index = this.hash(key);\n  if (!this.map[index]) {\n    return null;\n  } else {\n    for (let i = 0; i < this.map[index].length; i++) {\n      if (this.map[index][i][0] === key) {\n        return this.map[index][i][1];\n      }\n    }\n  }\n}\nfunction has(key) {\n  const index = this.hash(key);\n  if (!this.map[index]) {\n    return false;\n  } else {\n    for (let i = 0; i < this.map[index].length; i++) {\n      if (this.map[index][i][0] === key) {\n        return true;\n      }\n    }\n  }\n  return false;\n}\nfunction remove(key) {\n  const index = this.hash(key);\n  if (!this.map[index]) {\n    return null;\n  } else {\n    for (let i = 0; i < this.map[index].length; i++) {\n      if (this.map[index][i][0] === key) {\n        this.map[index].splice(i, 1);\n        return;\n      }\n    }\n  }\n}\nfunction length() {\n  let count = 0;\n  for (let key in this.map) {\n    count += this.map[key].length;\n  }\n  return count;\n}\nfunction clear() {\n  this.map = {};\n}\nfunction keys() {\n  const keys = [];\n  for (let key in this.map) {\n    keys.push(key);\n  }\n  return keys;\n}\nfunction values() {\n  const values = [];\n  for (let key in this.map) {\n    values.push(this.map[key]);\n  }\n  return values;\n}\nfunction entries() {\n  const entries = [];\n  for (let key in this.map) {\n    entries.push([key, this.map[key]]);\n  }\n  return entries;\n}\n\n//# sourceURL=webpack://web-app-template/./src/HashMap.js?");

/***/ }),

/***/ "./src/HashSet.js":
/*!************************!*\
  !*** ./src/HashSet.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HashSet: () => (/* binding */ HashSet)\n/* harmony export */ });\nfunction HashSet() {\n  this.set = set;\n  this.has = has;\n  this.remove = remove;\n  this.getLength = length;\n  this.clear = clear;\n  this.values = values;\n  this.entries = entries;\n}\nfunction set(value) {\n  if (!this[value]) {\n    this[value] = true;\n  }\n}\nfunction has(value) {\n  return !!this[value];\n}\nfunction remove(value) {\n  if (this[value]) {\n    delete this[value];\n  }\n}\nfunction length() {\n  return Object.keys(this).length;\n}\nfunction clear() {\n  Object.keys(this).forEach(key => {\n    delete this[key];\n  });\n}\nfunction values() {\n  return Object.keys(this);\n}\nfunction entries() {\n  return Object.keys(this).map(key => [key, key]);\n}\n\n//# sourceURL=webpack://web-app-template/./src/HashSet.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HashMap: () => (/* reexport safe */ _HashMap__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   HashSet: () => (/* reexport safe */ _HashSet__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _HashMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HashMap */ \"./src/HashMap.js\");\n/* harmony import */ var _HashSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HashSet */ \"./src/HashSet.js\");\n\n\n\n\n//# sourceURL=webpack://web-app-template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;