/**
 * herokuアプリを再起動する
 *
 * @param {String} apiKey APIキー
 * @param {String} appName heorkuアプリ名
 */
function restartHeroku(apiKey, appName) {
    $.ajax('https://api.heroku.com/apps/'+appName+'/dynos',{
        headers:{
            Accept: 'application/vnd.heroku+json; version=3',
            Authorization: 'Bearer '+apiKey
        },
        global:false,
        method: 'DELETE'
    }).then(function(){
        console.log('success');
    }).fail(function(){
        console.log('error');
    });
}

/**
 * 指定した入力項目に対して、画面を閉じても直前の値が入るようにする
 *
 * @param {String} selector 入力項目を特定するjQueryセレクタ
 * @param {String} propName 入力値を保存するローカルストレージのキー
 */
function bindLocalStrage(selector, propName) {
    var input = $(selector);
    input.val(localStorage[propName]);
    input.on('change', function(e){
        localStorage[propName] = e.target.value;
    });
}

/**
 * RESTARTボタンを押下した際のイベント
 *
 */
function handleButtonClick() {
    var apiKey = $('.api-key').val();
    var appName = $('.app-name').val();
    restartHeroku(apiKey, appName);
}

var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        bindLocalStrage('.api-key', 'apiKey');
        bindLocalStrage('.app-name', 'apiName');
        $('.restart-button').on('click',handleButtonClick);
    }
};

app.initialize();