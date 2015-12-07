// removing an item from a list of text input
// This is very inefficient because it loops through the number of rows twice
// 	every time an item is removed but I can't imagine someone coming up with a
// 	large enough list of items to cause a delay
$('fieldset').on('click', '.remove', function () {

	var _parent = $(this).closest('.pure-group'),
		_index = $(this).data('index');

	// remove the clicked element
	$(this).remove();
	// remove the associated element
	_parent.find('input[data-index="' + _index + '"]').remove();

	_parent.find('button').each(function (_index, _element) {

		$(_element).data('index', _index);

	});

	// Do not restrict to '.remove' because we need the next index if another item is added
	_parent.find('input').each(function (_index, _element) {

		$(_element).data('index', _index);

	});

});

// adding an item to a list of text input
$('fieldset').on('click', '.add', function () {

	var _currIndex = $(this).data('index'),
		_nameAttachment = $(this).data('name-attachment'),
		_itemName = $(this).data('item-name'),
		_input = createInput('', _currIndex, _nameAttachment, 'INSERT NEW ' + _itemName.toUpperCase()),
		_button = createRemoveButton(_currIndex);

	var _parent = $(this).closest('.pure-group');

	// insert the new textbox
	_parent.find('input:last-of-type').after(_input);
	// insert the new button
	$(this).before(_button);

	// increment the add button's index
	$(this).data('index', _currIndex+1);

});