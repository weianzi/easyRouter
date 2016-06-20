'use strict';
let webApi = require('./webApi');
let loadingView = `<div class='loading'>loading</div>`;

module.exports = {
    url: '/news/:id',
    className: 'news',
    render: function() {
        console.log(this.params.id)
        new Promise((resolve, reject) => {
                webApi.getNewsDetail(this.params.id, resolve, reject)
            })
            .then(response => renderNews(response))
            .catch(err => console.log(err))
        return loadingView;
    },
    bind: function() {
    }
};

function renderNews(data) {
    let html = '';
    if (data) {
        let subTitle = data.SubTitle ? `<h2>${data.SubTitle}</h2>` : '';
        let source = data.Source ? `<span class="source">来源：${data.Source}</span>` : '';
        let cover = data.Cover ? `<img src='${data.Cover}'>` : '';
        html = `
            <h1>${data.Title}</h1>
            ${subTitle}
            <p>${source}发布时间：<span>${data.PublishedTime}</span></p>
            ${cover}
            <div class='content'>${data.Content}</div>
        `
        $('#container>.news').html(html)
    }
}
