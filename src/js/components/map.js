ymaps.ready(init)
function init() {
	let map = new ymaps.Map('map', {
		center: [55.858986546991794, 37.64179043254089],
		zoom: 17
	})
	let mark = new ymaps.Placemark(
		[55.858986546991794, 37.64179043254089],
		{
			balloonContentHeader: '<span style="display: block; margin-bottom: 8px;">FirstSpec</span>',
			balloonContentBody:
				'<a style="font-size: 17px; display: block; margin-bottom: 5px;" href="tel:89162294909">8 916 229 49 09</a><a style="font-size: 17px;" href="mailto:info@firstspec.site">info@firstspec.site</a>',
			balloonContentFooter: 'ООО Землестрой',
			hintContent: 'ООО Землестрой'
		},
		{
			preset: 'islands#blackDotIcon'
		}
	)
	map.geoObjects.add(mark)
	map.controls.remove('geolocationControl')
	map.controls.remove('searchControl')
	map.controls.remove('trafficControl')
	map.controls.remove('typeSelector')
	map.controls.remove('fullscreenControl')
	map.controls.remove('zoomControl')
	map.controls.remove('rulerControl')
}