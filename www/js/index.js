function restartHeroku() {
    console.log('restart heroku!!');
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
        var restartButton = document.querySelector('.restart-button');
        restartButton.addEventListener('click',restartHeroku);
    }
};

app.initialize();