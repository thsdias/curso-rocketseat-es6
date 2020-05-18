/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.soma = soma;\nexports.subtracao = subtracao;\nexports[\"default\"] = multiplicacao;\n\nfunction soma(a, b) {\n  return a + b;\n}\n\nfunction subtracao(a, b) {\n  return a - b;\n}\n\nfunction multiplicacao(a, b) {\n  return a * b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./funcoesII.js":
/*!**********************!*\
  !*** ./funcoesII.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.somar = somar;\nexports.subtrair = subtrair;\nexports.multiplicar = multiplicar;\nexports.dividir = dividir;\n\nfunction somar(a, b) {\n  return a + b;\n}\n\nfunction subtrair(a, b) {\n  return a - b;\n}\n\nfunction multiplicar(a, b) {\n  return a * b;\n}\n\nfunction dividir(a, b) {\n  return a / b;\n}\n\n//# sourceURL=webpack:///./funcoesII.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar _soma = _interopRequireDefault(__webpack_require__(/*! ./soma */ \"./soma.js\"));\n\nvar _funcoes = _interopRequireWildcard(__webpack_require__(/*! ./funcoes */ \"./funcoes.js\"));\n\nvar funcoes = _interopRequireWildcard(__webpack_require__(/*! ./funcoesII */ \"./funcoesII.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n// --------------------------------------------------------------------------------\n// 1 - Instalar webpack atraves do yarn\n//      > yarn add webpack webpack-cli -D\n// 2 - Renomear a chave de Dependencias (ex devDependencies) no arquivo de package.json\n//      obs: As dependencias serao utilizadas apenas em ambiente de Desenv.\n//           Em producao apenas o arquivo bundle.js será publicado.S\n// 3 - Criar arquivo de configuracao do webpack webpack.config.js\n// 4 - Configurar webpack.config.js\n// 5 - Atualizar package.json node scripts para executar todos os scripts a partir do webpack.clear\n// 6 - Executar babel loader\n//      > yarn add babel-loader@8.0.0-beta.0 -D\n// 7 - Executar yarn dev\n// --------------------------------------------------------------------------------\n// Testa configuracoes index.html.\n//import { soma } from './funcoes';\n//console.log(soma(5, 7));\n//import { soma, subtracao } from './funcoes';\n//console.log(soma(5, 7));\n//console.log(subtracao(15, 8));\n// Export defaul - apenas 1 por aqruivo.\nconsole.log((0, _soma[\"default\"])(5, 7)); // Utilizando alias para nome da funcao em export default.\n\nconsole.log((0, _soma[\"default\"])(9, 7)); // Utilizando alias para qualquer funcao.\n\nconsole.log((0, _funcoes.soma)(5, 7));\nconsole.log((0, _funcoes.subtracao)(15, 8)); // Importanto arquivo com funcao default e outras funcoes.\n// multiplicacao: funcao default\n// soma, subtracao: demais funcoes do arquivo\n\nconsole.log((0, _funcoes.soma)(3, 2));\nconsole.log((0, _funcoes.subtracao)(30, 8));\nconsole.log((0, _funcoes[\"default\"])(2, 7)); // Importanto todas as funcoes do arquivo.\n// Opcao 1:\n\nconsole.log((0, funcoes.somar)(7, 2));\nconsole.log((0, funcoes.dividir)(4, 1)); // Opcao 2:\n\nconsole.log(funcoes.somar(7, 2));\nconsole.log(funcoes.dividir(4, 1));\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./soma.js":
/*!*****************!*\
  !*** ./soma.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = soma;\n\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./soma.js?");

/***/ })

/******/ });