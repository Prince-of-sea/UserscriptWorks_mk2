// ==UserScript==
// @name            Keepa on Greasemonkey
// @namespace       https://github.com/Prince-of-sea/UserscriptWorks_mk2/
// @version         0.1.0
// @description:ja  Keepa拡張機能のUserscript版です
// @author          Prince-of-sea
// @downloadURL     https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/Keepa_on_gm/Keepa_on_gm.user.js
// @updateURL       https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/Keepa_on_gm/Keepa_on_gm.user.js
// @supportURL      https://github.com/Prince-of-sea/UserscriptWorks_mk2/issues
// @license         MIT
// @include         https://www.amazon*/*
// @grant           none
// ==/UserScript==

(function() {
	const amazon_url = location.href.match(/^https:\/\/www\.amazon\.(.+?)\/(.+?\/)?(dp\/|gp\/product\/)([0-9A-z]+)/)
	if (amazon_url) {
		const asin = amazon_url[4];
		const Keepa_width = Math.floor(window.outerWidth * 0.6875)

		document.getElementById("hover-zoom-end").innerHTML = `
			<div style="min-width: 935px; max-width: ` + Keepa_width + `px; display: flex; height: 410px; border: 0px none; margin: 10px 0px 0px;" id="keepaGMContainer">
				<iframe style="width: 100%; height: 100%; border:0 none;overflow: hidden;" src="https://keepa.com/iframe_addon.html#5-0-` + asin + `" scrolling="no" id="keepaGM" data-ruffle-polyfilled=""></iframe>
			</div>
		`
	}
})();
