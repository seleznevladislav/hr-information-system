Ext.define('HRSystem.store.Documents', {
    extend: 'Ext.data.Store',
    alias: 'store.documents',

    autoLoad: false,
    remoteFilter: true,

    proxy: {
        type: 'ajax',
        url: 'documents',

        reader: {
            type: 'json',
            rootProperty: 'items',
        },
    },
});
