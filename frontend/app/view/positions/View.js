Ext.define('HRSystem.view.positions.View', {
    extend: 'Ext.grid.Panel',
    xtype: 'positionsPanel',

    requires: [
        'HRSystem.store.Personnel'
    ],

    title: 'Должности',

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
