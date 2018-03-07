var Templater = {
	tags: {},
	render: function(template, element) {
		return template.replace(/{{(.*?)}}/g, function(match, template) {
			if(template === 'html') {
				return element.innerHTML;
			} else {
				return element.getAttribute(template);
			}
		});
	},
	addTag: function(tagName, template) {
		this.tags[tagName] = template;
	},
	run: function() {
		for(let customTag in this.tags) {
			let elements = Array.from(document.getElementsByTagName(customTag));
			let length = elements.length;
			if (!length) {
				return;
			}

			elements.forEach((element) => {
				element.outerHTML = this.render(this.tags[customTag], element);
			});
		};
	}
}