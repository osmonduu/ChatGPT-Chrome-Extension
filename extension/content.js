/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ChatGPTExtension = /*#__PURE__*/function () {
  function ChatGPTExtension() {
    _classCallCheck(this, ChatGPTExtension);
    _defineProperty(this, "prompt1", "insert into textbox here");
    _defineProperty(this, "prompt2", "second prompt to insert into textbox here");
    this.handleRequest();
  }
  _createClass(ChatGPTExtension, [{
    key: "handleRequest",
    value: function handleRequest() {
      var _this = this;
      chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.action == "PROMPT1") _this.promptToChatGPT(_this.prompt1);
        if (request.action == "PROMPT2") _this.promptToChatGPT(_this.prompt2);
        console.log(request);
      });
    }
  }, {
    key: "promptToChatGPT",
    value: function promptToChatGPT(prompt) {
      console.log("we are prompting to chatgpt");
      var input = document.querySelector("textarea");
      input.value = prompt;
      document.querySelector("textarea~button").click();
    }
  }]);
  return ChatGPTExtension;
}();
var CGPTExtension = new ChatGPTExtension();
/******/ })()
;
//# sourceMappingURL=content.js.map