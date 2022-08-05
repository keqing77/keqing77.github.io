"use strict";
var footer = {
    style: 'dark',
    links: [
        {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
                {
                    label: 'Privacy',
                    href: 'https://opensource.facebook.com/legal/privacy/'
                },
                {
                    label: 'Terms',
                    href: 'https://opensource.facebook.com/legal/terms/'
                },
                {
                    label: 'Data Policy',
                    href: 'https://opensource.facebook.com/legal/data-policy/'
                },
                {
                    label: 'Cookie Policy',
                    href: 'https://opensource.facebook.com/legal/cookie-policy/'
                },
            ]
        },
        {
            title: 'Social',
            items: [
                {
                    label: 'Juejin',
                    href: 'https://juejin.cn/user/994371074524862'
                },
                {
                    label: 'Bilbil',
                    href: 'https://space.bilibili.com/40744412?spm_id_from=333.1007.0.0'
                },
                {
                    label: 'Zhihu',
                    href: 'https://www.zhihu.com/people/lai-zi-la-fu-de-lu-de-ma-nong'
                },
            ]
        },
        {
            title: 'More',
            items: [
                {
                    label: 'Blog',
                    to: 'blog'
                },
                {
                    label: 'GitHub',
                    href: 'https://github.com/lalalavard'
                },
                {
                    label: 'Nowcode',
                    href: 'https://www.nowcoder.com/profile/104030622'
                },
            ]
        },
    ],
    logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com'
    },
    // Please do not remove the credits, help to publicize Docusaurus :)
    copyright: "Copyright \u00A9 ".concat(new Date().getFullYear(), " Lavard. | Powered by Docusaurus on Kubernetes | <a href=\"https://beian.miit.gov.cn/\">\u7CA4ICP\u59072021040275\u53F7</a>")
};
module.exports = footer;
