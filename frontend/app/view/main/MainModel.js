/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('HRSystem.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Кадровая служба',

        baseInformation: `
		<div class="base-information">
			<h1>О Компании</h1> 
			<p>Данная работа была выполнена в рамках дисциплины "Управление нормативно-справочной информацией" Московского Политехнического университета.</p>
			<p>4 курс, группа 201-323</p>
			<p>Селезнев Владислав Константинович</p>
			<p>Перейдя по <a href="https://github.com/seleznevladislav/hr-information-system">ссылке</a>, вы найдете полный код программы</p>
		</div>`,

        settings: 'Раздел в разработке',

        admin: false,
    },
});
