var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,r=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,a=f||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function p(t,e,n){var i,o,r,f,u,a,c=0,p=!1,b=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=i,r=o;return i=o=void 0,c=e,f=t.apply(r,n)}function j(t){return c=t,u=setTimeout(w,e),p?g(t):f}function h(t){var n=t-a;return void 0===a||n>=e||n<0||b&&t-c>=r}function w(){var t=d();if(h(t))return T(t);u=setTimeout(w,function(t){var n=e-(t-a);return b?s(n,r-(t-c)):n}(t))}function T(t){return u=void 0,m&&i?g(t):(i=o=void 0,f)}function O(){var t=d(),n=h(t);if(i=arguments,o=this,a=t,n){if(void 0===u)return j(a);if(b)return u=setTimeout(w,e),g(a)}return void 0===u&&(u=setTimeout(w,e)),f}return e=y(e)||0,v(n)&&(p=!!n.leading,r=(b="maxWait"in n)?l(y(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=a=o=u=void 0},O.flush=function(){return void 0===u?f:T(d())},O}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(v(t)){var f="function"==typeof t.valueOf?t.valueOf():t;t=v(f)?f+"":f}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var u=i.test(t);return u||o.test(t)?r(t.slice(2),u?2:8):n.test(t)?NaN:+t}const b=document.getElementById("vimeo-player");new Vimeo.Player(b);
//# sourceMappingURL=02-video.ce691d2c.js.map