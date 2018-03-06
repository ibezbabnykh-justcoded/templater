var Templater = {
	tags: {},
	addTag: function(tagName, template) {
		this.tags[tagName] = template;
	},
	run: function() {
		for(var customTag in this.tags) {
			let elements = document.getElementsByTagName(customTag);
			let length = elements.length;
			if (!length) {
				continue;
			}

			for(let i = 0; i < length; i++) {
				let element = elements[0];
				element.outerHTML = this.tags[customTag];

			}
		};
	}

}