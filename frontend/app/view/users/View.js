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
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
