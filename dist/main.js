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

/***/ "./src/booking.js":
/*!************************!*\
  !*** ./src/booking.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst bookingPage = function () {\n    const booking = document.createElement(\"div\")\n    booking.setAttribute('class', 'bookingDiv')\n\n    const bookingItem = document.createElement('div')\n    bookingItem.setAttribute('class', 'bookingItem')\n\n    const bookingImage = document.createElement('img')\n    bookingImage.src = \"../src/asset/image/map.png\"\n    bookingImage.setAttribute('class', 'bookingImage')\n    bookingItem.append(bookingImage)\n\n    const bookingHeader = document.createElement('h3')\n    bookingHeader.setAttribute('class', 'bookingHeader')\n    bookingHeader.innerHTML = 'Contact'\n    bookingItem.append(bookingHeader)\n\n    const bookingText = document.createElement('text')\n    bookingText.setAttribute('class', 'bookingText')\n    bookingText.innerHTML = 'Hafnia <br> Sankt Annæ Plads 36 <br>1250 Copenhagen K<br> Tel. +45 12 34 56 78 <br> hafnia@hafnia.com <br> Opening Hours: <br> Mon-Sat 11:00–23:00'\n    bookingItem.append(bookingText)\n\n\n    booking.append(bookingItem)\n    content.appendChild(booking)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookingPage);\n\n//# sourceURL=webpack://restaurant-page/./src/booking.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// const dynamicPage = document.querySelector(\".dynamicPage\");\n\nconst homePage = function () {\n    const home = document.createElement(\"div\")\n    home.setAttribute('class', 'homeDiv')\n\n    const homeItem = document.createElement('div')\n    homeItem.setAttribute('class', 'homeItem')\n\n    const homeImage = document.createElement('img')\n    homeImage.src = \"../src/asset/image/hafnia.jpeg\"\n    homeImage.setAttribute('class', 'homeImage')\n    homeItem.append(homeImage)\n\n    const homeHeader = document.createElement('h3')\n    homeHeader.setAttribute('class', 'homeHeader')\n    homeHeader.innerHTML = 'Hafnia'\n    homeItem.append(homeHeader)\n\n    const homeText = document.createElement('text')\n    homeText.setAttribute('class', 'homeText')\n    homeText.innerHTML = \"At Hafnia, we give traditional Danish dishes a modern and tasteful overhaul. Respect for good taste and the chef's craft is a driving force in everything we do. This means that we make things from scratch and from proper raw materials. We prioritize that fruit and vegetables are in season, and have selected our suppliers based on clear positions in areas such as sustainability and animal welfare. It is important to us that the meat comes from animals that have lived a decent life in the wild, just as grains and dairy products are organic.\"\n    homeItem.append(homeText)\n\n\n    home.append(homeItem)\n    content.appendChild(home)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _booking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking */ \"./src/booking.js\");\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\nconst basePage = function () {\n    content.style.backgroundImage = \"url('../src/asset/image/background.png')\"\n    // content.style.backgroundRepeat = \"repeat-y\"\n\n    const headerDiv = document.createElement('div')\n    headerDiv.setAttribute('class', 'headerDiv')\n    content.appendChild(headerDiv)\n\n    const headerImage = document.createElement('img')\n    headerImage.setAttribute('src', '../src/asset/image/header.jpg')\n    headerImage.setAttribute('class', 'headerImage')\n    headerDiv.appendChild(headerImage)\n\n    const pageHeadline = document.createElement('h1')\n    pageHeadline.classList.add('pageHeadline')\n    pageHeadline.innerHTML = 'Hafnia'\n    headerDiv.appendChild(pageHeadline)\n\n    const headerBar = document.createElement('div')\n    headerBar.classList.add('headerBar')\n    content.appendChild(headerBar)\n\n    const headerItem1 = document.createElement('h2')\n    headerItem1.classList.add('headerItem')\n    headerItem1.innerHTML = 'Home'\n    headerBar.appendChild(headerItem1)\n\n    const headerItem2 = document.createElement('h2')\n    headerItem2.classList.add('headerItem')\n    headerItem2.innerHTML = 'Menu'\n    headerBar.appendChild(headerItem2)\n\n    const headerItem3 = document.createElement('h2')\n    headerItem3.classList.add('headerItem')\n    headerItem3.innerHTML = 'Booking'\n    headerBar.appendChild(headerItem3)\n\n    const removeLastChild = function () { content.removeChild(content.lastChild) }\n\n    headerItem1.addEventListener('click', () => {\n        removeLastChild()\n        ;(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    })\n\n    headerItem2.addEventListener('click', () => {\n        removeLastChild()\n        ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    })\n\n    headerItem3.addEventListener('click', () => {\n        removeLastChild()\n        ;(0,_booking__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    })\n\n    return\n}\n\n\n\nbasePage()\n// homePage()\n// bookingPage()\n;(0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuPage = function () {\n    const menu = document.createElement(\"div\")\n    menu.setAttribute('class', 'menuDiv')\n\n    const menuItem = document.createElement('div')\n    menuItem.setAttribute('class', 'menuItem')\n\n    const menuImage = document.createElement('img')\n    menuImage.src = \"../src/asset/image/smorrebrod2.webp\"\n    menuImage.setAttribute('class', 'menuImage')\n    const menuHeader = document.createElement('h3')\n    menuHeader.innerHTML = 'Butter-fried Plaice on Rye Bread'\n    menuHeader.setAttribute('class', 'menuHeader')\n    const menuText = document.createElement('text')\n    menuText.setAttribute('class', 'menuText')\n    menuText.innerHTML = 'w. shrimp Salad, pickled onions and herbs - 149 dkk'\n    menuItem.append(menuImage, menuHeader, menuText)\n\n    const menuImage1 = document.createElement('img')\n    menuImage1.src = \"../src/asset/image/smorrebrod1.webp\"\n    menuImage1.setAttribute('class', 'menuImage')\n    const menuHeader1 = document.createElement('h3')\n    menuHeader1.innerHTML = 'Grilled Beef Tenderloin on Rye Bread'\n    menuHeader1.setAttribute('class', 'menuHeader')\n    const menuText1 = document.createElement('text')\n    menuText1.setAttribute('class', 'menuText')\n    menuText1.innerHTML = 'w. béarnaise cream, pickled cucumbers, pickled mushrooms, crispy potato - 79 dkk'\n    menuItem.append(menuImage1, menuHeader1, menuText1)\n\n    const menuImage2 = document.createElement('img')\n    menuImage2.src = \"../src/asset/image/smorrebrod3.webp\"\n    menuImage2.setAttribute('class', 'menuImage')\n    const menuHeader2 = document.createElement('h3')\n    menuHeader2.innerHTML = 'Potato on Rye Bread'\n    menuHeader2.setAttribute('class', 'menuHeader')\n    const menuText2 = document.createElement('text')\n    menuText2.setAttribute('class', 'menuText')\n    menuText2.innerHTML = 'w. smoked mayonnaise, pickled onions, radishes, crispy chips and herbs - 69 dkk'\n    menuItem.append(menuImage2, menuHeader2, menuText2)\n\n    const menuImage3 = document.createElement('img')\n    menuImage3.src = \"../src/asset/image/smorrebrod4.webp\"\n    menuImage3.setAttribute('class', 'menuImage')\n    const menuHeader3 = document.createElement('h3')\n    menuHeader3.innerHTML = 'Avocado on Rye Bread'\n    menuHeader3.setAttribute('class', 'menuHeader')\n    const menuText3 = document.createElement('text')\n    menuText3.setAttribute('class', 'menuText')\n    menuText3.innerHTML = 'w. chive mayonnaise, pickled onions, cabbage, crispy rye chips and pea shoots - 69 dkk'\n    menuItem.append(menuImage3, menuHeader3, menuText3)\n\n\n    menu.append(menuItem)\n    content.appendChild(menu)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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