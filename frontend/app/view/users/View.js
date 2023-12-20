Ext.define('HRSystem.view.users.View', {
    extend: 'Ext.grid.Panel',
    xtype: 'usersPanel',
    itemId: 'usersPanel',
    controller: 'users',
    viewModel: {},

    requires: ['HRSystem.store.Personnel', 'HRSystem.view.users.ViewController'],

    title: 'Сотрудники',

    store: {
        type: 'personnel',
    },

    tbar: [
        {
            xtype: 'textfield',
            emptyText: 'ФИО',
            queryMode: 'remote',
            typeAhead: true,
            editable: true,
            minChars: 1,
            width: 230,
            property: 'name',

            triggers: {
                clear: {
                    cls: 'x-form-clear-trigger',
                    handler: 'resetField',
                },
                search: {
                    cls: 'x-form-search-trigger',
                    handler: 'searchByField',
                },
            },

            listeners: {
                specialkey: 'checkSpecialKey',
            },
        },
        {
            xtype: 'combobox',
            emptyText: 'Должности',
            queryMode: 'remote',
            displayField: 'name',
            valueField: 'id',
            property: 'position_id',
        
            width: 330,

            editable: true,
            forceSelection: true,
            typeAhead: true,

            queryDelay: 100,
            queryCaching: true,
            minChars: 2,

            triggers: {
                clear: {
                    cls: 'x-form-clear-trigger',
                    handler: 'resetField',
                },
                search: {
                    cls: 'x-form-search-trigger',
                    handler: 'searchByField',
                },
            },

            store: {
                type: 'positions',
            },

            listeners: {
                select: 'searchByField',
            },
        },
        '->',
        {
            text: 'Завести нового сотрудника',
            ui: 'default',
            handler: 'openUserCard',
            hidden: true,

            bind: {
                hidden: '{!admin}',
            },
        },
    ],

    columns: [
        { text: 'ФИО', dataIndex: 'name', flex: 1 },
        {
            text: 'Отдел',
            dataIndex: 'Department',
            renderer(value) {
                return value.name;
            },
            flex: 1,
        },
        {
            text: 'Занимаемая должность',
            dataIndex: 'Position',
            renderer(value) {
                return value.name;
            },
            flex: 1,
        },
        { text: 'Рабочая почта', dataIndex: 'email', flex: 1 },
        { text: 'Рабочий телефон', dataIndex: 'phone', flex: 1 },
    ],

    listeners: {
        itemdblclick: 'openUserCard',
    },
});
