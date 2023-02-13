// ==UserScript==
// @name            CatShanty2 csv converter for EGS
// @namespace       http://tampermonkey.net/
// @version         0.9.0
// @description     Make EGS information easily available on CatShanty2.
// @description:ja  批評空間の情報をCatShanty2で簡単に利用できるようにします
// @author          Prince-of-sea
// @downloadURL     https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/CS2csv4EGS/CS2csv4EGS.user.js
// @updateURL       https://raw.githubusercontent.com/Prince-of-sea/UserscriptWorks_mk2/main/CS2csv4EGS/CS2csv4EGS.user.js
// @supportURL      https://github.com/Prince-of-sea/UserscriptWorks_mk2/issues
// @license         MIT
// @match           https://erogamescape.dyndns.org/~ap2/ero/toukei_kaiseki/game.php?game=*
// @grant           none
// ==/UserScript==

//////////////////////////////ユーザー定義部分 ここから//////////////////////////////

// csv保存時の"機種名"です
const hardware = 'windows';

// csv保存時の"メディア"です
const media = 'windows実行ファイル';

// csv保存時の"国名"です 多分そのままでいいと思います
const country = 'JP';

// csv保存時の"拡張R指定"で、18禁の場合に使う変数です
const extend_R18 = '_ 18才以上';

// csv保存時の"拡張R指定"で、全年齢の場合に使う変数です
const extend_All = '_ 審査外';


//////////////////////////////ユーザー定義部分 ここまで//////////////////////////////

//////////////////////////////作品情報取得 ここから//////////////////////////////
let title_list = document.getElementById('soft-title').children;
title_list = Array.from(title_list);

const title = title_list[0].textContent
const brand = document.getElementById('brand').children[1].textContent
const sellday = document.getElementById('sellday').children[1].textContent

let extend = '';
let extend_num = '';
if ((document.getElementById('erogame').children[1].textContent).includes('非18禁')){
	extend = extend_All;
} else {
	extend = extend_R18;
	extend_num = '1';
};
//////////////////////////////作品情報取得 ここまで//////////////////////////////

//////////////////////////////クリエイター情報取得 ここから//////////////////////////////
const creater = document.getElementById('creater_infomation_table');
let creater_text = '';

if (creater.firstChild != null){
	const creater_list = creater.firstChild.childNodes;

	creater_list.forEach(c => {
		let ctID = c.firstChild.textContent;
		let c_list = c.childNodes[1].children;

		let last_creater = '';
		let last_creater_span = '';

		c_list = Array.from(c_list);

		c_list.forEach( function (creater) {
			let creater_tagName = creater.tagName;
			if (creater_tagName == 'A'){

				//一個前のやつ代入
				if (last_creater != ''){
					if (last_creater_span == ''){
						last_creater_span = '[' + ctID + ']';
					} else {
						last_creater_span = '[' + ctID + ' - ' + last_creater_span + ']';
					}
					creater_text += last_creater_span + last_creater + ';';
				}

				last_creater = creater.textContent.replace(/;/g, '；');
				last_creater_span = '';
			}

			if (creater_tagName == 'SPAN'){
				last_creater_span = creater.textContent.replace(/;/g, '；').replace(/\(/g, '').replace(/\)/g, '');
			}
		});

		//一個前のやつ代入 - 上のやつと同一
		if (last_creater != ''){
			if (last_creater_span == ''){
				last_creater_span = '[' + ctID + ']';
			} else {
				last_creater_span = '[' + ctID + ' - ' + last_creater_span + ']';
			}
			creater_text += last_creater_span + last_creater + ';';
		}

	});
}
// console.log(creater_text);
//////////////////////////////クリエイター情報取得 ここまで//////////////////////////////

//////////////////////////////ボタン表示 ここから//////////////////////////////
const info = document.getElementById('creater_infomation');
const new_element = document.createElement('span');

new_element.innerHTML = `
<h3>CatShanty2用拡張メニュー</h3>
<p>起動ファイル(.exe)の絶対パス：<input type="text" id="FilePath" name="FilePath" size="70"></p>

<p>
ジャンル：<input type="text" id="genre" name="genre" value="アドベンチャー" size="12">
プレイ人数：<input type="text" id="player" name="player" value="1" size="3">
</p>

<p>
批評空間のブランド名はメーカー名と：
<input type="text" id="maker" name="maker" value="同じ" size="15">
// 違う場合はメーカー名を入力
</p>

<p>
批評空間のブランド名は開発元名と：
<input type="text" id="developer" name="developer" value="同じ" size="15">
// 違う場合は開発元名を入力
</p>

<button id="btn1" type="button">クリップボードにコピー(クリエイターのみ)</button>
<button id="btn2" type="button">クリップボードにコピー(csv)</button>
`;
info.appendChild(new_element);
//////////////////////////////ボタン表示 ここまで//////////////////////////////

//////////////////////////////操作関連 ここから//////////////////////////////
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');


function csv_create(fp) {
	let player = document.getElementById('player').value;
	let genre = document.getElementById('genre').value;

	let maker = ''
	let developer = ''

	if (document.getElementById('maker').value == '同じ') {
		maker = brand;
	} else {
		maker = document.getElementById('maker').value.replace(/;/g, '；');
	}

	if (document.getElementById('developer').value == '同じ') {
		developer = brand;
	} else {
		developer = document.getElementById('developer').value.replace(/;/g, '；');
	}

	return (fp+','+hardware+','+media+','+title+',,'+maker+','+developer+','+country+',,'+extend_num+','+sellday+','+genre+',,'+creater_text+',,,,,,,'+player+','+extend+',,');
}


btn1.addEventListener('click', () => {
	let copy_text = creater_text;
	navigator.clipboard.writeText(copy_text);
	btn1.innerHTML = '☆コピーしました☆';
	setTimeout(() => (btn1.innerHTML = 'クリップボードにコピー(クリエイターのみ)'), 1500);
});


btn2.addEventListener('click', () => {
	let FilePath = (document.getElementById('FilePath')).value.replace(/\"/g, '').replace(/\'/g, "");

	if (FilePath == ''){
		btn2.innerHTML = '☆パスを入力してね☆';
	} else if ( FilePath.includes('*')|(FilePath.includes('?'))|(FilePath.includes('<'))|(FilePath.includes('>'))){
		btn2.innerHTML = '☆パスの入力ミスがあるよ☆';
	} else {
		let copy_text = csv_create(FilePath)
		navigator.clipboard.writeText(copy_text);
		btn2.innerHTML = '☆コピーしました☆';
	}
	setTimeout(() => (btn2.innerHTML = 'クリップボードにコピー(csv)'), 1500);
});

//////////////////////////////操作関連 ここまで//////////////////////////////