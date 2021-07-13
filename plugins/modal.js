function _createModal(options) {
	const modal = document.createElement('div')
	modal.classList.add('vmodal')
	modal.insertAdjacentHTML(
		'afterbegin',
		`<div class="modal-overlay">
			  <div class="modal-window">
					<div class="modal-header">
						<span id='changeTitle'class="modal-title">Modal title</span>
						<span id='closableWin' class="modal-close">&times</span>
					</div>
					<div class="modal-body">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
					<div class="modal-footer">
						<input id='textInner' style='width:400px' value='Введи текст и нажми Install...'>
						<button id='btnInstall'>Install</button>
						<button id='canselModal'>Cancel</button>
						<button id='destroyModal'>Destroy</button>
					</div>
			  </div>
      </div>`
	)
	document.body.append(modal)
	return modal
}
$.modal = function (options) {
	const ANIMATION_SPEED = 200
	let $modal = _createModal(options)
	let closing = false

	let optionsWin = {
		opt(options) {
			changeTitle.innerHTML = options.title
			this.closable = options.closable
			document.querySelector('.modal-window').style.width = options.width + 'px'
			let overlay = document.querySelector('.modal-overlay')

			btnInstall.addEventListener('click', () => this.installValue())
			canselModal.addEventListener('click', () => this.close())
			destroyModal.addEventListener('click', () => this.destroy())
			closableWin.addEventListener('click', () => this.close())
			overlay.addEventListener('click', e => {
				if (e.target.className != 'modal-overlay') return
				this.close()
			})
		},

		onOpen: action => {
			if (data != null) data()
		},
		beforeClose: (data, action) => data(action),

		onClose: data => {
			if (data != null) data()
		},

		installValue() {
			let contentInside = document.querySelector('.modal-body')
			contentInside.innerHTML = textInner.value
		},

		open() {
			!closing && $modal.classList.add('open')
		},

		close() {
			closing = true
			$modal.classList.remove('open')
			$modal.classList.add('hide')
			setTimeout(() => {
				$modal.classList.remove('hide')
				closing = false
			}, ANIMATION_SPEED)
		},

		destroy() {
			$modal.remove()
			$modal = null
		},
	}

	optionsWin.opt(options)
	return optionsWin
}
