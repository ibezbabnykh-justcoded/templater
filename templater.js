;(function($) {
	function render(template, element) {
		return template.replace(/{{(.*?)}}/g, function(match, template) {
			if(template === 'html') {
				return element.innerHTML;
			} else {
				return element.getAttribute(template);
			}
		});
	};

	function run($elements, tag, template) {
		$elements.each(function(index, element) {
			element.outerHTML = render(template, element);
		});
	};

	function findElement($el, tags) {
		Object.keys(tags).map(function(customTag){
			let $elements = $el.find(customTag);
			let length = $elements.length;
			if (length) {
				run($elements, customTag, tags[customTag]);
			}
		});
	};

	$.fn.templater = function(opt) {
		return this.each(function(index, el){
			let $el = $(el);
			findElement($el, opt.tags);
		});
	};
}(jQuery));