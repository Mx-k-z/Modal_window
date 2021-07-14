// Параметры для модального окна
const modal = $.modal({
	title: 'Max modal',
	closable: true,
	width: '500px',
	content: `<p> Тестовый контент </p>`,
	footerBar: [
		{
			text: 'btnOk',
			type: 'primary',
			handler() {
				modal.close()
			},
		},
		{
			text: 'btnCancel',
			type: 'danger',
			handler() {
				modal.close()
			},
		},
	],
})

btnOpen.addEventListener('click', modal.open)

const cars = [
	{
		id: 1,
		price: 20,
		title: `Audi`,
		img: 'https://cdn.motor1.com/images/mgl/kJ74N/s1/2020-audi-rs7-sportback-in-glacier-white.jpg',
	},
	{
		id: 2,
		price: 10,
		title: `Volvo`,
		img: 'https://fix-my-car.ru/wp-content/uploads/2018/07/xc90-2-rear.jpg',
	},
	{
		id: 3,
		price: 50,
		title: `Porsche`,
		img: 'https://cdn.motor1.com/images/mgl/z23Jq/s1/porsche-911-turbo-s.jpg',
	},
]

// <input id='textInner' style='width:400px' value='Введи текст и нажми Install...'>
