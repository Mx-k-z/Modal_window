// Создание модального окна на удаление карточки
$.confirm = function (options) {
	return new Promise((resolve, reject) => {
		let deleteModal = $.modal({
			title: 'Вы действительно хотите удалить?',
			closable: false,
			content: options.content,
			onClose() {
				deleteModal.destroy()
			},
			width: '500px',
			footerBar: [
				{
					text: 'Отмена',
					type: 'secondary',
					handler() {
						deleteModal.close()
						reject()
					},
				},
				{
					text: 'Удалить',
					type: 'danger',
					handler() {
						deleteModal.close()
						resolve()
					},
				},
			],
		})
		setTimeout(() => deleteModal.open(), 100)
	})
}
