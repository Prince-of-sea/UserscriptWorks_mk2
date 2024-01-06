# Google Maps URL on jmty

## なにこれ
ジモティーの取引場所欄にGoogle Mapsへのリンクを追加します

## 使い方
1. ご利用のブラウザに、拡張機能"[Tampermonkey](https://www.tampermonkey.net/index.php?locale=en)"をインストールします
2. 続いて、"[Gmap_jmty.user.js](./Gmap_jmty.user.js?raw=1)"(このスクリプト本体)をインストールします
3. 投稿ページを開き、取引場所欄の横に ![Google maps icon](https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&url=https://www.google.co.jp/maps/&size=16) が出てきたら成功

## 注意事項
個人が制作したものであり、株式会社ジモティーおよびGoogleとは無関係です<br>
本ツールについて、それらの会社に問い合わせたりしないでください<br>

### 既知の不具合
[0.9.0]取引場所が複数指定してある場合、それらをまとめて一つの地名として検索してしまう<br>
→1.0.0で修正

[1.0.0]ジモティー側の変更で機能しなくなってる？
→現在修正中