/**
 * herokuアプリを再起動する
 *
 * @param{String} apiKey APIキー
 * @param{String} appName heorkuアプリ名
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
        $('.restart-button').on('click',handleButtonClick);
    }
};

app.initialize();