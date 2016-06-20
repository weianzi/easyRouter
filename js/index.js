'use strict';
require('../css/main.less');
let news = require('./news');
let home = require('./home');

$(function() {
    let router = new Router({
        container: '#container',
        enterTimeout: 250,
        leaveTimeout: 250
    });

    router
        .push(home)
        .push(news)
        .setDefault('/home')
        .init();
});
