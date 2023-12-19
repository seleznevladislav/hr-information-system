Ext.define('HRSystem.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'HRSystem.view.main.MainController',
        'HRSystem.view.main.MainModel',

        'HRSystem.view.positions.View',
        'HRSystem.view.users.View',
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax',
        },
        title: {
            bind: {
                text: '{name}',
            },
            flex: 0,
        },
        iconCls: 'fa-th-list',
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none',
        },
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top',
        },
        wide: {
            headerPosition: 'left',
        },
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'center',
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120,
                },
            },
        },
    },

    items: [
        {
            title: 'О компании',
            iconCls: 'fa-home',

            bind: {
                html: '{baseInformation}',
            },
        },
        {
            title: 'Сотрудники',
            iconCls: 'fa-user',

            items: [
                {
                    xtype: 'usersPanel',
                },
            ],
        },
        {
            title: 'Должности',
            iconCls: 'fa-book',

            items: [
                {
                    xtype: 'positionsPanel',
                },
            ],
        },
        {
            title: 'Settings',
            iconCls: 'fa-cog',
            bind: {
                html: '{settings}',
            },
        },
    ],
});
