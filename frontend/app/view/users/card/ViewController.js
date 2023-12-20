Ext.define('HRSystem.view.users.card.ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userCard',

    closeCard(button) {
        button.up('window').close();
    },

    resetField(formfield) {
        formfield.setValue(null);
    },

    saveUserInformation(button) {
        const form = button.up('userBaseInformation');

        const record = form.getRecord();

        if (!record) {
            try {
                form.submit({
                    url: '/users/add/',

                    success(_view, operation) {
                        Ext.Msg.show({
                            title: 'Уведомление',
                            message: 'Сотрудник был добавлен в систему!<br> Добавьте документы',
                            buttons: Ext.Msg.OK,
                        });

                        form.up('userCard').getViewModel().set({ userId: operation.result[0].id });

                        Ext.destroy(form);

                        const usersPanel = Ext.ComponentQuery.query('usersPanel')[0];
                        usersPanel.getStore().reload();
                    },

                    failure(_view, operation) {
                        Ext.Msg.show({
                            title: 'Уведомление',
                            message: 'Сотрудник был добавлен в систему!<br> Добавьте документы',
                            buttons: Ext.Msg.OK,
                        });

                        form.up('userCard').getViewModel().set({ userId: operation.result[0].id });

                        Ext.destroy(form);

                        const usersPanel = Ext.ComponentQuery.query('usersPanel')[0];
                        usersPanel.getStore().reload();
                    },
                });
            } catch (error) {
                console.warn(error, 'saveUserInformation');
            }
        }

        try {
            form.submit({
                url: '/users/update/',

                success() {
                    Ext.Msg.show({
                        title: 'Уведомление',
                        icon: Ext.Msg.INFO,
                        message: 'Данные были обновлены',
                        buttons: Ext.Msg.OK,
                    });

                    Ext.destroy(form);

                    const usersPanel = Ext.ComponentQuery.query('usersPanel')[0];
                    usersPanel.getStore().reload();
                },

                failure() {
                    Ext.Msg.show({
                        title: 'Уведомление',
                        icon: Ext.Msg.INFO,
                        message: 'Данные были обновлены',
                        buttons: Ext.Msg.OK,
                    });

                    Ext.destroy(form);

                    const usersPanel = Ext.ComponentQuery.query('usersPanel')[0];
                    usersPanel.getStore().reload();
                },
            });
        } catch (error) {
            console.warn(error, 'saveUserInformation');
        }
    },

    uploadFile(button) {
        const filesGrid = button.up('grid');
        const userId = filesGrid.up('userCard').getViewModel().get('userId');

        const fileForm = Ext.create({
            xtype: 'window',
            title: 'Выберите файл',
            modal: true,
            closable: true,
            closeAction: 'destroy',
            resizable: false,
            width: 400,
            layout: 'fit',

            items: [
                {
                    xtype: 'form',
                    border: false,
                    defaults: {
                        labelAlign: 'right',
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'user_id',
                            hidden: true,
                        },
                        {
                            xtype: 'filefield',
                            emptyText: 'Выберите файл',
                            width: 375,
                            allowBlank: false,
                            margin: 5,
                            name: 'file',
                            buttonText: 'Обзор',
                            blankText: 'Необходимо выбрать файл!',
                            buttonConfig: {
                                iconCls: 'upload-icon',
                            },
                        },
                    ],

                    buttons: [
                        {
                            formBind: true,
                            text: 'Загрузить',
                            icon: 'resources/images/icons/add.png',
                            handler(button) {
                                const form = button.up('form').getForm();

                                try {
                                    form.submit({
                                        url: '/users/files/',

                                        success() {
                                            Ext.destroy(fileForm);

                                            filesGrid.getStore().reload();
                                        },

                                        failure() {
                                            Ext.destroy(fileForm);

                                            filesGrid.getStore().reload();
                                        },
                                    });
                                } catch (error) {
                                    console.warn(error, 'uploadFile');
                                }
                            },
                        },
                    ],
                },
            ],
        });

        const textfieldId = fileForm.down('[name="user_id"]');
        textfieldId.setValue(userId);

        fileForm.show();
    },

    setFilters(view) {
        const userCard = view.up('userCard');
        const userId = userCard.getViewModel().get('userId');

        const store = view.getStore();

        store.addFilter({
            property: 'user_id',
            operator: '=',
            value: userId,
        });

        store.load();
    },

    renderDownloadLink(value, _meta, record) {
        const path = record.get('path');

        return `<a href=# onclick="window.open('${path}', '_blank')">${value}</a>`;
    },
});
