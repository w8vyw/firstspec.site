const form = document.querySelector('.feedback__form')
const inputName = document.querySelector('#feedback__input-name')
const labelName = document.querySelector('[for="feedback__input-name"]')
const inputTel = document.querySelector('#feedback__input-tel')
const labelTel = document.querySelector('[for="feedback__input-tel"]')

form.addEventListener('submit', e => {
	e.preventDefault()
	document.querySelector('.feedback__submit-btn').classList.add('btn--off')
	setTimeout(() => {
		document.querySelector('.feedback__submit-btn').classList.remove('btn--off')
	}, 2500)
	if (validation()) {
		sendForm(form)
	}
})

function validation() {
	let result = true

	if (!/^[а-яёА-ЯЁ]+$/.test(inputName.value)) {
		result = false

		toggleErrorClass(inputName)
		labelName.textContent = 'Введите корректное имя'

		inputName.addEventListener('focus', () => {
			toggleErrorClass(inputName, '0')
			labelName.textContent = 'Ваше имя'
		})
	}

	if (inputName.value === '') {
		result = false

		toggleErrorClass(inputName)
		labelName.textContent = 'Заполните поле'

		inputName.addEventListener('focus', () => {
			toggleErrorClass(inputName, '0')
			labelName.textContent = 'Ваше имя'
		})
	}

	if (!/^((\+7|8)+([0-9]){10})$/.test(inputTel.value)) {
		result = false

		toggleErrorClass(inputTel)
		labelTel.textContent = 'Введите корректный номер телефона'

		inputTel.addEventListener('focus', () => {
			toggleErrorClass(inputTel, 0)
			labelTel.textContent = 'Ваш номер телефона'
		})
	}

	if (inputTel.value === '') {
		result = false

		toggleErrorClass(inputTel)
		labelTel.textContent = 'Заполните поле'

		inputTel.addEventListener('focus', () => {
			toggleErrorClass(inputTel, 0)
			labelTel.textContent = 'Ваш номер телефона'
		})
	}

	return result
}

function toggleErrorClass(input, action = 1) {
	if (input === inputName) {
		if (action === 1) {
			inputName.classList.add('feedback__input--error')
			labelName.classList.add('feedback__label--error')
		} else {
			inputName.classList.remove('feedback__input--error')
			labelName.classList.remove('feedback__label--error')
		}
	} else {
		if (action === 1) {
			inputTel.classList.add('feedback__input--error')
			labelTel.classList.add('feedback__label--error')
		} else {
			inputTel.classList.remove('feedback__input--error')
			labelTel.classList.remove('feedback__label--error')
		}
	}
}

async function sendForm(form) {
	const formData = new FormData(form)

	if (formData) {
		const url = 'php/form.php'

		const response = await fetch(url, {
			method: 'POST',
			body: formData
		})

		if (response.ok) {
			form.reset()

			document.querySelector('[data-form-result="success"]').classList.add('feedback__form-result--show')
			setTimeout(() => {
				document.querySelector('[data-form-result="success"]').classList.remove('feedback__form-result--show')
			}, 5000)
		} else {
			document.querySelector('[data-form-result="error"]').classList.add('feedback__form-result--show')
			setTimeout(() => {
				document.querySelector('[data-form-result="error"]').classList.remove('feedback__form-result--show')
			}, 5000)
		}
	}
}