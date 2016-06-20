'use strict';

module.exports = {

    domain: 'http://192.168.3.30:8079',
    getNewsList(page, size, resolve, reject){
        let url = `${this.domain}/api/news/get?pageindex=${page}&pagesize=${size}`;
        $.ajax({
            type: 'GET',
            url,
            dataType: 'json',
            success: data => resolve(data),
            error: err => reject(err)
        });
    },

    getNewsDetail(id, resolve, reject){
        let url = `${this.domain}/api/news/get?id=${id}`;
        $.ajax({
            type: 'GET',
            url,
            dataType: 'json',
            success: data => resolve(data),
            error: err => reject(err)
        });
    },

}