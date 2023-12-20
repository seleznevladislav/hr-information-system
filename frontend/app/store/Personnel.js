Ext.define('HRSystem.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',

    autoLoad: true,
    remoteFilter: true,
    model: 'HRSystem.model.Personnel',

    proxy: {
        type: 'ajax',
        url: 'users',

        reader: {
            type: 'json',
            rootProperty: 'items',
        },
    },
});
