module.exports = {
    css: {
        loaderOptions: {
            less: {
                // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
                lessOptions: {
                    modifyVars: {
                        // 直接覆盖变量
                        'text-color': '#111',
                        'border-color': '#eee',

                        // NavBar
                        'nav-bar-height': '46px',
                        'nav-bar-background-color': '#75c6f5',
                        // 'nav-bar-arrow-size': '16px',
                        'nav-bar-icon-color': '#fff',
                        'nav-bar-text-color': '#fff',
                        // 'nav-bar-title-font-size': '46px',
                        'nav-bar-title-text-color': '#fff',
                        // 'nav-bar-z-index': '1',
                    },
                },
            },
        },
    },
};