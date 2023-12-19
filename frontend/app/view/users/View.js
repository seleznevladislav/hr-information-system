Ext.define('HRSystem.view.users.View', {
    extend: 'Ext.grid.Panel',
    xtype: 'usersPanel',

    requires: [
        'HRSystem.store.Personnel'
    ],

    title: 'Сотрудники',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'ФИО',  dataIndex: 'name', flex: 1 },
        { text: 'Отдел', dataIndex: 'Department', renderer(value) { return value.name; }, flex: 1 },
        { text: 'Занимаемая должность', dataIndex: 'Position', renderer(value) { return value.name; }, flex: 1 },
        { text: 'Рабочая почта', dataIndex: 'email', flex: 1 },
        { text: 'Рабочий телефон', dataIndex: 'phone', flex: 1 },
    ],

    listeners: {
        select: 'onItemSelected',
    },
});
