Ext.define('HRSystem.view.users.card.tabs.baseInformation.View', {
    extend: 'Ext.form.Panel',
    alias: 'widget.userBaseInformation',
    viewModel: {},

    requires: ['HRSystem.store.Positions'],

    title: 'Основное',
    scrollable: true,
    border: false,
    bodyPadding: 10,

    defaults: {
        xtype: 'textfield',
        width: '100%',
        labelWidth: 170,
        mandatory: true,
        allowBlank: false,
    },

    items: [
        {
            name: 'id',
            hidden: true,
            readOnly: true,
            allowBlank: true,
        },
        {
            fieldLabel: 'Имя',
            name: 'name',
            allowBlank: false,

            bind: {
                readOnly: '{userId && !admin}',
            },
        },
        {
            fieldLabel: 'Рабочая почта',
            name: 'email',
            allowBlank: false,
            regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,

            bind: {
                readOnly: '{userId && !admin}',
            },
        },
        {
            fieldLabel: 'Рабочий телефон',
            name: 'phone',
            inputMask: '+7 (999) 999-9999',
            emptyText: '+7 (999) 999-9999',
            allowBlank: false,

            bind: {
                readOnly: '{userId && !admin}',
            },
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Должность',
            name: 'position_id',
            displayField: 'name',
            valueField: 'id',

            editable: true,
            forceSelection: true,
            typeAhead: true,

            queryMode: 'remote',
            queryDelay: 100,
            queryCaching: true,
            minChars: 2,
            pageSize: 50,
            triggers: {
                clear: {
                    cls: 'x-form-clear-trigger',
                    handler: 'resetField',
                },
            },
            allowBlank: false,

            bind: {
                readOnly: '{userId && !admin}',
            },

            store: {
                type: 'positions',
            },
        },
    ],

    buttons: [
        '->',
        {
            xtype: 'button',
            text: 'Сохранить',
            formBind: true,
            handler: 'saveUserInformation',

            bind: {
                hidden: '{!admin}',
            },
        },
        {
            text: 'Закрыть',
            handler: 'closeCard',
        },
    ],
});
