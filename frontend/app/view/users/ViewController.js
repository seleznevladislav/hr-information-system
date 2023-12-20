Ext.define('HRSystem.view.users.ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users',

    control: {
        usersPanel: {
            beforerender: 'setRights',
        },
    },

    openUserCard(_view, record) {
        const isCardForNewUser = record.type === 'click';

        if (!isCardForNewUser) {
            const openedUserCard = Ext.ComponentQuery.query(`#userCard${record.getId()}`)[0];

            if (openedUserCard) {
                openedUserCard.show();
                return;
            }
        }

        const userCard = Ext.create('HRSystem.view.users.card.View', {
            title: `Карточка сотрудника  ${!isCardForNewUser && (record.get('name') || '')}`,
            itemId: `userCard${!isCardForNewUser && record.getId()}`,
        });

        if (!isCardForNewUser) {
            userCard.getViewModel().set({ userId: record.getId() });

            const tabsPanel = userCard.down('tabpanel');
            const userBaseInfo = tabsPanel.down('userBaseInformation');

            userBaseInfo.loadRecord(record);
        }

        userCard.show();
    },

    setRights(view) {
        const mainViewModel = view.up('app-main').getViewModel();

        const isAdmin = mainViewModel.get('admin');

        const usersViewModel = view.getViewModel();
        usersViewModel.set({ admin: isAdmin });
    },
});
