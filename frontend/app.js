/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'HRSystem.Application',

    name: 'HRSystem',

    requires: [
        'HRSystem.*',
        'HRSystem.view.login.View',
    ],
});
