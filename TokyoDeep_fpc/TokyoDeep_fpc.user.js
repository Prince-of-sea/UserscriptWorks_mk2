// ==UserScript==
// @name            TokyoDeep free page checker
// @namespace       https://github.com/Prince-of-sea/UserscriptWorks_mk2/
// @version         0.1.0
// @description:ja  東京Deep案内の記事欄に有料/無料を示すemojiをつけます
// @author          Prince-of-sea
// @downloadURL     https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/TokyoDeep_fpc/TokyoDeep_fpc.user.js
// @updateURL       https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/TokyoDeep_fpc/TokyoDeep_fpc.user.js
// @supportURL      https://github.com/Prince-of-sea/UserscriptWorks_mk2/issues
// @license         MIT
// @match           https://tokyodeep.info/*
// @match           https://osakadeep.info/*
// @match           https://deepannai.info/*
// @match           https://world.deepannai.info/*
// @grant           none
// ==/UserScript==

//////////////////////////////HTML挿入用関数//////////////////////////////
function note_inner(url, value_inner_func){
	let obj = new XMLHttpRequest();
	obj.open('GET',url,true);
	obj.onreadystatechange = function(){
		if (obj.readyState === 4 && obj.status === 200){
			let txt = obj.responseText;
			if (txt.match(/note.com\/deepannai\/n\//)){ // note記事のurlの有無で判断
				value_inner_func.innerHTML += '<font> 💰</font>';
			} else {
				value_inner_func.innerHTML += '<font> 🆓</font>';
			}
		}
	};
	obj.send(null);
}


//////////////////////////////メイン処理部分//////////////////////////////
let list = document.getElementById('list');

if (list != null) {
	for (i = 0, len = list.children.length; i < len; i++) {
		let value = list.children[i].getElementsByClassName('entry-card-info e-card-info')[0];

		if (value != null) {
			let value_inner = value.getElementsByClassName('post-date')[0];
			let href = list.children[i].getAttribute('href');

			setTimeout( function() { //若干遅延させて503防止
				note_inner(href, value_inner);
			}, i*100 );
		}
	}
}

