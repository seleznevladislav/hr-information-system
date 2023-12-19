/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'HRSystem.Application',

    name: 'HRSystem',

    requires: [
        // This will automatically load all classes in the HRSystem namespace
        // so that application classes do not need to require each other.
        'HRSystem.*',
		'HRSystem.view.main.Main',
    ],

    // The name of the initial view to create.
    mainView: 'HRSystem.view.main.Main'
});
