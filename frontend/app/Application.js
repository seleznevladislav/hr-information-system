/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('HRSystem.Application', {
    extend: 'Ext.app.Application',

    name: 'HRSystem',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true,
        },
    },

    onAppUpdate() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?', (choice) => {
            if (choice === 'yes') {
                window.location.reload();
            }
        });
    },

    launch() {
        const session = localStorage.getItem('SESSION');

        Ext.widget(session ? 'app-main' : 'login');
    },
});
