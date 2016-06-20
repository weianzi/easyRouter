'use strict';
let webApi = require('./webApi');
let loadingView = `<div class='loading'>loading</div>`;

module.exports = {
    url: '/home',
    className: 'home',
    render: function() {
        new Promise((resolve, reject) => {
                webApi.getNewsList(1, 10, resolve, reject)
            })
            .then(response => renderNewsList(response))
            .catch(err => console.log(err))
        return loadingView;
    },
    bind() {
        $('.container').on('click', '.home>h1', function() {
        })
    }
};

function renderNewsList(data) {
    let dataArr = data.List;
    if (dataArr.length > 0) {
        let html = '';
        $.each(dataArr, (index, item) => {
            let subTitle = item.SubTitle ? `<h2>${item.SubTitle}</h2>` : '';
            let source = item.Source ? `<span class="source">来源：${item.Source}</span>` : '';
            let itemHtml = `
                <div class="news-list-item">
                    <h1><a href="#/news/${item.Id}">${item.Title}</a></h1>
                    ${subTitle}
                    <p>${source}<span>发布时间：${item.PublishedTime}</span></p>
                </div>
            `
            html += itemHtml;
        })
        $('#container>.home').html(html);
    }
}
