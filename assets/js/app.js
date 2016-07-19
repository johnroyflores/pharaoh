var headerElement = 'h2';
var parentId = 'collapsible-section';

$(headerElement)
	.parent()
	.wrapInner('<div id="' + parentId + '" class="panel-group"/>');

$(headerElement).each(function(index) {
	var $header = $(this);
	var $children = $header.nextUntil(headerElement);
	var sectionId = 'section-' + index;
	var isOpen = function() {
		return (index === 0) ? 'in' : null;
	};

	// Wrap all elements in a panel
	$header
		.add($children)
		.wrapAll('<div class="panel panel-default"/>');

	// Make section header the panel header
	$header
		.addClass('panel-title')
		.wrap('<div class="panel-heading"/>')
		.wrapInner('<a data-toggle="collapse" data-parent="#' + parentId + '" href="#' + sectionId + '"/>');

	// Wrap header children in a collapsible container
	$children.wrapAll('<div id="' + sectionId + '" class="panel-collapse collapse ' + isOpen() + '"><div class="panel-body"></div></div>');
});
