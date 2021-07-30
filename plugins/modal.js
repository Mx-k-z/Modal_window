//Метод вставки элемента после конкретного элемента
Element.prototype.appendAfter = function (element) {
	element.parentNode.insertBefore(this, element.nextSibling)
}

// Создание подвала модального окна
function _createModalFooter(buttons = []) {
	if (buttons.length === 0) return document.createElement('div')

	const wrap = document.createElement('div')
	wrap.classList.add('modal-footer')

	buttons.forEach(btn => {
		let $btn = document.createElement('button')
		$btn.textContent = btn.text
		$btn.classList.add(`btn`)
		$btn.classList.add(`btn-${btn.type}`)
		$btn.onclick = btn.handler

		wrap.append($btn)
	})

	return wrap
}

// функция создания модального окна
function _createModal(options) {
	const modal = document.createElement('div')
	modal.classList.add('vmodal')
	modal.insertAdjacentHTML(
		'afterbegin',
		`<div class="modal-overlay" data-close='true'>
			  <div class="modal-window" style="width:${options.width || '600px'}">
					<div class="modal-header">
						<span class="modal-title">${options.title || 'Window'}</span>
						${options.closable ? `<span class="modal-close" data-close='true'>&times</span>` : ''}
					</div>
					<div class="modal-body">
						${options.content || ''}
					</div>
			  </div>
      </div>`
	)
	const footer = _createModalFooter(options.footerBar)
	footer.appendAfter(modal.querySelector('.modal-body'))
	document.body.append(modal)
	return modal
}

// Создание модального окна, также методов взаимодействия с ним
$.modal = function (options) {
	const ANIMATION_SPEED = 200
	let $modal = _createModal(options)
	let closing = false

	let modalClose = e => {
		if (!e.target.dataset.close) return
		modalMethods.close()
	}

	$modal.addEventListener('click', modalClose)

	let modalMethods = {
		setContent(html) {
			$modal.querySelector('.modal-body').innerHTML = html
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
				if (typeof options.onClose === 'function') {
					options.onClose()
				}
			}, ANIMATION_SPEED)
		},

		destroy() {
			$modal.remove()
			$modal.removeEventListener('click', modalClose)
		},
	}

	return modalMethods
}
