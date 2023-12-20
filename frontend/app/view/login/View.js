Ext.define('HRSystem.view.login.View', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    controller: 'login',
    requires: ['HRSystem.view.login.ViewController'],

    bodyPadding: 10,
    title: 'Авторизация',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',

        items: [
            {
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Пользователь',
                allowBlank: false,
            },
            {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Пароль',
                allowBlank: false,
            },
        ],

        buttons: [
            {
                text: 'Войти',
                formBind: true,
                listeners: {
                    click: 'onLoginClick',
                },
            },
        ],
    },
});
