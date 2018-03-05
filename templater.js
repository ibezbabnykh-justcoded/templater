var Templater = {
	run: function() {
		let elem = document.getElementsByTagName('bootstrap_button');
		let length = elem.length;
		if (!length) {
			return;
		}

		for(let i = 0; i < length; i++) {
			let element = elem[0];
			let elementContent = element.innerHTML;
			let newElem = document.createElement('button');

			newElem.setAttribute('type', 'submit');
			newElem.classList.add('btn', 'btn-default');
			if (elementContent.replace(/\s/g, '').length) {
				newElem.innerHTML = elementContent;
			} else {
				newElem.innerHTML = 'Some Text';
			}

			element.parentNode.replaceChild(newElem, element);
		}
	}

}