import '../index.html'
import '../sass/main.scss'
import './components/toTop'
import './components/map'
import './components/form'

const bag = document.querySelectorAll('.ymaps-2-1-79-copyright__logo')
bag.forEach(b => {
	b.classList.add('dn')
})