let options = {
	title: document.querySelector('#txTitle').value,
	closable: document.querySelector('#cbClosable').checked,
	width: document.querySelector('#txWidth').value,
}

const modal = $.modal(options)

btnOpen.addEventListener('click', modal.open)
