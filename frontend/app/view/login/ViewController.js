Ext.define('HRSystem.view.login.ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    async onLoginClick(button) {
        const form = this.lookup('form');

        const data = await this.validateData(form);

        if (data) {
            localStorage.setItem('SESSION', true);

            this.getView().destroy();

            const mainPanel = Ext.widget('app-main').show();

            mainPanel.getViewModel().set({ admin: data.admin });
        } else {
            const loginWindow = button.up('login');

            const passwordField = loginWindow.down('[name="password"]');
            passwordField.markInvalid('Данные неверны');

            const usernameField = loginWindow.down('[name="username"]');
            usernameField.markInvalid('Данные неверны');
        }
    },

    validateData(form) {
        return new Promise((resolve) => {
            try {
                form.submit({
                    url: '/login',

                    success(_view, operation) {
                        if (operation.result[0]) {
                            resolve(operation.result[0]);
                        }

                        resolve(false);
                    },

                    failure(_view, operation) {
                        if (operation.result[0]) {
                            resolve(operation.result[0]);
                        }

                        resolve(false);
                    },
                });
            } catch (error) {
                console.warn(error, 'validateData');
            }
        });
    },
});
