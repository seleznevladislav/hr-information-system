Ext.define('HRSystem.view.users.card.View', {
    extend: 'Ext.window.Window',
    alias: 'widget.userCard',
    controller: 'userCard',
    viewModel: 'userCard',

    requires: [
        'HRSystem.view.users.card.ViewController',
        'HRSystem.view.users.card.ViewModel',
        'HRSystem.view.users.card.tabs.baseInformation.View',
        'HRSystem.view.users.card.tabs.files.View',
    ],

    width: 600,
    height: 700,
    closeAction: 'destroy',
    border: false,
    layout: 'fit',

    items: [
        {
            xtype: 'tabpanel',
            border: false,

            items: [
                {
                    title: 'Основное',
                    xtype: 'userBaseInformation',
                },
                {
                    title: 'Файлы',
                    xtype: 'userFiles',
                    disabled: true,

                    bind: {
                        disabled: '{!userId}',
                    },
                },
            ],
        },
    ],
});
