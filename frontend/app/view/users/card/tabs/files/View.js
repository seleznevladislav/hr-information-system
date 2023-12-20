Ext.define('HRSystem.view.users.card.tabs.files.View', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userFiles',

    requires: ['HRSystem.store.Documents'],

    title: 'Файлы',
    border: false,

    viewConfig: {
        enableTextSelection: true,
    },

    store: {
        type: 'documents',
        autoLoad: false,
    },

    listeners: {
        beforerender: 'setFilters',
    },

    tbar: [
        '->',
        {
            xtype: 'button',
            text: 'Создать',
            ui: 'default',
            handler: 'uploadFile',
        },
    ],

    columns: [
        {
            header: 'Имя файла',
            dataIndex: 'name',
            flex: 1,
        },
        {
            header: 'Путь',
            dataIndex: 'path',
            flex: 1,
            renderer: 'renderDownloadLink',
        },
        {
            xtype: 'datecolumn',
            header: 'Дата загрузки',
            dataIndex: 'created_date',
            format: 'd M Y',
            flex: 1,
        },
    ],

    bbar: {
        xtype: 'pagingtoolbar',
    },
});
