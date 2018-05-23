;(function($) {
	function render(template, element) {
		return template.replace(/{{(.*?)}}/g, function(match, template) {
			if(template === 'html') {
				return element.innerHTML;
			} else {
				return element.getAttribute(template);
			}
		});
	}

	function run($element, tag, template) {
    var $elements = $element.find(tag),
        element;
      
    if(!$elements.length) {
      return;
    }

    element = $elements[0];
    element.outerHTML = render(template, element);
    run($element, tag, template);

	}

	function findElement($element, tags) {
		Object.keys(tags).map(function(customTag){
      if(tags.hasOwnProperty(customTag)) {
        run($element, customTag, tags[customTag]);
      }
		});
	}

	$.fn.templater = function(opt) {
		return this.each(function(index, el){
			var $el = $(el);
			findElement($el, opt.tags);
		});
	}
}(jQuery));