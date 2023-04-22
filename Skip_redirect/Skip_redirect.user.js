// ==UserScript==
// @name            Skip Google redirect-alert
// @namespace       https://github.com/Prince-of-sea/UserscriptWorks_mk2/
// @version         0.1.0
// @description:ja  Google検索時の"リダイレクトの警告"を自動で飛ばします
// @author          Prince-of-sea
// @downloadURL     https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/Skip_redirect/Skip_redirect.user.js
// @updateURL       https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/Skip_redirect/Skip_redirect.user.js
// @supportURL      https://github.com/Prince-of-sea/UserscriptWorks_mk2/issues
// @license         MIT
// @include         https://www.google.com/url?*
// @grant           none
// ==/UserScript==

(function () {

	// リダイレクトの警告自動スキップ
	if (location.href.match(/^https:\/\/www\.google\..+\/url/)) { 
		let redirect_url = document.querySelector("a");
		
		if (redirect_url){
			window.location.replace(redirect_url.href);
		}
	}
	
})();