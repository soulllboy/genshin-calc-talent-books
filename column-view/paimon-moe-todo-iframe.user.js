// ==UserScript==
// @name         paimon-moe-todo-iframe
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       soulboy
// @run-at       context-menu
// @match        https://paimon.moe/todo/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=paimon.moe
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var newHTML = document.createElement ('div');
    newHTML.style.cssText = "position: fixed; left: 0; bottom: 0; z-index: 51;";
    newHTML.innerHTML = '<iframe src="https://soulllboy.github.io/genshin-calc-talent-books/column-view/column" width="285" height="400" style="border-radius: 0 20px 0 0;" />';
    document.querySelector("#sapper").before(newHTML);
})();
