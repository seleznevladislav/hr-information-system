Ext.define('HRSystem.view.positions.View', {
    extend: 'Ext.grid.Panel',
    xtype: 'positionsPanel',

    requires: ['HRSystem.store.Positions'],

    title: 'Должности',

    store: {
        type: 'positions',
    },

    columns: [
        { text: 'Наименование', dataIndex: 'name', flex: 1 },
        { text: 'Кол-во вакатных мест', dataIndex: 'vacant_places', flex: 1 },
        { text: 'Кол-во всего мест', dataIndex: 'total_places', flex: 1 },
    ],

    listeners: {
        select: 'onItemSelected',
    },

    bbar: {
        xtype: 'pagingtoolbar',
    },
});
