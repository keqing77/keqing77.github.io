"use strict";
var navbar = {
    hideOnScroll: true,
    title: '前端宝藏之站',
    logo: {
        alt: 'Logo',
        src: '/img/logo.jpg'
    },
    items: [
        {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            // label: 'Tutorial',
            label: '教程'
        },
        { to: 'blog', label: '博客', position: 'left' },
        {
            type: 'search',
            position: 'left'
        },
        // Please keep GitHub link to the right for consistency.
        {
            to: 'navigation',
            label: '资源导航',
            position: 'right'
        },
        {
            type: 'dropdown',
            label: '面试资料',
            position: 'right',
            items: [
                {
                    label: 'HTML面试题',
                    to: '/interview/html'
                },
                {
                    label: 'CSS面试题',
                    to: '/interview/css'
                },
                {
                    label: 'JavaScript面试题',
                    to: '/interview/javascript'
                },
                {
                    label: 'Javascript手撕代码',
                    to: '/interview/javascript-hand'
                },
                {
                    label: 'Vue面试题',
                    to: '/interview/vue'
                },
                {
                    label: 'React面试题',
                    to: '/interview/react'
                },
                {
                    label: 'Git面试题',
                    to: '/interview/git'
                },
                {
                    label: '浏览器面试题',
                    to: '/interview/browser'
                },
                {
                    label: '计网面试题',
                    to: '/interview/network'
                },
                {
                    label: '大厂面试真题',
                    to: '/interview/company'
                },
                {
                    label: '各地互联网公司',
                    to: '/interview/city'
                },
            ]
        },
        {
            to: 'friendLink',
            label: '友情链接',
            position: 'right'
        },
        {
            href: 'about',
            label: '关于我',
            position: 'right'
        },
        {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
                {
                    to: 'https://my-site.com/help-us-translate',
                    label: '简体中文'
                },
                {
                    to: 'https://my-site.com/help-us-translate',
                    label: 'Help us translate'
                },
            ]
        },
    ]
};
module.exports = navbar;
