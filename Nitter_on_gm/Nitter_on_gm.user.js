// ==UserScript==
// @name            Nitter Redirect on Greasemonkey
// @namespace       https://github.com/Prince-of-sea/UserscriptWorks_mk2/
// @version         0.1.0
// @description:ja  Nitter Redirect拡張機能のUserscript版です
// @author          Prince-of-sea
// @downloadURL     https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/Nitter_on_gm/Nitter_on_gm.user.js
// @updateURL       https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/Nitter_on_gm/Nitter_on_gm.user.js
// @supportURL      https://github.com/Prince-of-sea/UserscriptWorks_mk2/issues
// @license         MIT
// @include         https://twitter.com/*
// @include         https://mobile.twitter.com/*
// @grant           none
// ==/UserScript==

(function () {
	let t1 = 'https://twitter.com'
	let t2 = 'https://mobile.twitter.com'
	let redirect_url = 'https://nitter.snopyta.org' //ここのURLの編集でインスタンス変更可能
	
	let jump_url = window.location.href.replace(t1, redirect_url).replace(t2, redirect_url)
	let jump_url_fixed = jump_url.split('?')[0];
	
	window.location.replace(jump_url_fixed);
})();
