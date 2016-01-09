# HEROKU SWITCH
## はじめに
herokuって便利だけど、スマホだけだと簡単に再起動できないな。
ボタンを押したら再起動できるツールとかないの？
という思いから、herokuを簡単に再起動できるツールを作ってみました。
現在、絶賛開発中です。

## 前提条件
* herokuアカウントを持っている
* heorokuの管理画面からAPI KEYをメモしている

## 必要なツールなど
以下コマンドを実行してください
    npm install -g cordova
    cordova platform add browser

## ローカルでの起動方法
ローカルで以下コマンドを実行する
    cordova run browser

ブラウザでhttp://localhost:8000にアクセスする