// ==UserScript==
// @name            fxtwitter link for Nitter
// @namespace       https://github.com/Prince-of-sea/UserscriptWorks_mk2/
// @version         1.0.0
// @description:ja  NitterのTwitter遷移ボタンをfxtwitterのリンクコピーボタンに変更します
// @author          Prince-of-sea
// @downloadURL     https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/fxlink4nitter/fxlink4nitter.user.js
// @updateURL       https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/fxlink4nitter/fxlink4nitter.user.js
// @supportURL      https://github.com/Prince-of-sea/UserscriptWorks_mk2/issues
// @license         MIT
// @match           https://nitter.net/*
// @match           https://nitter.uni-sonia.com/*
// @match           https://nitter.unixfox.eu/*
// @match           https://nitter.salastil.com/*
// @match           https://nitter.privacydev.net/*
// @match           https://nitter.poast.org/*
// @match           https://nitter.catsarch.com/*
// @match           https://nitter.cz/*
// @match           https://nitter.x86-64-unknown-linux-gnu.zip/*
// @match           https://n.opnxng.com/*
// @match           https://nitter.d420.de/*
// @match           https://nitter.perennialte.ch/*
// @match           https://nitter.woodland.cafe/*
// @match           https://nitter.ktachibana.party/*
// @match           https://nitter.rawbit.ninja/*
// @match           https://n.biendeo.com/*
// @match           https://nitter.freedit.eu/*
// @match           https://nitter.soopy.moe/*
// @match           https://nitter.eu.projectsegfau.lt/*
// @match           https://nitter.nohost.network/*
// @match           https://nitter.esmailelbob.xyz/*
// @match           https://nitter.adminforge.de/*
// @match           https://nitter.1d4.us/*
// @match           https://nitter.io.lol/*
// @match           https://nitter.in.projectsegfau.lt/*
// @match           https://nitter.mint.lgbt/*
// @match           https://nitter.oksocial.net/*
// @match           https://nitter.projectsegfau.lt/*
// @match           https://nitter.tux.pizza/*
// @match           https://nitter.moomoo.me/*
// @match           https://n.populas.no/*
// @match           https://nitter.no-logs.com/*
// @match           https://nitter.us.projectsegfau.lt/*
// @grant           none
// ==/UserScript==
let icon_bird = document.getElementsByClassName('icon-bird')[0];
let twi_link = icon_bird.getAttribute('href');
let fx_link = twi_link.replace('https://twitter.com/', 'https://fxtwitter.com/')

icon_bird.onclick = function pushIcon() {
	navigator.clipboard.writeText(fx_link);
	alert('コピーしました: ' + fx_link); //アラート不要ならここ消して構いません
}

icon_bird.href = 'javascript:void(0)';
