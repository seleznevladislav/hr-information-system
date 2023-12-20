Ext.define('HRSystem.view.users.View', {
    extend: 'Ext.grid.Panel',
    xtype: 'usersPanel',
    controller: 'users',

    requires: ['HRSystem.store.Personnel', 'HRSystem.view.users.ViewController'],

    title: 'Сотрудники',

    store: {
        type: 'personnel',
    },

    tbar: [
        '->',
        {
            text: 'Завести нового сотрудника',
            ui: 'default',
            handler: 'openUserCard',
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
