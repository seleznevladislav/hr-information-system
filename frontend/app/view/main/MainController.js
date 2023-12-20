Ext.define('HRSystem.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    logOut(view) {
        const main = view.up('app-main');

        Ext.destroy(main);
        localStorage.removeItem('SESSION');

        Ext.create('HRSystem.view.login.View').show();
    },
});
