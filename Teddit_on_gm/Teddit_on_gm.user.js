// ==UserScript==
// @name            Teddit Please on Greasemonkey
// @namespace       https://github.com/Prince-of-sea/UserscriptWorks_mk2/
// @version         0.1.1
// @description:ja  Teddit Please拡張機能のUserscript版です
// @author          Prince-of-sea
// @downloadURL     https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/Teddit_on_gm/Teddit_on_gm.user.js
// @updateURL       https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/Teddit_on_gm/Teddit_on_gm.user.js
// @supportURL      https://github.com/Prince-of-sea/UserscriptWorks_mk2/issues
// @license         MIT
// @include         https://www.reddit.com/*
// @grant           none
// ==/UserScript==

(function () {
	let t1 = 'https://www.reddit.com'
	let redirect_url = 'https://teddit.zaggy.nl' //ここのURLの編集でインスタンス変更可能
	
	let jump_url = window.location.href.replace(t1, redirect_url)
	
	window.location.replace(jump_url);
})();
