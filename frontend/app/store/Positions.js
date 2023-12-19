Ext.define('HRSystem.store.Positions', {
    extend: 'Ext.data.Store',
    alias: 'store.positions',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'positions',

        reader: {
            type: 'json',
            rootProperty: 'items',
        },
    },
});
