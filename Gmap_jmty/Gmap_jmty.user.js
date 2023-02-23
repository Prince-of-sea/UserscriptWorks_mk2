// ==UserScript==
// @name            Google Maps URL on jmty
// @namespace       https://github.com/Prince-of-sea/UserscriptWorks_mk2/
// @version         1.0.0
// @description     Add a link to Google Maps in the transaction location section of Jimoty.
// @description:ja  ジモティーの取引場所欄にGoogle Mapsへのリンクを追加します
// @author          Prince-of-sea
// @downloadURL     https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/Gmap_jmty/Gmap_jmty.user.js
// @updateURL       https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/Gmap_jmty/Gmap_jmty.user.js
// @supportURL      https://github.com/Prince-of-sea/UserscriptWorks_mk2/issues
// @license         MIT
// @match           https://jmty.jp/*
// @grant           none
// ==/UserScript==


//////////////////////////////メイン処理部分//////////////////////////////
let rowElems = document.getElementsByClassName('unstriped p-article-column')[0].rows;

for (i = 0, len = rowElems.length; i < len; i++) {
	let row_i = rowElems[i];
	let key = (row_i.getElementsByClassName('p-article-column-key')[0].textContent).trim();
	
	if (key == '取引場所' || key == '受け渡し場所'|| key == '地域'){
		let value = row_i.getElementsByClassName('p-article-column-value')[0];

		for (j = 0, len2 = value.children.length; j < len2; j++) {
			let search = (value.children[j].textContent).split(' - ').join(' ').split('、');

			for (k = 0, len3 = search.length; k < len3; k++) {
				let search_word = search[k];

				value.children[j].innerHTML += (`
					<a target="_blank" style="text-decoration: none;" href="https://www.google.co.jp/maps/search/` + search_word + `">
					<img style="opacity: 1.0;"
					 onMouseOver="this.style.opacity=0.6; this.style.scale=0.9;"
					 onMouseOut="this.style.opacity=1.0; this.style.scale=1.0;"
					 src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&url=https://www.google.co.jp/maps/&size=16">
					</a>
				`);
			}
		}
	}
}


//////////////////////////////フッターに説明追加//////////////////////////////
let footer = document.getElementById('footer')
let ul = footer.getElementsByClassName('u-size-s u-margin-l-b')[0]
ul.innerHTML += (`
<li>
<a target="_blank" href="https://github.com/Prince-of-sea/UserscriptWorks_mk2/blob/main/Gmap_jmty/README.md">Userscriptについて</a>
</li>
`);


//////////////////////////////フッターにコピーライト追加//////////////////////////////
let copyright = footer.getElementsByClassName('u-color-gray u-size-xs')[0]
copyright.innerHTML += (`
</br>COPYRIGHT (笑) 2023 
<a style="color:gray;" target="_blank" href="https://github.com/Prince-of-sea">Prince-of-sea.</a> 
ALL RIGHTS RESERVED.
`);