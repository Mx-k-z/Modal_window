let cars = [
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

// Параметры для модального окна
let priceModal = $.modal({
	title: 'Цена товара',
	closable: true,
	width: '500px',
	footerBar: [
		{
			text: 'ОК',
			type: 'primary',
			handler() {
				priceModal.close()
			},
		},
	],
})

// Создание карточки
let createCar = car =>
	`<div class="col">
		 <div class="card">
			 <img
				 style="height: 600px"
				 class="card-img-top"
			 	 src="${car.img}"
			 	 alt="${car.title}"
				/>
				<div class="card-body">
				  <h5 class="card-title">${car.title}</h5>
					<p class="card-text"></p>
					<a href="" class="btn btn-primary" data-btn='price' data-id='${car.id}'>Цена</a>
					<a href="" class="btn btn-danger" data-btn='delete' data-id='${car.id}'>Удалить</a>
				</div>
			</div>
		</div>`

// Отрисовка всех карточек
function render() {
	document.querySelector('#car').innerHTML = cars.map(createCar).join('')
}
render()

// Слушатель для кнопока, вызывающий 2-а разных модальных окна
document.addEventListener('click', event => {
	event.preventDefault()
	const id = +event.target.dataset.id
	const car = cars.find(c => c.id === id)

	if (event.target.dataset.btn === 'price') {
		priceModal.setContent(`<span>Цена на ${car.title}: <strong>${car.price}$</strong></span>`)
		priceModal.open()
	} else if (event.target.dataset.btn === 'delete') {
		$.confirm({
			content: `<span>Вы собираетесь удалить из списка <b>${car.title}</b></span>`,
		})
			.then(() => {
				cars = cars.filter(c => c.id !== id)
				render()
			})
			.catch(() => {})
	}
})
